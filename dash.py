from flask import (
    Flask,
    render_template,
    request,
    redirect,
    url_for,
    flash,
    session,
    jsonify,
)
import csv
import os
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "your_secret_key"  # Set a strong secret key here

# Configure CORS to allow credentials and specific origins
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
            if request.headers.get("Content-Type") == "application/json":
                return (
                    jsonify({"success": False, "message": "Authentication required"}),
                    401,
                )
            flash("Please log in to access this page", "error")
            return redirect(url_for("login"))
        return f(*args, **kwargs)

    return decorated_function


# Routes
@app.route("/")
def index():
    return redirect(url_for("login"))


@app.route("/login", methods=["GET", "POST"])
def login():
    # Check if this is an API request
    is_api_request = request.headers.get("Content-Type") == "application/json"

    if request.method == "POST":
        # Handle JSON requests from frontend
        if is_api_request:
            data = request.get_json()
            username = data.get("username")
            password = data.get("password")
        else:
            # Handle form submissions
            username = request.form.get("username")
            password = request.form.get("password")

        # Check if user exists
        with open(USERS_FILE, "r", newline="") as file:
            reader = csv.DictReader(file)
            for row in reader:
                if row["username"] == username and check_password_hash(
                    row["password"], password
                ):
                    session["username"] = username

                    if is_api_request:
                        return jsonify(
                            {
                                "success": True,
                                "message": "Login successful",
                                "redirect": url_for("search"),
                            }
                        )

                    flash("Login successful!", "success")
                    return redirect(url_for("search"))

        # Login failed
        if is_api_request:
            return (
                jsonify({"success": False, "message": "Invalid username or password"}),
                401,
            )

        return render_template("search.html", error="Invalid username or password")

    # GET request
    return render_template("search.html")


@app.route("/signup", methods=["GET", "POST"])
def signup():
    # Check if this is an API request
    is_api_request = request.headers.get("Content-Type") == "application/json"

    if request.method == "POST":
        if is_api_request:
            data = request.get_json()
            username = data.get("username")
            password = data.get("password")
            confirm_password = data.get("confirm_password")
        else:
            username = request.form.get("username")
            password = request.form.get("password")
            confirm_password = request.form.get("confirm_password")

        # Validate input
        if password != confirm_password:
            error = "Passwords do not match"
            if is_api_request:
                return jsonify({"success": False, "message": error}), 400
        else:
            # Check if username already exists
            username_exists = False
            with open(USERS_FILE, "r", newline="") as file:
                reader = csv.DictReader(file)
                for row in reader:
                    if row["username"] == username:
                        username_exists = True
                        break

            if username_exists:
                error = "Username already exists"
                if is_api_request:
                    return jsonify({"success": False, "message": error}), 400
            else:
                # Add new user
                with open(USERS_FILE, "a", newline="") as file:
                    writer = csv.writer(file)
                    writer.writerow([username, generate_password_hash(password)])

                if is_api_request:
                    return jsonify(
                        {
                            "success": True,
                            "message": "Sign-up successful! Please log in.",
                            "redirect": url_for("login"),
                        }
                    )

                flash("Sign-up successful! Please log in.", "success")
                return redirect(url_for("login"))

        if not is_api_request:
            return render_template("search.html", error=error)

    return render_template("search.html")


@app.route("/logout")
def logout():
    is_api_request = request.headers.get("Content-Type") == "application/json"

    session.pop("username", None)

    if is_api_request:
        return jsonify(
            {
                "success": True,
                "message": "You have been logged out",
                "redirect": url_for("login"),
            }
        )

    flash("You have been logged out", "success")
    return redirect(url_for("login"))


@app.route("/search")
@login_required
def search():
    is_api_request = request.headers.get("Content-Type") == "application/json"

    if is_api_request:
        return jsonify({"success": True, "username": session.get("username")})

    return render_template("search.html", username=session.get("username"))


@app.after_request
def after_request(response):
    # Add CORS headers to each response
    response.headers.add(
        "Access-Control-Allow-Origin", request.headers.get("Origin", "*")
    )
    response.headers.add("Access-Control-Allow-Credentials", "true")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    return response


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
