import csv
import os
from functools import wraps

from flask import Flask, jsonify, request, session
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)
app.secret_key = "your_secret_key"  # Set a strong secret key here

# Enable CORS properly
CORS(
    app,
    resources={
        r"/*": {
            "origins": ["http://127.0.0.1:5500", "http://localhost:5500"],
            "supports_credentials": True,
            "allow_headers": ["Content-Type", "Authorization"],
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        }
    },
)

# File to store user data
USERS_FILE = "users.csv"


# Create users file if it doesn't exist
def initialize_users_file():
    if not os.path.exists(USERS_FILE):
        with open(USERS_FILE, "w", newline="") as file:
            writer = csv.writer(file)
            writer.writerow(["username", "password"])
            # Add default admin user
            writer.writerow(["admin", generate_password_hash("1234")])


# Login required decorator
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if "username" not in session:
            return (
                jsonify({"success": False, "message": "Authentication required"}),
                401,
            )
        return f(*args, **kwargs)

    return decorated_function


# Routes
@app.route("/")
@login_required
def index():
    return jsonify({"success": True, "message": "Welcome, you are logged in"})


@app.route("/login", methods=["GET", "POST", "OPTIONS"])
def login():
    # Handle preflight OPTIONS request
    if request.method == "OPTIONS":
        return "", 200

    if request.method == "POST":
        # Process form data - try multiple ways to get the data
        data = None

        # Check if data is in form
        if request.form:
            username = request.form.get("username")
            password = request.form.get("password")
        # Check if data is in JSON
        elif request.is_json:
            data = request.get_json()
            username = data.get("username")
            password = data.get("password")
        # Check raw data
        else:
            try:
                # Try to parse the raw data
                data = request.get_data()
                print(f"Raw data received: {data}")
                # Handle form data from fetch API
                from urllib.parse import parse_qs

                parsed_data = parse_qs(data.decode("utf-8"))
                print(f"Parsed data: {parsed_data}")
                username = parsed_data.get("username", [""])[0]
                password = parsed_data.get("password", [""])[0]
            except Exception as e:
                print(f"Error parsing data: {str(e)}")
                username = None
                password = None

        # Print debug info
        print(f"Request content type: {request.content_type}")
        print(f"Username received: {username}")
        print(f"Password received: {'*' * len(password) if password else None}")

        if not username or not password:
            return (
                jsonify(
                    {"success": False, "message": "Username and password are required"}
                ),
                400,
            )

        # Check if user exists - with safer file handling
        try:
            # First check if file exists
            if not os.path.exists(USERS_FILE):
                print("Users file does not exist!")
                initialize_users_file()
                return (
                    jsonify(
                        {"success": False, "message": "Invalid username or password"}
                    ),
                    401,
                )

            # Debug - print file contents
            with open(USERS_FILE, "r", newline="") as debug_file:
                content = debug_file.read()
                print(
                    f"CSV file content preview: {content[:100]}..."
                )  # First 100 chars

            # Now try to read it
            found_user = False
            with open(USERS_FILE, "r", newline="") as file:
                reader = csv.reader(file)
                for row in reader:
                    # Skip empty rows
                    if not row or len(row) < 2:
                        continue

                    # Skip header row if it exists
                    if row[0] == "username" and row[1] == "password":
                        continue

                    stored_username = row[0]
                    stored_password = row[1]

                    # Debug
                    print(f"Checking user: {stored_username}")

                    if stored_username == username:
                        found_user = True
                        try:
                            if check_password_hash(stored_password, password):
                                session["username"] = username
                                return jsonify(
                                    {
                                        "success": True,
                                        "message": "Login successful!",
                                        "redirect": "/search",
                                    }
                                )
                        except Exception as e:
                            print(f"Password verification error: {str(e)}")
                            # If the password hash is invalid, continue to the invalid credentials message

            if not found_user:
                print(f"User {username} not found")
            else:
                print(f"User found but password didn't match")

            return (
                jsonify({"success": False, "message": "Invalid username or password"}),
                401,
            )

        except Exception as e:
            print(f"Login error details: {str(e)}")
            import traceback

            print(traceback.format_exc())
            return jsonify({"success": False, "message": "Server error occurred"}), 500

    # GET request
    return jsonify({"success": True, "message": "Please login"})


@app.route("/signup", methods=["GET", "POST", "OPTIONS"])
def signup():
    # Handle preflight OPTIONS request
    if request.method == "OPTIONS":
        return "", 200

    if request.method == "POST":
        try:
            # Process form data - try multiple ways to get the data
            if request.form:
                username = request.form.get("username")
                password = request.form.get("password")
                confirm_password = request.form.get("confirm_password")
            elif request.is_json:
                data = request.get_json()
                username = data.get("username")
                password = data.get("password")
                confirm_password = data.get("confirm_password")
            else:
                try:
                    data = request.get_data()
                    from urllib.parse import parse_qs

                    parsed_data = parse_qs(data.decode("utf-8"))
                    username = parsed_data.get("username", [""])[0]
                    password = parsed_data.get("password", [""])[0]
                    confirm_password = parsed_data.get("confirm_password", [""])[0]
                except Exception as e:
                    print(f"Error parsing signup data: {str(e)}")
                    username = None
                    password = None
                    confirm_password = None

            print(f"Signup request - Username: {username}")

            if not username or not password or not confirm_password:
                return (
                    jsonify({"success": False, "message": "All fields are required"}),
                    400,
                )

            # Validate input
            if password != confirm_password:
                return jsonify({"success": False, "message": "Passwords do not match"})

            # Initialize CSV file if it doesn't exist
            if not os.path.exists(USERS_FILE):
                initialize_users_file()

            # Check if username already exists - safer file handling
            username_exists = False
            try:
                with open(USERS_FILE, "r", newline="") as file:
                    reader = csv.reader(file)
                    for row in reader:
                        # Skip the header if it exists
                        if row and row[0] == "username" and row[1] == "password":
                            continue

                        if row and row[0] == username:
                            username_exists = True
                            break
            except Exception as e:
                print(f"Error checking existing username: {str(e)}")
                return jsonify({"success": False, "message": "Database error"}), 500

            if username_exists:
                return jsonify({"success": False, "message": "Username already exists"})

            # Add new user
            try:
                # Check file structure before appending
                file_has_header = False
                if os.path.exists(USERS_FILE) and os.path.getsize(USERS_FILE) > 0:
                    with open(USERS_FILE, "r", newline="") as file:
                        reader = csv.reader(file)
                        first_row = next(reader, None)
                        if (
                            first_row
                            and first_row[0] == "username"
                            and first_row[1] == "password"
                        ):
                            file_has_header = True

                # If file doesn't have header, we need to create a new file
                if not file_has_header:
                    initialize_users_file()

                # Now append the new user
                with open(USERS_FILE, "a", newline="") as file:
                    writer = csv.writer(file)
                    writer.writerow([username, generate_password_hash(password)])
                print(f"Successfully added user: {username}")

                return jsonify(
                    {
                        "success": True,
                        "message": "Sign-up successful! Please log in.",
                        "redirect": "/login",
                    }
                )
            except Exception as e:
                print(f"Error adding new user: {str(e)}")
                return (
                    jsonify({"success": False, "message": "Could not create account"}),
                    500,
                )

        except Exception as e:
            print(f"Signup error details: {str(e)}")
            import traceback

            print(traceback.format_exc())
            return jsonify({"success": False, "message": "Server error occurred"}), 500

    return jsonify({"success": True, "message": "Please sign up"})


@app.route("/logout")
def logout():
    session.pop("username", None)
    return jsonify(
        {"success": True, "message": "You have been logged out", "redirect": "/login"}
    )


@app.route("/search")
@login_required
def search():
    return jsonify(
        {"success": True, "message": "Search page", "username": session.get("username")}
    )


@app.after_request
def after_request(response):
    # Set CORS headers
    response.headers.add(
        "Access-Control-Allow-Origin",
        request.headers.get("Origin", "http://127.0.0.1:5500"),
    )
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    response.headers.add("Access-Control-Allow-Credentials", "true")
    response.headers.add("Vary", "Origin")  # Important for proper caching with CORS
    return response


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
