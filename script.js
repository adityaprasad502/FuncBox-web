// Extended snippets data with more information
const snippets = [
    [
        {
            "id": 1,
            "title": "is odd",
            "description": "to check whether the given number is odd or not.",
            "language": "python",
            "code": "from funcbox import is_odd\n\nprint(is_odd(...))  # Single Value\nprint(is_odd([......]))  # Multiple Values",
            "created": "2025-03-09T05:51:54.380Z",
            "tags": [
                "odd",
                "math",
                "python"
            ]
        },
        {
            "id": 2,
            "title": "is odd",
            "description": "to check whether the given number is odd or not.",
            "language": "java",
            "code": "public static boolean isOdd(int num) {\n    return num % 2 != 0;\n}",
            "created": "2025-03-09T05:51:54.382Z",
            "tags": [
                "odd",
                "math",
                "java"
            ]
        },
        {
            "id": 3,
            "title": "is odd",
            "description": "to check whether the given number is odd or not.",
            "language": "c",
            "code": "#include <stdbool.h>\n\nbool is_odd(int num) {\n    return num % 2 != 0;\n}",
            "created": "2025-03-09T05:51:54.383Z",
            "tags": [
                "odd",
                "math",
                "c"
            ]
        },
        {
            "id": 4,
            "title": "is odd",
            "description": "to check whether the given number is odd or not.",
            "language": "cpp",
            "code": "#include <iostream>\n\nbool is_odd(int num) {\n    return num % 2 != 0;\n}",
            "created": "2025-03-09T05:51:54.386Z",
            "tags": [
                "odd",
                "math",
                "cpp"
            ]
        },
        {
            "id": 5,
            "title": "is odd",
            "description": "to check whether the given number is odd or not.",
            "language": "csharp",
            "code": "public static bool IsOdd(int num) {\n    return num % 2 != 0;\n}",
            "created": "2025-03-09T05:51:54.392Z",
            "tags": [
                "odd",
                "math",
                "csharp"
            ]
        },
        {
            "id": 6,
            "title": "is odd",
            "description": "to check whether the given number is odd or not.",
            "language": "kotlin",
            "code": "fun isOdd(num: Int): Boolean {\n    return num % 2 != 0\n}",
            "created": "2025-03-09T05:51:54.417Z",
            "tags": [
                "odd",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 7,
            "title": "is odd",
            "description": "to check whether the given number is odd or not.",
            "language": "javascript",
            "code": "function isOdd(num) {\n    return num % 2 !== 0;\n}",
            "created": "2025-03-09T05:51:54.420Z",
            "tags": [
                "odd",
                "math",
                "javascript"
            ]
        },
        {
            "id": 8,
            "title": "is odd",
            "description": "to check whether the given number is odd or not.",
            "language": "go",
            "code": "func IsOdd(num int) bool {\n    return num%2 != 0\n}",
            "created": "2025-03-09T05:51:54.423Z",
            "tags": [
                "odd",
                "math",
                "go"
            ]
        }
    ], [
        {
            "id": 9,
            "title": "is even",
            "description": "to check whether the number is even or not",
            "language": "python",
            "code": "from funcbox import is_even\n\nprint(is_even(...)) # single value\nprint(is_even([.....])) # multiple values",
            "created": "2025-03-09T05:57:22.245Z",
            "tags": [
                "even",
                "math",
                "python"
            ]
        },
        {
            "id": 10,
            "title": "is even",
            "description": "to check whether the number is even or not",
            "language": "java",
            "code": "public static boolean isEven(int num) {\n    return num % 2 == 0;\n}",
            "created": "2025-03-09T05:57:22.252Z",
            "tags": [
                "even",
                "math",
                "java"
            ]
        },
        {
            "id": 11,
            "title": "is even",
            "description": "to check whether the number is even or not",
            "language": "c",
            "code": "#include <stdbool.h>\n\nbool is_even(int num) {\n    return num % 2 == 0;\n}",
            "created": "2025-03-09T05:57:22.256Z",
            "tags": [
                "even",
                "math",
                "c"
            ]
        },
        {
            "id": 12,
            "title": "is even",
            "description": "to check whether the number is even or not",
            "language": "cpp",
            "code": "#include <iostream>\n\nbool is_even(int num) {\n    return num % 2 == 0;\n}",
            "created": "2025-03-09T05:57:22.259Z",
            "tags": [
                "even",
                "math",
                "cpp"
            ]
        },
        {
            "id": 13,
            "title": "is even",
            "description": "to check whether the number is even or not",
            "language": "csharp",
            "code": "public static bool IsEven(int num) {\n    return num % 2 == 0;\n}",
            "created": "2025-03-09T05:57:22.265Z",
            "tags": [
                "even",
                "math",
                "csharp"
            ]
        },
        {
            "id": 14,
            "title": "is even",
            "description": "to check whether the number is even or not",
            "language": "kotlin",
            "code": "fun isEven(num: Int): Boolean {\n    return num % 2 == 0\n}",
            "created": "2025-03-09T05:57:22.290Z",
            "tags": [
                "even",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 15,
            "title": "is even",
            "description": "to check whether the number is even or not",
            "language": "javascript",
            "code": "function isEven(num) {\n    return num % 2 === 0;\n}",
            "created": "2025-03-09T05:57:22.293Z",
            "tags": [
                "even",
                "math",
                "javascript"
            ]
        },
        {
            "id": 16,
            "title": "is even",
            "description": "to check whether the number is even or not",
            "language": "go",
            "code": "func IsEven(num int) bool {\n    return num%2 == 0\n}",
            "created": "2025-03-09T05:57:22.295Z",
            "tags": [
                "even",
                "math",
                "go"
            ]
        }
    ],
    [
        {
            "id": 17,
            "title": "factorial",
            "description": "find the factorial of the given number\n",
            "language": "python",
            "code": "from funcbox import factorial\nprint(factorial(....))  # single value\nprint(factorial([....])) # multiple value",
            "created": "2025-03-09T08:26:35.722Z",
            "tags": [
                "fact",
                "factorial",
                "math",
                "python"
            ]
        },
        {
            "id": 18,
            "title": "factorial",
            "description": "find the factorial of the given number\n",
            "language": "java",
            "code": "public static long factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n}",
            "created": "2025-03-09T08:26:35.736Z",
            "tags": [
                "fact",
                "factorial",
                "math",
                "java"
            ]
        },
        {
            "id": 19,
            "title": "factorial",
            "description": "find the factorial of the given number\n",
            "language": "c",
            "code": "long factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n}",
            "created": "2025-03-09T08:26:35.743Z",
            "tags": [
                "fact",
                "factorial",
                "math",
                "c"
            ]
        },
        {
            "id": 20,
            "title": "factorial",
            "description": "find the factorial of the given number\n",
            "language": "cpp",
            "code": "long factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n}",
            "created": "2025-03-09T08:26:35.746Z",
            "tags": [
                "fact",
                "factorial",
                "math",
                "cpp"
            ]
        },
        {
            "id": 21,
            "title": "factorial",
            "description": "find the factorial of the given number\n",
            "language": "csharp",
            "code": "static long Factorial(int n) {\n    if (n == 0) return 1;\n    return n * Factorial(n - 1);\n}",
            "created": "2025-03-09T08:26:35.753Z",
            "tags": [
                "fact",
                "factorial",
                "math",
                "csharp"
            ]
        },
        {
            "id": 22,
            "title": "factorial",
            "description": "find the factorial of the given number\n",
            "language": "kotlin",
            "code": "fun factorial(n: Int): Long {\n    return if (n == 0) 1 else n * factorial(n - 1)\n}",
            "created": "2025-03-09T08:26:35.779Z",
            "tags": [
                "fact",
                "factorial",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 23,
            "title": "factorial",
            "description": "find the factorial of the given number\n",
            "language": "javascript",
            "code": "function factorial(n) {\n    return n === 0 ? 1 : n * factorial(n - 1);\n}",
            "created": "2025-03-09T08:26:35.782Z",
            "tags": [
                "fact",
                "factorial",
                "math",
                "javascript"
            ]
        },
        {
            "id": 24,
            "title": "factorial",
            "description": "find the factorial of the given number\n",
            "language": "go",
            "code": "func factorial(n int) int {\n    if n == 0 {\n        return 1\n    }\n    return n * factorial(n-1)\n}",
            "created": "2025-03-09T08:26:35.784Z",
            "tags": [
                "fact",
                "factorial",
                "math",
                "go"
            ]
        }
    ], [
        {
            "id": 25,
            "title": "prime number",
            "description": "to find if the given number is a prime or not",
            "language": "python",
            "code": "from funcbox import is_prime\n\nprint(is_prime(...)) # single variable\nprint(is_prime([.....])) # multiple variable",
            "created": "2025-03-09T08:26:09.325Z",
            "tags": [
                "prime",
                "math",
                "python"
            ]
        },
        {
            "id": 26,
            "title": "prime number",
            "description": "to find if the given number is a prime or not",
            "language": "java",
            "code": "public static boolean isPrime(int num) {\n    if (num < 2) return false;\n    for (int i = 2; i * i <= num; i++) {\n        if (num % i == 0) return false;\n    }\n    return true;\n}",
            "created": "2025-03-09T08:26:09.328Z",
            "tags": [
                "prime",
                "math",
                "java"
            ]
        },
        {
            "id": 27,
            "title": "prime number",
            "description": "to find if the given number is a prime or not",
            "language": "c",
            "code": "#include <stdbool.h>\n\nbool is_prime(int num) {\n    if (num < 2) return false;\n    for (int i = 2; i * i <= num; i++) {\n        if (num % i == 0) return false;\n    }\n    return true;\n}",
            "created": "2025-03-09T08:26:09.330Z",
            "tags": [
                "prime",
                "math",
                "c"
            ]
        },
        {
            "id": 28,
            "title": "prime number",
            "description": "to find if the given number is a prime or not",
            "language": "cpp",
            "code": "#include <iostream>\n\nbool is_prime(int num) {\n    if (num < 2) return false;\n    for (int i = 2; i * i <= num; i++) {\n        if (num % i == 0) return false;\n    }\n    return true;\n}",
            "created": "2025-03-09T08:26:09.332Z",
            "tags": [
                "prime",
                "math",
                "cpp"
            ]
        },
        {
            "id": 29,
            "title": "prime number",
            "description": "to find if the given number is a prime or not",
            "language": "csharp",
            "code": "public static bool IsPrime(int num) {\n    if (num < 2) return false;\n    for (int i = 2; i * i <= num; i++) {\n        if (num % i == 0) return false;\n    }\n    return true;\n}",
            "created": "2025-03-09T08:26:09.336Z",
            "tags": [
                "prime",
                "math",
                "csharp"
            ]
        },
        {
            "id": 30,
            "title": "prime number",
            "description": "to find if the given number is a prime or not",
            "language": "kotlin",
            "code": "fun isPrime(num: Int): Boolean {\n    if (num < 2) return false\n    for (i in 2..Math.sqrt(num.toDouble()).toInt()) {\n        if (num % i == 0) return false\n    }\n    return true\n}",
            "created": "2025-03-09T08:26:09.347Z",
            "tags": [
                "prime",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 31,
            "title": "prime number",
            "description": "to find if the given number is a prime or not",
            "language": "javascript",
            "code": "function isPrime(num) {\n    if (num < 2) return false;\n    for (let i = 2; i * i <= num; i++) {\n        if (num % i === 0) return false;\n    }\n    return true;\n}",
            "created": "2025-03-09T08:26:09.349Z",
            "tags": [
                "prime",
                "math",
                "javascript"
            ]
        },
        {
            "id": 32,
            "title": "prime number",
            "description": "to find if the given number is a prime or not",
            "language": "go",
            "code": "func IsPrime(num int) bool {\n    if num < 2 {\n        return false\n    }\n    for i := 2; i*i <= num; i++ {\n        if num%i == 0 {\n            return false\n        }\n    }\n    return true\n}",
            "created": "2025-03-09T08:26:09.353Z",
            "tags": [
                "prime",
                "math",
                "go"
            ]
        }
    ],
    [
        {
            "id": 33,
            "title": "fibonacci",
            "description": "Computes the Fibonacci number for a given non-negative integer or a list of non-negative integers.",
            "language": "python",
            "code": "from funcbox import fibonacci\nprint(is_prime(.....))  # single value\nprint(is_prime([.....]) #list",
            "created": "2025-03-09T08:38:01.748Z",
            "tags": [
                "fibo",
                "math",
                "python"
            ]
        },
        {
            "id": 34,
            "title": "fibonacci",
            "description": "Computes the Fibonacci number for a given non-negative integer or a list of non-negative integers.",
            "language": "java",
            "code": "public static int fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}",
            "created": "2025-03-09T08:38:01.760Z",
            "tags": [
                "fibo",
                "math",
                "java"
            ]
        },
        {
            "id": 35,
            "title": "fibonacci",
            "description": "Computes the Fibonacci number for a given non-negative integer or a list of non-negative integers.",
            "language": "c",
            "code": "int fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}",
            "created": "2025-03-09T08:38:01.763Z",
            "tags": [
                "fibo",
                "math",
                "c"
            ]
        },
        {
            "id": 36,
            "title": "fibonacci",
            "description": "Computes the Fibonacci number for a given non-negative integer or a list of non-negative integers.",
            "language": "cpp",
            "code": "int fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}",
            "created": "2025-03-09T08:38:01.765Z",
            "tags": [
                "fibo",
                "math",
                "cpp"
            ]
        },
        {
            "id": 37,
            "title": "fibonacci",
            "description": "Computes the Fibonacci number for a given non-negative integer or a list of non-negative integers.",
            "language": "csharp",
            "code": "static int Fibonacci(int n) {\n    if (n <= 1) return n;\n    return Fibonacci(n - 1) + Fibonacci(n - 2);\n}",
            "created": "2025-03-09T08:38:01.771Z",
            "tags": [
                "fibo",
                "math",
                "csharp"
            ]
        },
        {
            "id": 38,
            "title": "fibonacci",
            "description": "Computes the Fibonacci number for a given non-negative integer or a list of non-negative integers.",
            "language": "kotlin",
            "code": "fun fibonacci(n: Int): Int {\n    return if (n <= 1) n else fibonacci(n - 1) + fibonacci(n - 2)\n}",
            "created": "2025-03-09T08:38:01.796Z",
            "tags": [
                "fibo",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 39,
            "title": "fibonacci",
            "description": "Computes the Fibonacci number for a given non-negative integer or a list of non-negative integers.",
            "language": "javascript",
            "code": "function fibonacci(n) {\n    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);\n}",
            "created": "2025-03-09T08:38:01.799Z",
            "tags": [
                "fibo",
                "math",
                "javascript"
            ]
        },
        {
            "id": 40,
            "title": "fibonacci",
            "description": "Computes the Fibonacci number for a given non-negative integer or a list of non-negative integers.",
            "language": "go",
            "code": "func fibonacci(n int) int {\n    if n <= 1 {\n        return n\n    }\n    return fibonacci(n-1) + fibonacci(n-2)\n}",
            "created": "2025-03-09T08:38:01.801Z",
            "tags": [
                "fibo",
                "math",
                "go"
            ]
        }
    ],
    [
        {
            "id": 41,
            "title": "palindrome",
            "description": "to check whether the given string is palindrome or not.",
            "language": "python",
            "code": "from funcbox import is_palindrome\n\nprint(is_palindrome(\"madam\")) # single variable\nprint(is_palindrome([\"madam\", \"racecar\"])) # multiple variable",
            "created": "2025-03-09T08:46:11.009Z",
            "tags": [
                "string",
                "palindrome",
                "python"
            ]
        },
        {
            "id": 42,
            "title": "palindrome",
            "description": "to check whether the given string is palindrome or not.",
            "language": "java",
            "code": "public static boolean isPalindrome(int num) {\n    int original = num, reversed = 0;\n    while (num > 0) {\n        reversed = reversed * 10 + num % 10;\n        num /= 10;\n    }\n    return original == reversed;\n}",
            "created": "2025-03-09T08:46:11.013Z",
            "tags": [
                "string",
                "palindrome",
                "java"
            ]
        },
        {
            "id": 43,
            "title": "palindrome",
            "description": "to check whether the given string is palindrome or not.",
            "language": "c",
            "code": "#include <stdbool.h>\n\nbool is_palindrome(int num) {\n    int original = num, reversed = 0;\n    while (num > 0) {\n        reversed = reversed * 10 + num % 10;\n        num /= 10;\n    }\n    return original == reversed;\n}",
            "created": "2025-03-09T08:46:11.015Z",
            "tags": [
                "string",
                "palindrome",
                "c"
            ]
        },
        {
            "id": 44,
            "title": "palindrome",
            "description": "to check whether the given string is palindrome or not.",
            "language": "cpp",
            "code": "#include <iostream>\n\nbool is_palindrome(int num) {\n    int original = num, reversed = 0;\n    while (num > 0) {\n        reversed = reversed * 10 + num % 10;\n        num /= 10;\n    }\n    return original == reversed;\n}",
            "created": "2025-03-09T08:46:11.017Z",
            "tags": [
                "string",
                "palindrome",
                "cpp"
            ]
        },
        {
            "id": 45,
            "title": "palindrome",
            "description": "to check whether the given string is palindrome or not.",
            "language": "csharp",
            "code": "public static bool IsPalindrome(int num) {\n    int original = num, reversed = 0;\n    while (num > 0) {\n        reversed = reversed * 10 + num % 10;\n        num /= 10;\n    }\n    return original == reversed;\n}",
            "created": "2025-03-09T08:46:11.021Z",
            "tags": [
                "string",
                "palindrome",
                "csharp"
            ]
        },
        {
            "id": 46,
            "title": "palindrome",
            "description": "to check whether the given string is palindrome or not.",
            "language": "kotlin",
            "code": "fun isPalindrome(num: Int): Boolean {\n    var original = num\n    var reversed = 0\n    var temp = num\n    while (temp > 0) {\n        reversed = reversed * 10 + temp % 10\n        temp /= 10\n    }\n    return original == reversed\n}",
            "created": "2025-03-09T08:46:11.031Z",
            "tags": [
                "string",
                "palindrome",
                "kotlin"
            ]
        },
        {
            "id": 47,
            "title": "palindrome",
            "description": "to check whether the given string is palindrome or not.",
            "language": "javascript",
            "code": "function isPalindrome(num) {\n    return num.toString() === num.toString().split(\"\").reverse().join(\"\");\n}",
            "created": "2025-03-09T08:46:11.033Z",
            "tags": [
                "string",
                "palindrome",
                "javascript"
            ]
        },
        {
            "id": 48,
            "title": "palindrome",
            "description": "to check whether the given string is palindrome or not.",
            "language": "go",
            "code": "func IsPalindrome(num int) bool {\n    original, reversed := num, 0\n    for temp := num; temp > 0; temp /= 10 {\n        reversed = reversed*10 + temp%10\n    }\n    return original == reversed\n}",
            "created": "2025-03-09T08:46:11.035Z",
            "tags": [
                "string",
                "palindrome",
                "go"
            ]
        }
    ],
    [
        {
            "id": 49,
            "title": "Armstrong",
            "description": "Checks if a given number or a list of numbers is an Armstrong number.",
            "language": "python",
            "code": "from funcbox import armstrong\nprint(is_armstrong(153))  # single\nprint(is_armstrong([370, 9474])) #list",
            "created": "2025-03-09T08:46:09.033Z",
            "tags": [
                "armstrong",
                "math",
                "python"
            ]
        },
        {
            "id": 50,
            "title": "Armstrong",
            "description": "Checks if a given number or a list of numbers is an Armstrong number.",
            "language": "java",
            "code": "public static boolean isArmstrong(int n) {\n    int sum = 0, temp = n, digits = String.valueOf(n).length();\n    while (temp > 0) {\n        sum += Math.pow(temp % 10, digits);\n        temp /= 10;\n    }\n    return sum == n;\n}",
            "created": "2025-03-09T08:46:09.034Z",
            "tags": [
                "armstrong",
                "math",
                "java"
            ]
        },
        {
            "id": 51,
            "title": "Armstrong",
            "description": "Checks if a given number or a list of numbers is an Armstrong number.",
            "language": "c",
            "code": "#include <math.h>\n\nint isArmstrong(int n) {\n    int sum = 0, temp = n, digits = 0, rem;\n    while (temp > 0) {\n        temp /= 10;\n        digits++;\n    }\n    temp = n;\n    while (temp > 0) {\n        rem = temp % 10;\n        sum += pow(rem, digits);\n        temp /= 10;\n    }\n    return sum == n;\n}",
            "created": "2025-03-09T08:46:09.035Z",
            "tags": [
                "armstrong",
                "math",
                "c"
            ]
        },
        {
            "id": 52,
            "title": "Armstrong",
            "description": "Checks if a given number or a list of numbers is an Armstrong number.",
            "language": "cpp",
            "code": "#include <cmath>\n\nbool isArmstrong(int n) {\n    int sum = 0, temp = n, digits = std::to_string(n).length();\n    while (temp > 0) {\n        sum += pow(temp % 10, digits);\n        temp /= 10;\n    }\n    return sum == n;\n}",
            "created": "2025-03-09T08:46:09.037Z",
            "tags": [
                "armstrong",
                "math",
                "cpp"
            ]
        },
        {
            "id": 53,
            "title": "Armstrong",
            "description": "Checks if a given number or a list of numbers is an Armstrong number.",
            "language": "csharp",
            "code": "using System;\n\nstatic bool IsArmstrong(int n) {\n    int sum = 0, temp = n, digits = n.ToString().Length;\n    while (temp > 0) {\n        sum += (int)Math.Pow(temp % 10, digits);\n        temp /= 10;\n    }\n    return sum == n;\n}",
            "created": "2025-03-09T08:46:09.038Z",
            "tags": [
                "armstrong",
                "math",
                "csharp"
            ]
        },
        {
            "id": 54,
            "title": "Armstrong",
            "description": "Checks if a given number or a list of numbers is an Armstrong number.",
            "language": "kotlin",
            "code": "fun isArmstrong(n: Int): Boolean {\n    val digits = n.toString().length\n    return n.toString().sumOf { Character.getNumericValue(it).toDouble().pow(digits).toInt() } == n\n}",
            "created": "2025-03-09T08:46:09.045Z",
            "tags": [
                "armstrong",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 55,
            "title": "Armstrong",
            "description": "Checks if a given number or a list of numbers is an Armstrong number.",
            "language": "javascript",
            "code": "function isArmstrong(n) {\n    let sum = 0, temp = n, digits = n.toString().length;\n    while (temp > 0) {\n        sum += Math.pow(temp % 10, digits);\n        temp = Math.floor(temp / 10);\n    }\n    return sum === n;\n}",
            "created": "2025-03-09T08:46:09.045Z",
            "tags": [
                "armstrong",
                "math",
                "javascript"
            ]
        },
        {
            "id": 56,
            "title": "Armstrong",
            "description": "Checks if a given number or a list of numbers is an Armstrong number.",
            "language": "go",
            "code": "import \"math\"\n\nfunc isArmstrong(n int) bool {\n    sum, temp, digits := 0, n, len(fmt.Sprint(n))\n    for temp > 0 {\n        digit := temp % 10\n        sum += int(math.Pow(float64(digit), float64(digits)))\n        temp /= 10\n    }\n    return sum == n\n}",
            "created": "2025-03-09T08:46:09.046Z",
            "tags": [
                "armstrong",
                "math",
                "go"
            ]
        }
    ], [
        {
            "id": 57,
            "title": "perfect number",
            "description": "to check whether the given number is a perfect number or not.",
            "language": "python",
            "code": "from funcbox import is_perfect\n\nprint(is_perfect(..)) # single variable\nprint(is_perfect([....])) # multiple variable",
            "created": "2025-03-09T08:53:50.710Z",
            "tags": [
                "perfect number",
                "perfect",
                "python"
            ]
        },
        {
            "id": 58,
            "title": "perfect number",
            "description": "to check whether the given number is a perfect number or not.",
            "language": "java",
            "code": "public static boolean isPerfect(int num) {\n    if (num < 2) return false;\n    int sum = 1;\n    for (int i = 2; i * i <= num; i++) {\n        if (num % i == 0) {\n            sum += i;\n            if (i != num / i) sum += num / i;\n        }\n    }\n    return sum == num;\n}",
            "created": "2025-03-09T08:53:50.711Z",
            "tags": [
                "perfect number",
                "perfect",
                "java"
            ]
        },
        {
            "id": 59,
            "title": "perfect number",
            "description": "to check whether the given number is a perfect number or not.",
            "language": "c",
            "code": "#include <stdbool.h>\n\nbool is_perfect(int num) {\n    if (num < 2) return false;\n    int sum = 1;\n    for (int i = 2; i * i <= num; i++) {\n        if (num % i == 0) {\n            sum += i;\n            if (i != num / i) sum += num / i;\n        }\n    }\n    return sum == num;\n}",
            "created": "2025-03-09T08:53:50.714Z",
            "tags": [
                "perfect number",
                "perfect",
                "c"
            ]
        },
        {
            "id": 60,
            "title": "perfect number",
            "description": "to check whether the given number is a perfect number or not.",
            "language": "cpp",
            "code": "#include <iostream>\n\nbool is_perfect(int num) {\n    if (num < 2) return false;\n    int sum = 1;\n    for (int i = 2; i * i <= num; i++) {\n        if (num % i == 0) {\n            sum += i;\n            if (i != num / i) sum += num / i;\n        }\n    }\n    return sum == num;\n}",
            "created": "2025-03-09T08:53:50.715Z",
            "tags": [
                "perfect number",
                "perfect",
                "cpp"
            ]
        },
        {
            "id": 61,
            "title": "perfect number",
            "description": "to check whether the given number is a perfect number or not.",
            "language": "csharp",
            "code": "public static bool IsPerfect(int num) {\n    if (num < 2) return false;\n    int sum = 1;\n    for (int i = 2; i * i <= num; i++) {\n        if (num % i == 0) {\n            sum += i;\n            if (i != num / i) sum += num / i;\n        }\n    }\n    return sum == num;\n}",
            "created": "2025-03-09T08:53:50.716Z",
            "tags": [
                "perfect number",
                "perfect",
                "csharp"
            ]
        },
        {
            "id": 62,
            "title": "perfect number",
            "description": "to check whether the given number is a perfect number or not.",
            "language": "kotlin",
            "code": "fun isPerfect(num: Int): Boolean {\n    if (num < 2) return false\n    var sum = 1\n    for (i in 2..Math.sqrt(num.toDouble()).toInt()) {\n        if (num % i == 0) {\n            sum += i\n            if (i != num / i) sum += num / i\n        }\n    }\n    return sum == num\n}",
            "created": "2025-03-09T08:53:50.717Z",
            "tags": [
                "perfect number",
                "perfect",
                "kotlin"
            ]
        },
        {
            "id": 63,
            "title": "perfect number",
            "description": "to check whether the given number is a perfect number or not.",
            "language": "javascript",
            "code": "function isPerfect(num) {\n    if (num < 2) return false;\n    let sum = 1;\n    for (let i = 2; i * i <= num; i++) {\n        if (num % i === 0) {\n            sum += i;\n            if (i !== num / i) sum += num / i;\n        }\n    }\n    return sum === num;\n}",
            "created": "2025-03-09T08:53:50.718Z",
            "tags": [
                "perfect number",
                "perfect",
                "javascript"
            ]
        },
        {
            "id": 64,
            "title": "perfect number",
            "description": "to check whether the given number is a perfect number or not.",
            "language": "go",
            "code": "func IsPerfect(num int) bool {\n    if num < 2 {\n        return false\n    }\n    sum := 1\n    for i := 2; i*i <= num; i++ {\n        if num%i == 0 {\n            sum += i\n            if i != num/i {\n                sum += num / i\n            }\n        }\n    }\n    return sum == num\n}",
            "created": "2025-03-09T08:53:50.719Z",
            "tags": [
                "perfect number",
                "perfect",
                "go"
            ]
        }
    ],
    [
        {
            "id": 65,
            "title": "harshad number",
            "description": "Checks if a given number or a list of numbers is a Harshad number (divisible by the sum of its digits).",
            "language": "python",
            "code": "from funcbox import harshad\nprint(is_harshad(....))  # single\nprint(is_harshad([.....])) #list",
            "created": "2025-03-09T09:06:14.288Z",
            "tags": [
                "harshad",
                "math",
                "python"
            ]
        },
        {
            "id": 66,
            "title": "harshad number",
            "description": "Checks if a given number or a list of numbers is a Harshad number (divisible by the sum of its digits).",
            "language": "java",
            "code": "public static boolean isHarshad(int n) {\n    int sum = 0, temp = n;\n    while (temp > 0) {\n        sum += temp % 10;\n        temp /= 10;\n    }\n    return n % sum == 0;\n}",
            "created": "2025-03-09T09:06:14.289Z",
            "tags": [
                "harshad",
                "math",
                "java"
            ]
        },
        {
            "id": 67,
            "title": "harshad number",
            "description": "Checks if a given number or a list of numbers is a Harshad number (divisible by the sum of its digits).",
            "language": "c",
            "code": "#include <stdio.h>\n\nint isHarshad(int n) {\n    int sum = 0, temp = n;\n    while (temp > 0) {\n        sum += temp % 10;\n        temp /= 10;\n    }\n    return (n % sum == 0);\n}",
            "created": "2025-03-09T09:06:14.290Z",
            "tags": [
                "harshad",
                "math",
                "c"
            ]
        },
        {
            "id": 68,
            "title": "harshad number",
            "description": "Checks if a given number or a list of numbers is a Harshad number (divisible by the sum of its digits).",
            "language": "cpp",
            "code": "bool isHarshad(int n) {\n    int sum = 0, temp = n;\n    while (temp > 0) {\n        sum += temp % 10;\n        temp /= 10;\n    }\n    return (n % sum == 0);\n}",
            "created": "2025-03-09T09:06:14.290Z",
            "tags": [
                "harshad",
                "math",
                "cpp"
            ]
        },
        {
            "id": 69,
            "title": "harshad number",
            "description": "Checks if a given number or a list of numbers is a Harshad number (divisible by the sum of its digits).",
            "language": "csharp",
            "code": "static bool IsHarshad(int n) {\n    int sum = 0, temp = n;\n    while (temp > 0) {\n        sum += temp % 10;\n        temp /= 10;\n    }\n    return n % sum == 0;\n}",
            "created": "2025-03-09T09:06:14.290Z",
            "tags": [
                "harshad",
                "math",
                "csharp"
            ]
        },
        {
            "id": 70,
            "title": "harshad number",
            "description": "Checks if a given number or a list of numbers is a Harshad number (divisible by the sum of its digits).",
            "language": "kotlin",
            "code": "fun isHarshad(n: Int): Boolean {\n    val sum = n.toString().sumOf { it.digitToInt() }\n    return n % sum == 0\n}",
            "created": "2025-03-09T09:06:14.291Z",
            "tags": [
                "harshad",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 71,
            "title": "harshad number",
            "description": "Checks if a given number or a list of numbers is a Harshad number (divisible by the sum of its digits).",
            "language": "javascript",
            "code": "function isHarshad(n) {\n    let sum = 0, temp = n;\n    while (temp > 0) {\n        sum += temp % 10;\n        temp = Math.floor(temp / 10);\n    }\n    return n % sum === 0;\n}",
            "created": "2025-03-09T09:06:14.292Z",
            "tags": [
                "harshad",
                "math",
                "javascript"
            ]
        },
        {
            "id": 72,
            "title": "harshad number",
            "description": "Checks if a given number or a list of numbers is a Harshad number (divisible by the sum of its digits).",
            "language": "go",
            "code": "func isHarshad(n int) bool {\n    sum, temp := 0, n\n    for temp > 0 {\n        sum += temp % 10\n        temp /= 10\n    }\n    return n%sum == 0\n}",
            "created": "2025-03-09T09:06:14.292Z",
            "tags": [
                "harshad",
                "math",
                "go"
            ]
        }
    ], [
        {
            "id": 73,
            "title": "disarium",
            "description": "to check whether the given number is disarium or not.",
            "language": "python",
            "code": "from funcbox import is_disarium\n\nprint(is_disarium(..)) # single variable\nprint(is_disarium([....])) # multiple variable",
            "created": "2025-03-09T09:09:41.483Z",
            "tags": [
                "disarium",
                "math",
                "python"
            ]
        },
        {
            "id": 74,
            "title": "disarium",
            "description": "to check whether the given number is disarium or not.",
            "language": "java",
            "code": "public static boolean isDisarium(int num) {\n    int sum = 0, temp = num, length = String.valueOf(num).length();\n    while (temp > 0) {\n        sum += Math.pow(temp % 10, length--);\n        temp /= 10;\n    }\n    return sum == num;\n}",
            "created": "2025-03-09T09:09:41.486Z",
            "tags": [
                "disarium",
                "math",
                "java"
            ]
        },
        {
            "id": 75,
            "title": "disarium",
            "description": "to check whether the given number is disarium or not.",
            "language": "c",
            "code": "#include <stdio.h>\n#include <math.h>\n#include <stdbool.h>\n\nbool is_disarium(int num) {\n    int sum = 0, temp = num, length = 0, n = num;\n    while (n > 0) { length++; n /= 10; }\n    while (temp > 0) {\n        sum += pow(temp % 10, length--);\n        temp /= 10;\n    }\n    return sum == num;\n}",
            "created": "2025-03-09T09:09:41.489Z",
            "tags": [
                "disarium",
                "math",
                "c"
            ]
        },
        {
            "id": 76,
            "title": "disarium",
            "description": "to check whether the given number is disarium or not.",
            "language": "cpp",
            "code": "#include <iostream>\n#include <cmath>\n\nbool is_disarium(int num) {\n    int sum = 0, temp = num, length = std::to_string(num).length();\n    while (temp > 0) {\n        sum += pow(temp % 10, length--);\n        temp /= 10;\n    }\n    return sum == num;\n}",
            "created": "2025-03-09T09:09:41.491Z",
            "tags": [
                "disarium",
                "math",
                "cpp"
            ]
        },
        {
            "id": 77,
            "title": "disarium",
            "description": "to check whether the given number is disarium or not.",
            "language": "csharp",
            "code": "using System;\n\npublic class Program {\n    public static bool IsDisarium(int num) {\n        int sum = 0, temp = num, length = num.ToString().Length;\n        while (temp > 0) {\n            sum += (int)Math.Pow(temp % 10, length--);\n            temp /= 10;\n        }\n        return sum == num;\n    }\n}",
            "created": "2025-03-09T09:09:41.495Z",
            "tags": [
                "disarium",
                "math",
                "csharp"
            ]
        },
        {
            "id": 78,
            "title": "disarium",
            "description": "to check whether the given number is disarium or not.",
            "language": "kotlin",
            "code": "fun isDisarium(num: Int): Boolean {\n    var sum = 0\n    var temp = num\n    val length = num.toString().length\n    var position = length\n    while (temp > 0) {\n        sum += Math.pow((temp % 10).toDouble(), position--.toDouble()).toInt()\n        temp /= 10\n    }\n    return sum == num\n}",
            "created": "2025-03-09T09:09:41.507Z",
            "tags": [
                "disarium",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 79,
            "title": "disarium",
            "description": "to check whether the given number is disarium or not.",
            "language": "javascript",
            "code": "function isDisarium(num) {\n    let digits = num.toString().split(\"\").map(Number);\n    return digits.reduce((sum, digit, index) => sum + Math.pow(digit, index + 1), 0) === num;\n}",
            "created": "2025-03-09T09:09:41.509Z",
            "tags": [
                "disarium",
                "math",
                "javascript"
            ]
        },
        {
            "id": 80,
            "title": "disarium",
            "description": "to check whether the given number is disarium or not.",
            "language": "go",
            "code": "import \"math\"\n\nfunc IsDisarium(num int) bool {\n    temp, sum, length := num, 0, len(fmt.Sprintf(\"%d\", num))\n    for temp > 0 {\n        sum += int(math.Pow(float64(temp%10), float64(length)))\n        length--\n        temp /= 10\n    }\n    return sum == num\n}",
            "created": "2025-03-09T09:09:41.516Z",
            "tags": [
                "disarium",
                "math",
                "go"
            ]
        }
    ],
    [
        {
            "id": 81,
            "title": "average",
            "description": " Calculates the average of a list of numbers.",
            "language": "python",
            "code": "from funcbox import average\nprint(average(......)) #tuple",
            "created": "2025-03-09T09:16:35.945Z",
            "tags": [
                "avg",
                "math",
                "python"
            ]
        },
        {
            "id": 82,
            "title": "average",
            "description": " Calculates the average of a list of numbers.",
            "language": "java",
            "code": "public static double average(int[] numbers) {\n    int sum = 0;\n    for (int num : numbers) {\n        sum += num;\n    }\n    return (double) sum / numbers.length;\n}",
            "created": "2025-03-09T09:16:35.946Z",
            "tags": [
                "avg",
                "math",
                "java"
            ]
        },
        {
            "id": 83,
            "title": "average",
            "description": " Calculates the average of a list of numbers.",
            "language": "c",
            "code": "#include <stdio.h>\n\ndouble average(int numbers[], int size) {\n    int sum = 0;\n    for (int i = 0; i < size; i++) {\n        sum += numbers[i];\n    }\n    return (double) sum / size;\n}",
            "created": "2025-03-09T09:16:35.947Z",
            "tags": [
                "avg",
                "math",
                "c"
            ]
        },
        {
            "id": 84,
            "title": "average",
            "description": " Calculates the average of a list of numbers.",
            "language": "cpp",
            "code": "double average(int numbers[], int size) {\n    int sum = 0;\n    for (int i = 0; i < size; i++) {\n        sum += numbers[i];\n    }\n    return (double) sum / size;\n}",
            "created": "2025-03-09T09:16:35.948Z",
            "tags": [
                "avg",
                "math",
                "cpp"
            ]
        },
        {
            "id": 85,
            "title": "average",
            "description": " Calculates the average of a list of numbers.",
            "language": "csharp",
            "code": "static double Average(int[] numbers) {\n    int sum = 0;\n    foreach (int num in numbers) {\n        sum += num;\n    }\n    return (double) sum / numbers.Length;\n}",
            "created": "2025-03-09T09:16:35.948Z",
            "tags": [
                "avg",
                "math",
                "csharp"
            ]
        },
        {
            "id": 86,
            "title": "average",
            "description": " Calculates the average of a list of numbers.",
            "language": "kotlin",
            "code": "fun average(numbers: IntArray): Double {\n    return numbers.average()\n}",
            "created": "2025-03-09T09:16:35.949Z",
            "tags": [
                "avg",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 87,
            "title": "average",
            "description": " Calculates the average of a list of numbers.",
            "language": "javascript",
            "code": "function average(numbers) {\n    let sum = numbers.reduce((acc, num) => acc + num, 0);\n    return sum / numbers.length;\n}",
            "created": "2025-03-09T09:16:35.950Z",
            "tags": [
                "avg",
                "math",
                "javascript"
            ]
        },
        {
            "id": 88,
            "title": "average",
            "description": " Calculates the average of a list of numbers.",
            "language": "go",
            "code": "func average(numbers []int) float64 {\n    sum := 0\n    for _, num := range numbers {\n        sum += num\n    }\n    return float64(sum) / float64(len(numbers))\n}",
            "created": "2025-03-09T09:16:35.950Z",
            "tags": [
                "avg",
                "math",
                "go"
            ]
        }
    ],
    [
        {
            "id": 89,
            "title": "percentage",
            "description": "Calculates the percentage of a part in relation to a whole.",
            "language": "python",
            "code": "from funcbox import percentage\n\nprint(percentage(.., ...))",
            "created": "2025-03-09T09:18:24.878Z",
            "tags": [
                "percent",
                "percentage",
                "math",
                "python"
            ]
        },
        {
            "id": 90,
            "title": "percentage",
            "description": "Calculates the percentage of a part in relation to a whole.",
            "language": "java",
            "code": "public static double percentage(double part, double whole) {\n    return (whole != 0) ? (part / whole) * 100 : 0;\n}",
            "created": "2025-03-09T09:18:24.881Z",
            "tags": [
                "percent",
                "percentage",
                "math",
                "java"
            ]
        },
        {
            "id": 91,
            "title": "percentage",
            "description": "Calculates the percentage of a part in relation to a whole.",
            "language": "c",
            "code": "#include <stdio.h>\n\ndouble percentage(double part, double whole) {\n    return (whole != 0) ? (part / whole) * 100 : 0;\n}",
            "created": "2025-03-09T09:18:24.884Z",
            "tags": [
                "percent",
                "percentage",
                "math",
                "c"
            ]
        },
        {
            "id": 92,
            "title": "percentage",
            "description": "Calculates the percentage of a part in relation to a whole.",
            "language": "cpp",
            "code": "#include <iostream>\n\ndouble percentage(double part, double whole) {\n    return (whole != 0) ? (part / whole) * 100 : 0;\n}",
            "created": "2025-03-09T09:18:24.886Z",
            "tags": [
                "percent",
                "percentage",
                "math",
                "cpp"
            ]
        },
        {
            "id": 93,
            "title": "percentage",
            "description": "Calculates the percentage of a part in relation to a whole.",
            "language": "csharp",
            "code": "public static double Percentage(double part, double whole) {\n    return (whole != 0) ? (part / whole) * 100 : 0;\n}",
            "created": "2025-03-09T09:18:24.890Z",
            "tags": [
                "percent",
                "percentage",
                "math",
                "csharp"
            ]
        },
        {
            "id": 94,
            "title": "percentage",
            "description": "Calculates the percentage of a part in relation to a whole.",
            "language": "kotlin",
            "code": "fun percentage(part: Double, whole: Double): Double {\n    return if (whole != 0.0) (part / whole) * 100 else 0.0\n}",
            "created": "2025-03-09T09:18:24.903Z",
            "tags": [
                "percent",
                "percentage",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 95,
            "title": "percentage",
            "description": "Calculates the percentage of a part in relation to a whole.",
            "language": "javascript",
            "code": "function percentage(part, whole) {\n    return whole !== 0 ? (part / whole) * 100 : 0;\n}",
            "created": "2025-03-09T09:18:24.906Z",
            "tags": [
                "percent",
                "percentage",
                "math",
                "javascript"
            ]
        },
        {
            "id": 96,
            "title": "percentage",
            "description": "Calculates the percentage of a part in relation to a whole.",
            "language": "go",
            "code": "func Percentage(part, whole float64) float64 {\n    if whole != 0 {\n        return (part / whole) * 100\n    }\n    return 0\n}",
            "created": "2025-03-09T09:18:24.909Z",
            "tags": [
                "percent",
                "percentage",
                "math",
                "go"
            ]
        }
    ], [
        {
            "id": 97,
            "title": "percentile",
            "description": "Calculates the nth percentile of a list of numbers.",
            "language": "python",
            "code": "from funcbox import percentile\nprint(percentile([.....], ..)) #list, float",
            "created": "2025-03-09T09:37:53.276Z",
            "tags": [
                "percentile",
                "math",
                "python"
            ]
        },
        {
            "id": 98,
            "title": "percentile",
            "description": "Calculates the nth percentile of a list of numbers.",
            "language": "java",
            "code": "import java.util.Arrays;\n\npublic static double percentile(double[] data, double p) {\n    Arrays.sort(data);\n    int index = (int) Math.ceil(p / 100.0 * data.length) - 1;\n    return data[Math.max(0, Math.min(index, data.length - 1))];\n}",
            "created": "2025-03-09T09:37:53.277Z",
            "tags": [
                "percentile",
                "math",
                "java"
            ]
        },
        {
            "id": 99,
            "title": "percentile",
            "description": "Calculates the nth percentile of a list of numbers.",
            "language": "c",
            "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint compare(const void *a, const void *b) {\n    return (*(double*)a - *(double*)b);\n}\n\ndouble percentile(double data[], int size, double p) {\n    qsort(data, size, sizeof(double), compare);\n    int index = (int)(p / 100.0 * size);\n    return data[index];\n}",
            "created": "2025-03-09T09:37:53.278Z",
            "tags": [
                "percentile",
                "math",
                "c"
            ]
        },
        {
            "id": 100,
            "title": "percentile",
            "description": "Calculates the nth percentile of a list of numbers.",
            "language": "cpp",
            "code": "#include <vector>\n#include <algorithm>\n\ndouble percentile(std::vector<double>& data, double p) {\n    std::sort(data.begin(), data.end());\n    int index = (int) std::ceil(p / 100.0 * data.size()) - 1;\n    return data[std::max(0, std::min(index, (int)data.size() - 1))];\n}",
            "created": "2025-03-09T09:37:53.279Z",
            "tags": [
                "percentile",
                "math",
                "cpp"
            ]
        },
        {
            "id": 101,
            "title": "percentile",
            "description": "Calculates the nth percentile of a list of numbers.",
            "language": "csharp",
            "code": "using System;\nusing System.Linq;\n\nstatic double Percentile(double[] data, double p) {\n    Array.Sort(data);\n    int index = (int)Math.Ceiling(p / 100.0 * data.Length) - 1;\n    return data[Math.Max(0, Math.Min(index, data.Length - 1))];\n}",
            "created": "2025-03-09T09:37:53.280Z",
            "tags": [
                "percentile",
                "math",
                "csharp"
            ]
        },
        {
            "id": 102,
            "title": "percentile",
            "description": "Calculates the nth percentile of a list of numbers.",
            "language": "kotlin",
            "code": "fun percentile(data: List<Double>, p: Double): Double {\n    val sortedData = data.sorted()\n    val index = (p / 100.0 * sortedData.size).toInt()\n    return sortedData.getOrElse(index) { sortedData.last() }\n}",
            "created": "2025-03-09T09:37:53.281Z",
            "tags": [
                "percentile",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 103,
            "title": "percentile",
            "description": "Calculates the nth percentile of a list of numbers.",
            "language": "javascript",
            "code": "function percentile(data, p) {\n    data.sort((a, b) => a - b);\n    let index = Math.ceil((p / 100) * data.length) - 1;\n    return data[Math.max(0, Math.min(index, data.length - 1))];\n}",
            "created": "2025-03-09T09:37:53.281Z",
            "tags": [
                "percentile",
                "math",
                "javascript"
            ]
        },
        {
            "id": 104,
            "title": "percentile",
            "description": "Calculates the nth percentile of a list of numbers.",
            "language": "go",
            "code": "import (\n    \"math\"\n    \"sort\"\n)\n\nfunc percentile(data []float64, p float64) float64 {\n    sort.Float64s(data)\n    index := int(math.Ceil((p / 100.0) * float64(len(data)))) - 1\n    if index < 0 {\n        return data[0]\n    } else if index >= len(data) {\n        return data[len(data)-1]\n    }\n    return data[index]\n}",
            "created": "2025-03-09T09:37:53.282Z",
            "tags": [
                "percentile",
                "math",
                "go"
            ]
        }
    ], [
        {
            "id": 105,
            "title": "gcd",
            "description": "Calculates the greatest common divisor of two numbers.",
            "language": "python",
            "code": "from funcbox import gcd\n\nprint(gcd(..,..))",
            "created": "2025-03-09T09:27:55.743Z",
            "tags": [
                "gcd",
                "math",
                "python"
            ]
        },
        {
            "id": 106,
            "title": "gcd",
            "description": "Calculates the greatest common divisor of two numbers.",
            "language": "java",
            "code": "public static int gcd(int a, int b) {\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return Math.abs(a);\n}",
            "created": "2025-03-09T09:27:55.744Z",
            "tags": [
                "gcd",
                "math",
                "java"
            ]
        },
        {
            "id": 107,
            "title": "gcd",
            "description": "Calculates the greatest common divisor of two numbers.",
            "language": "c",
            "code": "#include <stdio.h>\n\nint gcd(int a, int b) {\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return (a > 0) ? a : -a;\n}",
            "created": "2025-03-09T09:27:55.746Z",
            "tags": [
                "gcd",
                "math",
                "c"
            ]
        },
        {
            "id": 108,
            "title": "gcd",
            "description": "Calculates the greatest common divisor of two numbers.",
            "language": "cpp",
            "code": "#include <iostream>\n\nint gcd(int a, int b) {\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return abs(a);\n}",
            "created": "2025-03-09T09:27:55.748Z",
            "tags": [
                "gcd",
                "math",
                "cpp"
            ]
        },
        {
            "id": 109,
            "title": "gcd",
            "description": "Calculates the greatest common divisor of two numbers.",
            "language": "csharp",
            "code": "public static int GCD(int a, int b) {\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return Math.Abs(a);\n}",
            "created": "2025-03-09T09:27:55.750Z",
            "tags": [
                "gcd",
                "math",
                "csharp"
            ]
        },
        {
            "id": 110,
            "title": "gcd",
            "description": "Calculates the greatest common divisor of two numbers.",
            "language": "kotlin",
            "code": "fun gcd(a: Int, b: Int): Int {\n    var x = a\n    var y = b\n    while (y != 0) {\n        val temp = y\n        y = x % y\n        x = temp\n    }\n    return kotlin.math.abs(x)\n}",
            "created": "2025-03-09T09:27:55.759Z",
            "tags": [
                "gcd",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 111,
            "title": "gcd",
            "description": "Calculates the greatest common divisor of two numbers.",
            "language": "javascript",
            "code": "function gcd(a, b) {\n    while (b !== 0) {\n        [a, b] = [b, a % b];\n    }\n    return Math.abs(a);\n}",
            "created": "2025-03-09T09:27:55.761Z",
            "tags": [
                "gcd",
                "math",
                "javascript"
            ]
        },
        {
            "id": 112,
            "title": "gcd",
            "description": "Calculates the greatest common divisor of two numbers.",
            "language": "go",
            "code": "func GCD(a, b int) int {\n    for b != 0 {\n        a, b = b, a%b\n    }\n    if a < 0 {\n        return -a\n    }\n    return a\n}",
            "created": "2025-03-09T09:27:55.764Z",
            "tags": [
                "gcd",
                "math",
                "go"
            ]
        }
    ],
    [
        {
            "id": 113,
            "title": "lcm ",
            "description": "Calculates the least common multiple of two numbers",
            "language": "python",
            "code": "from funcbox import lcm\nprint(lcm(..... , .....)) #two values",
            "created": "2025-03-09T09:49:46.050Z",
            "tags": [
                "lcm",
                "math",
                "python"
            ]
        },
        {
            "id": 114,
            "title": "lcm ",
            "description": "Calculates the least common multiple of two numbers",
            "language": "java",
            "code": "public static int lcm(int a, int b) {\n    return Math.abs(a * b) / gcd(a, b);\n}",
            "created": "2025-03-09T09:49:46.052Z",
            "tags": [
                "lcm",
                "math",
                "java"
            ]
        },
        {
            "id": 115,
            "title": "lcm ",
            "description": "Calculates the least common multiple of two numbers",
            "language": "c",
            "code": "int lcm(int a, int b) {\n    return (a * b) / gcd(a, b);\n}",
            "created": "2025-03-09T09:49:46.052Z",
            "tags": [
                "lcm",
                "math",
                "c"
            ]
        },
        {
            "id": 116,
            "title": "lcm ",
            "description": "Calculates the least common multiple of two numbers",
            "language": "cpp",
            "code": "int lcm(int a, int b) {\n    return (a * b) / gcd(a, b);\n}",
            "created": "2025-03-09T09:49:46.052Z",
            "tags": [
                "lcm",
                "math",
                "cpp"
            ]
        },
        {
            "id": 117,
            "title": "lcm ",
            "description": "Calculates the least common multiple of two numbers",
            "language": "csharp",
            "code": "static int LCM(int a, int b) {\n    return Math.Abs(a * b) / GCD(a, b);\n}",
            "created": "2025-03-09T09:49:46.052Z",
            "tags": [
                "lcm",
                "math",
                "csharp"
            ]
        },
        {
            "id": 118,
            "title": "lcm ",
            "description": "Calculates the least common multiple of two numbers",
            "language": "kotlin",
            "code": "fun lcm(a: Int, b: Int): Int {\n    return (a * b) / gcd(a, b)\n}",
            "created": "2025-03-09T09:49:46.053Z",
            "tags": [
                "lcm",
                "math",
                "kotlin"
            ]
        },
        {
            "id": 119,
            "title": "lcm ",
            "description": "Calculates the least common multiple of two numbers",
            "language": "javascript",
            "code": "function lcm(a, b) {\n    return Math.abs(a * b) / gcd(a, b);\n}",
            "created": "2025-03-09T09:49:46.053Z",
            "tags": [
                "lcm",
                "math",
                "javascript"
            ]
        },
        {
            "id": 120,
            "title": "lcm ",
            "description": "Calculates the least common multiple of two numbers",
            "language": "go",
            "code": "func lcm(a, b int) int {\n    return (a * b) / gcd(a, b)\n}",
            "created": "2025-03-09T09:49:46.053Z",
            "tags": [
                "lcm",
                "math",
                "go"
            ]
        }
    ], [
        {
            "id": 121,
            "title": "Camel to Snake",
            "description": "Converts a string from camel case to snake case.",
            "language": "python",
            "code": "from funcbox import camel_to_snake\n\nprint(camel_to_snake(...))",
            "created": "2025-03-09T09:48:02.808Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "python"
            ]
        },
        {
            "id": 122,
            "title": "Camel to Snake",
            "description": "Converts a string from camel case to snake case.",
            "language": "java",
            "code": "public static String camelToSnake(String name) {\n    return name.replaceAll(\"(?<!^)([A-Z])\", \"_$1\").toLowerCase();\n}",
            "created": "2025-03-09T09:48:02.810Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "java"
            ]
        },
        {
            "id": 123,
            "title": "Camel to Snake",
            "description": "Converts a string from camel case to snake case.",
            "language": "c",
            "code": "#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\nvoid camel_to_snake(const char *camel, char *snake) {\n    int j = 0;\n    for (int i = 0; camel[i] != '\\0'; i++) {\n        if (isupper(camel[i]) && i != 0) {\n            snake[j++] = '_';\n        }\n        snake[j++] = tolower(camel[i]);\n    }\n    snake[j] = '\\0';\n}",
            "created": "2025-03-09T09:48:02.812Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "c"
            ]
        },
        {
            "id": 124,
            "title": "Camel to Snake",
            "description": "Converts a string from camel case to snake case.",
            "language": "cpp",
            "code": "#include <iostream>\n#include <cctype>\n\nstd::string camel_to_snake(const std::string &camel) {\n    std::string snake;\n    for (char ch : camel) {\n        if (isupper(ch) && !snake.empty()) {\n            snake += '_';\n        }\n        snake += tolower(ch);\n    }\n    return snake;\n}",
            "created": "2025-03-09T09:48:02.814Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "cpp"
            ]
        },
        {
            "id": 125,
            "title": "Camel to Snake",
            "description": "Converts a string from camel case to snake case.",
            "language": "csharp",
            "code": "using System;\nusing System.Text.RegularExpressions;\n\npublic class Program {\n    public static string CamelToSnake(string name) {\n        return Regex.Replace(name, \"(?<!^)([A-Z])\", \"_$1\").ToLower();\n    }\n}",
            "created": "2025-03-09T09:48:02.816Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "csharp"
            ]
        },
        {
            "id": 126,
            "title": "Camel to Snake",
            "description": "Converts a string from camel case to snake case.",
            "language": "kotlin",
            "code": "fun camelToSnake(name: String): String {\n    return name.replace(Regex(\"(?<!^)([A-Z])\"), \"_$1\").lowercase()\n}",
            "created": "2025-03-09T09:48:02.826Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "kotlin"
            ]
        },
        {
            "id": 127,
            "title": "Camel to Snake",
            "description": "Converts a string from camel case to snake case.",
            "language": "javascript",
            "code": "function camelToSnake(name) {\n    return name.replace(/(?<!^)([A-Z])/g, \"_$1\").toLowerCase();\n}",
            "created": "2025-03-09T09:48:02.828Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "javascript"
            ]
        },
        {
            "id": 128,
            "title": "Camel to Snake",
            "description": "Converts a string from camel case to snake case.",
            "language": "go",
            "code": "import (\n    \"strings\"\n    \"unicode\"\n)\n\nfunc CamelToSnake(name string) string {\n    var result strings.Builder\n    for i, ch := range name {\n        if unicode.IsUpper(ch) && i != 0 {\n            result.WriteRune('_')\n        }\n        result.WriteRune(unicode.ToLower(ch))\n    }\n    return result.String()\n}",
            "created": "2025-03-09T09:48:02.831Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "go"
            ]
        }
    ],
    [
        {
            "id": 129,
            "title": "snake_to_camel",
            "description": "Converts a string from snake case to camel case.",
            "language": "python",
            "code": "from funcbox import snake_to_camel\nprint(snake_to_camel(\"......t\")) #string",
            "created": "2025-03-09T09:58:01.351Z",
            "tags": [
                "snake_case",
                "string",
                "python"
            ]
        },
        {
            "id": 130,
            "title": "snake_to_camel",
            "description": "Converts a string from snake case to camel case.",
            "language": "java",
            "code": "public static String toCamelCase(String snake) {\n    String[] parts = snake.split(\"_\");\n    StringBuilder camelCase = new StringBuilder(parts[0]);\n    for (int i = 1; i < parts.length; i++) {\n        camelCase.append(parts[i].substring(0, 1).toUpperCase()).append(parts[i].substring(1));\n    }\n    return camelCase.toString();\n}",
            "created": "2025-03-09T09:58:01.352Z",
            "tags": [
                "snake_case",
                "string",
                "java"
            ]
        },
        {
            "id": 131,
            "title": "snake_to_camel",
            "description": "Converts a string from snake case to camel case.",
            "language": "c",
            "code": "#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\nvoid toCamelCase(char *snake, char *camel) {\n    int i = 0, j = 0;\n    while (snake[i]) {\n        if (snake[i] == '_') {\n            i++;\n            camel[j++] = toupper(snake[i]);\n        } else {\n            camel[j++] = snake[i];\n        }\n        i++;\n    }\n    camel[j] = '\\0';\n}",
            "created": "2025-03-09T09:58:01.353Z",
            "tags": [
                "snake_case",
                "string",
                "c"
            ]
        },
        {
            "id": 132,
            "title": "snake_to_camel",
            "description": "Converts a string from snake case to camel case.",
            "language": "cpp",
            "code": "#include <iostream>\n#include <sstream>\n\nstd::string toCamelCase(const std::string &snake) {\n    std::stringstream ss(snake);\n    std::string word, camelCase;\n    bool firstWord = true;\n    while (getline(ss, word, '_')) {\n        if (firstWord) {\n            camelCase += word;\n            firstWord = false;\n        } else {\n            word[0] = toupper(word[0]);\n            camelCase += word;\n        }\n    }\n    return camelCase;\n}",
            "created": "2025-03-09T09:58:01.353Z",
            "tags": [
                "snake_case",
                "string",
                "cpp"
            ]
        },
        {
            "id": 133,
            "title": "snake_to_camel",
            "description": "Converts a string from snake case to camel case.",
            "language": "csharp",
            "code": "using System;\nusing System.Linq;\n\nstatic string ToCamelCase(string snake) {\n    return string.Concat(snake.Split('_').Select((word, index) =>\n        index == 0 ? word : char.ToUpper(word[0]) + word.Substring(1)));\n}",
            "created": "2025-03-09T09:58:01.354Z",
            "tags": [
                "snake_case",
                "string",
                "csharp"
            ]
        },
        {
            "id": 134,
            "title": "snake_to_camel",
            "description": "Converts a string from snake case to camel case.",
            "language": "kotlin",
            "code": "fun toCamelCase(snake: String): String {\n    return snake.split(\"_\").mapIndexed { index, word ->\n        if (index == 0) word else word.replaceFirstChar { it.uppercase() }\n    }.joinToString(\"\")\n}",
            "created": "2025-03-09T09:58:01.354Z",
            "tags": [
                "snake_case",
                "string",
                "kotlin"
            ]
        },
        {
            "id": 135,
            "title": "snake_to_camel",
            "description": "Converts a string from snake case to camel case.",
            "language": "javascript",
            "code": "function toCamelCase(snake) {\n    return snake.split(\"_\").map((word, index) =>\n        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)\n    ).join(\"\");\n}",
            "created": "2025-03-09T09:58:01.356Z",
            "tags": [
                "snake_case",
                "string",
                "javascript"
            ]
        },
        {
            "id": 136,
            "title": "snake_to_camel",
            "description": "Converts a string from snake case to camel case.",
            "language": "go",
            "code": "import (\n    \"strings\"\n)\n\nfunc toCamelCase(snake string) string {\n    parts := strings.Split(snake, \"_\")\n    for i := 1; i < len(parts); i++ {\n        parts[i] = strings.Title(parts[i])\n    }\n    return strings.Join(parts, \"\")\n}",
            "created": "2025-03-09T09:58:01.356Z",
            "tags": [
                "snake_case",
                "string",
                "go"
            ]
        }
    ], [
        {
            "id": 137,
            "title": "Slugify",
            "description": "Converts a string into a URL-friendly slug by removing non-alphanumeric characters, stripping whitespace, and replacing spaces with hyphens.",
            "language": "python",
            "code": "from funcbox import slugify\n\nprint(slugify(\"...\"))",
            "created": "2025-03-09T09:57:29.102Z",
            "tags": [
                "slugify",
                "string",
                "python"
            ]
        },
        {
            "id": 138,
            "title": "Slugify",
            "description": "Converts a string into a URL-friendly slug by removing non-alphanumeric characters, stripping whitespace, and replacing spaces with hyphens.",
            "language": "java",
            "code": "import java.text.Normalizer;\n\npublic static String slugify(String text) {\n    text = text.replaceAll(\"[^a-zA-Z0-9\\\\s-]\", \"\");\n    text = text.trim().toLowerCase();\n    return text.replaceAll(\"\\\\s+\", \"-\");\n}",
            "created": "2025-03-09T09:57:29.105Z",
            "tags": [
                "slugify",
                "string",
                "java"
            ]
        },
        {
            "id": 139,
            "title": "Slugify",
            "description": "Converts a string into a URL-friendly slug by removing non-alphanumeric characters, stripping whitespace, and replacing spaces with hyphens.",
            "language": "c",
            "code": "#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\nvoid slugify(const char *text, char *slug) {\n    int j = 0;\n    for (int i = 0; text[i] != '\\0'; i++) {\n        if (isalnum(text[i])) {\n            slug[j++] = tolower(text[i]);\n        } else if (isspace(text[i]) && (j > 0 && slug[j-1] != '-')) {\n            slug[j++] = '-';\n        }\n    }\n    slug[j] = '\\0';\n}",
            "created": "2025-03-09T09:57:29.107Z",
            "tags": [
                "slugify",
                "string",
                "c"
            ]
        },
        {
            "id": 140,
            "title": "Slugify",
            "description": "Converts a string into a URL-friendly slug by removing non-alphanumeric characters, stripping whitespace, and replacing spaces with hyphens.",
            "language": "cpp",
            "code": "#include <iostream>\n#include <cctype>\n\nstd::string slugify(const std::string &text) {\n    std::string slug;\n    for (char ch : text) {\n        if (isalnum(ch)) {\n            slug += tolower(ch);\n        } else if (isspace(ch) && !slug.empty() && slug.back() != '-') {\n            slug += '-';\n        }\n    }\n    return slug;\n}",
            "created": "2025-03-09T09:57:29.110Z",
            "tags": [
                "slugify",
                "string",
                "cpp"
            ]
        },
        {
            "id": 141,
            "title": "Slugify",
            "description": "Converts a string into a URL-friendly slug by removing non-alphanumeric characters, stripping whitespace, and replacing spaces with hyphens.",
            "language": "csharp",
            "code": "using System;\nusing System.Text.RegularExpressions;\n\npublic class Program {\n    public static string Slugify(string text) {\n        text = Regex.Replace(text, \"[^a-zA-Z0-9\\\\s-]\", \"\"); // Remove non-alphanumeric characters\n        text = text.Trim().ToLower(); // Convert to lowercase and trim\n        return Regex.Replace(text, \"\\\\s+\", \"-\"); // Replace spaces with hyphens\n    }\n}",
            "created": "2025-03-09T09:57:29.113Z",
            "tags": [
                "slugify",
                "string",
                "csharp"
            ]
        },
        {
            "id": 142,
            "title": "Slugify",
            "description": "Converts a string into a URL-friendly slug by removing non-alphanumeric characters, stripping whitespace, and replacing spaces with hyphens.",
            "language": "kotlin",
            "code": "fun slugify(text: String): String {\n    return text.replace(Regex(\"[^a-zA-Z0-9\\\\s-]\"), \"\")\n               .trim()\n               .lowercase()\n               .replace(Regex(\"\\\\s+\"), \"-\")\n}",
            "created": "2025-03-09T09:57:29.126Z",
            "tags": [
                "slugify",
                "string",
                "kotlin"
            ]
        },
        {
            "id": 143,
            "title": "Slugify",
            "description": "Converts a string into a URL-friendly slug by removing non-alphanumeric characters, stripping whitespace, and replacing spaces with hyphens.",
            "language": "javascript",
            "code": "function slugify(text) {\n    return text.replace(/[^a-zA-Z0-9\\s-]/g, '') // Remove non-alphanumeric characters\n               .trim()\n               .toLowerCase()\n               .replace(/\\s+/g, '-'); // Replace spaces with hyphens\n}",
            "created": "2025-03-09T09:57:29.130Z",
            "tags": [
                "slugify",
                "string",
                "javascript"
            ]
        },
        {
            "id": 144,
            "title": "Slugify",
            "description": "Converts a string into a URL-friendly slug by removing non-alphanumeric characters, stripping whitespace, and replacing spaces with hyphens.",
            "language": "go",
            "code": "import (\n    \"regexp\"\n    \"strings\"\n    \"unicode\"\n)\n\nfunc Slugify(text string) string {\n    re := regexp.MustCompile(`[^a-zA-Z0-9\\s-]`)\n    text = re.ReplaceAllString(text, \"\") // Remove non-alphanumeric characters\n    text = strings.TrimSpace(strings.ToLower(text)) // Convert to lowercase and trim spaces\n    return strings.ReplaceAll(text, \" \", \"-\") // Replace spaces with hyphens\n}",
            "created": "2025-03-09T09:57:29.138Z",
            "tags": [
                "slugify",
                "string",
                "go"
            ]
        }
    ], [
        {
            "id": 145,
            "title": "Count Words",
            "description": "Counts the number of words in a given text.",
            "language": "python",
            "code": "from funcbox import count_words\n\nprint(count_words(\"....\"))",
            "created": "2025-03-09T10:09:42.551Z",
            "tags": [
                "count words",
                "string",
                "python"
            ]
        },
        {
            "id": 146,
            "title": "Count Words",
            "description": "Counts the number of words in a given text.",
            "language": "java",
            "code": "public static int countWords(String text) {\n    return text.trim().isEmpty() ? 0 : text.trim().split(\"\\\\s+\").length;\n}",
            "created": "2025-03-09T10:09:42.552Z",
            "tags": [
                "count words",
                "string",
                "java"
            ]
        },
        {
            "id": 147,
            "title": "Count Words",
            "description": "Counts the number of words in a given text.",
            "language": "c",
            "code": "#include <stdio.h>\n#include <ctype.h>\n\nint count_words(const char *text) {\n    int count = 0, in_word = 0;\n    while (*text) {\n        if (isspace(*text)) {\n            in_word = 0;\n        } else if (!in_word) {\n            in_word = 1;\n            count++;\n        }\n        text++;\n    }\n    return count;\n}",
            "created": "2025-03-09T10:09:42.554Z",
            "tags": [
                "count words",
                "string",
                "c"
            ]
        },
        {
            "id": 148,
            "title": "Count Words",
            "description": "Counts the number of words in a given text.",
            "language": "cpp",
            "code": "#include <iostream>\n#include <sstream>\n\nint count_words(const std::string &text) {\n    std::istringstream stream(text);\n    std::string word;\n    int count = 0;\n    while (stream >> word) {\n        count++;\n    }\n    return count;\n}",
            "created": "2025-03-09T10:09:42.555Z",
            "tags": [
                "count words",
                "string",
                "cpp"
            ]
        },
        {
            "id": 149,
            "title": "Count Words",
            "description": "Counts the number of words in a given text.",
            "language": "csharp",
            "code": "using System;\nusing System.Text.RegularExpressions;\n\npublic class Program {\n    public static int CountWords(string text) {\n        return string.IsNullOrWhiteSpace(text) ? 0 : Regex.Split(text.Trim(), @\"\\s+\").Length;\n    }\n}",
            "created": "2025-03-09T10:09:42.557Z",
            "tags": [
                "count words",
                "string",
                "csharp"
            ]
        },
        {
            "id": 150,
            "title": "Count Words",
            "description": "Counts the number of words in a given text.",
            "language": "kotlin",
            "code": "fun countWords(text: String): Int {\n    return text.trim().split(\"\\\\s+\".toRegex()).filter { it.isNotEmpty() }.size\n}",
            "created": "2025-03-09T10:09:42.565Z",
            "tags": [
                "count words",
                "string",
                "kotlin"
            ]
        },
        {
            "id": 151,
            "title": "Count Words",
            "description": "Counts the number of words in a given text.",
            "language": "javascript",
            "code": "function countWords(text) {\n    return text.trim() ? text.trim().split(/\\s+/).length : 0;\n}",
            "created": "2025-03-09T10:09:42.567Z",
            "tags": [
                "count words",
                "string",
                "javascript"
            ]
        },
        {
            "id": 152,
            "title": "Count Words",
            "description": "Counts the number of words in a given text.",
            "language": "go",
            "code": "import (\n    \"strings\"\n)\n\nfunc CountWords(text string) int {\n    words := strings.Fields(text)\n    return len(words)\n}",
            "created": "2025-03-09T10:09:42.571Z",
            "tags": [
                "count words",
                "string",
                "go"
            ]
        }
    ],
    [
        {
            "id": 153,
            "title": "Word Occurrence Counter",
            "description": "Counts the occurrences of each word in a text and returns a dictionary.",
            "language": "python",
            "code": "from funcbox import get_word_count\n\nprint(get_word_count(\"...\"))",
            "created": "2025-03-09T10:12:57.744Z",
            "tags": [
                "word occurrence counter",
                "string",
                "python"
            ]
        },
        {
            "id": 154,
            "title": "Word Occurrence Counter",
            "description": "Counts the occurrences of each word in a text and returns a dictionary.",
            "language": "java",
            "code": "import java.util.HashMap;\nimport java.util.Map;\nimport java.util.regex.*;\n\npublic static Map<String, Integer> getWordCount(String text) {\n    Map<String, Integer> wordCount = new HashMap<>();\n    Matcher matcher = Pattern.compile(\"\\\\b\\\\w+\\\\b\").matcher(text.toLowerCase());\n\n    while (matcher.find()) {\n        String word = matcher.group();\n        wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);\n    }\n    return wordCount;\n}",
            "created": "2025-03-09T10:12:57.745Z",
            "tags": [
                "word occurrence counter",
                "string",
                "java"
            ]
        },
        {
            "id": 155,
            "title": "Word Occurrence Counter",
            "description": "Counts the occurrences of each word in a text and returns a dictionary.",
            "language": "c",
            "code": "#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\n#define MAX_WORDS 1000\n#define MAX_WORD_LEN 50\n\ntypedef struct {\n    char word[MAX_WORD_LEN];\n    int count;\n} WordEntry;\n\nvoid get_word_count(const char *text, WordEntry wordList[], int *wordCount) {\n    char word[MAX_WORD_LEN];\n    int i = 0, index = 0, found;\n    \n    while (*text) {\n        if (isalnum(*text)) {\n            word[i++] = tolower(*text);\n        } else if (i > 0) {\n            word[i] = '\\0';\n            found = 0;\n\n            for (int j = 0; j < *wordCount; j++) {\n                if (strcmp(wordList[j].word, word) == 0) {\n                    wordList[j].count++;\n                    found = 1;\n                    break;\n                }\n            }\n            if (!found && *wordCount < MAX_WORDS) {\n                strcpy(wordList[*wordCount].word, word);\n                wordList[*wordCount].count = 1;\n                (*wordCount)++;\n            }\n            i = 0;\n        }\n        text++;\n    }\n}",
            "created": "2025-03-09T10:12:57.747Z",
            "tags": [
                "word occurrence counter",
                "string",
                "c"
            ]
        },
        {
            "id": 156,
            "title": "Word Occurrence Counter",
            "description": "Counts the occurrences of each word in a text and returns a dictionary.",
            "language": "cpp",
            "code": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <cctype>\n\nstd::map<std::string, int> get_word_count(const std::string &text) {\n    std::map<std::string, int> word_count;\n    std::stringstream ss(text);\n    std::string word;\n    \n    while (ss >> word) {\n        std::string cleaned_word;\n        for (char ch : word) {\n            if (isalnum(ch)) cleaned_word += tolower(ch);\n        }\n        if (!cleaned_word.empty()) word_count[cleaned_word]++;\n    }\n    return word_count;\n}",
            "created": "2025-03-09T10:12:57.750Z",
            "tags": [
                "word occurrence counter",
                "string",
                "cpp"
            ]
        },
        {
            "id": 157,
            "title": "Word Occurrence Counter",
            "description": "Counts the occurrences of each word in a text and returns a dictionary.",
            "language": "csharp",
            "code": "using System;\nusing System.Collections.Generic;\nusing System.Text.RegularExpressions;\n\npublic class Program {\n    public static Dictionary<string, int> GetWordCount(string text) {\n        Dictionary<string, int> wordCount = new Dictionary<string, int>();\n        foreach (Match match in Regex.Matches(text.ToLower(), @\"\\b\\w+\\b\")) {\n            string word = match.Value;\n            wordCount[word] = wordCount.ContainsKey(word) ? wordCount[word] + 1 : 1;\n        }\n        return wordCount;\n    }\n}",
            "created": "2025-03-09T10:12:57.753Z",
            "tags": [
                "word occurrence counter",
                "string",
                "csharp"
            ]
        },
        {
            "id": 158,
            "title": "Word Occurrence Counter",
            "description": "Counts the occurrences of each word in a text and returns a dictionary.",
            "language": "kotlin",
            "code": "fun getWordCount(text: String): Map<String, Int> {\n    return text.lowercase()\n        .split(Regex(\"\\\\W+\"))\n        .filter { it.isNotEmpty() }\n        .groupingBy { it }\n        .eachCount()\n}",
            "created": "2025-03-09T10:12:57.761Z",
            "tags": [
                "word occurrence counter",
                "string",
                "kotlin"
            ]
        },
        {
            "id": 159,
            "title": "Word Occurrence Counter",
            "description": "Counts the occurrences of each word in a text and returns a dictionary.",
            "language": "javascript",
            "code": "function getWordCount(text) {\n    return text.toLowerCase()\n        .match(/\\b\\w+\\b/g)\n        ?.reduce((acc, word) => {\n            acc[word] = (acc[word] || 0) + 1;\n            return acc;\n        }, {}) || {};\n}",
            "created": "2025-03-09T10:12:57.763Z",
            "tags": [
                "word occurrence counter",
                "string",
                "javascript"
            ]
        },
        {
            "id": 160,
            "title": "Word Occurrence Counter",
            "description": "Counts the occurrences of each word in a text and returns a dictionary.",
            "language": "go",
            "code": "import (\n    \"regexp\"\n    \"strings\"\n)\n\nfunc GetWordCount(text string) map[string]int {\n    wordCount := make(map[string]int)\n    re := regexp.MustCompile(`\\b\\w+\\b`)\n    words := re.FindAllString(strings.ToLower(text), -1)\n\n    for _, word := range words {\n        wordCount[word]++\n    }\n    return wordCount\n}",
            "created": "2025-03-09T10:12:57.764Z",
            "tags": [
                "word occurrence counter",
                "string",
                "go"
            ]
        }
    ], [
        {
            "id": 161,
            "title": "Character Occurrence Counter",
            "description": "Counts the occurrences of each character in a text and returns a dictionary.",
            "language": "python",
            "code": "from funcbox import get_char_count\n\nprint(get_char_count(\"...\"))",
            "created": "2025-03-09T10:15:21.805Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "python"
            ]
        },
        {
            "id": 162,
            "title": "Character Occurrence Counter",
            "description": "Counts the occurrences of each character in a text and returns a dictionary.",
            "language": "java",
            "code": "import java.util.HashMap;\nimport java.util.Map;\n\npublic static Map<Character, Integer> getCharCount(String text) {\n    Map<Character, Integer> charCount = new HashMap<>();\n    for (char ch : text.toCharArray()) {\n        charCount.put(ch, charCount.getOrDefault(ch, 0) + 1);\n    }\n    return charCount;\n}",
            "created": "2025-03-09T10:15:21.807Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "java"
            ]
        },
        {
            "id": 163,
            "title": "Character Occurrence Counter",
            "description": "Counts the occurrences of each character in a text and returns a dictionary.",
            "language": "c",
            "code": "#include <stdio.h>\n#include <string.h>\n\nvoid get_char_count(const char *text, int charCount[256]) {\n    memset(charCount, 0, 256 * sizeof(int));\n    while (*text) {\n        charCount[(unsigned char)*text++]++;\n    }\n}",
            "created": "2025-03-09T10:15:21.809Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "c"
            ]
        },
        {
            "id": 164,
            "title": "Character Occurrence Counter",
            "description": "Counts the occurrences of each character in a text and returns a dictionary.",
            "language": "cpp",
            "code": "#include <iostream>\n#include <map>\n\nstd::map<char, int> get_char_count(const std::string &text) {\n    std::map<char, int> char_count;\n    for (char ch : text) {\n        char_count[ch]++;\n    }\n    return char_count;\n}",
            "created": "2025-03-09T10:15:21.811Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "cpp"
            ]
        },
        {
            "id": 165,
            "title": "Character Occurrence Counter",
            "description": "Counts the occurrences of each character in a text and returns a dictionary.",
            "language": "csharp",
            "code": "using System;\nusing System.Collections.Generic;\n\npublic class Program {\n    public static Dictionary<char, int> GetCharCount(string text) {\n        Dictionary<char, int> charCount = new Dictionary<char, int>();\n        foreach (char ch in text) {\n            charCount[ch] = charCount.ContainsKey(ch) ? charCount[ch] + 1 : 1;\n        }\n        return charCount;\n    }\n}",
            "created": "2025-03-09T10:15:21.814Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "csharp"
            ]
        },
        {
            "id": 166,
            "title": "Character Occurrence Counter",
            "description": "Counts the occurrences of each character in a text and returns a dictionary.",
            "language": "kotlin",
            "code": "fun getCharCount(text: String): Map<Char, Int> {\n    return text.groupingBy { it }.eachCount()\n}",
            "created": "2025-03-09T10:15:21.821Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "kotlin"
            ]
        },
        {
            "id": 167,
            "title": "Character Occurrence Counter",
            "description": "Counts the occurrences of each character in a text and returns a dictionary.",
            "language": "javascript",
            "code": "function getCharCount(text) {\n    return [...text].reduce((acc, char) => {\n        acc[char] = (acc[char] || 0) + 1;\n        return acc;\n    }, {});\n}",
            "created": "2025-03-09T10:15:21.822Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "javascript"
            ]
        },
        {
            "id": 168,
            "title": "Character Occurrence Counter",
            "description": "Counts the occurrences of each character in a text and returns a dictionary.",
            "language": "go",
            "code": "func GetCharCount(text string) map[rune]int {\n    charCount := make(map[rune]int)\n    for _, ch := range text {\n        charCount[ch]++\n    }\n    return charCount\n}",
            "created": "2025-03-09T10:15:21.824Z",
            "tags": [
                "algorithm",
                "function",
                "utility",
                "go"
            ]
        }
    ],[
        {
          "id": 169,
          "title": "age calculate",
          "description": "Calculates the age in years based on a birth date provided as a string.",
          "language": "python",
          "code": "from funcbox import calculate_age\nprint(calculate_age('.......'))  #date,month,year\nprint(calculate_age('..........', '%d/%m/%Y'))",
          "created": "2025-03-09T12:14:42.355Z",
          "tags": [
            "age",
            "math",
            "python"
          ]
        },
        {
          "id": 170,
          "title": "age calculate",
          "description": "Calculates the age in years based on a birth date provided as a string.",
          "language": "java",
          "code": "import java.time.LocalDate;\nimport java.time.Period;\n\npublic static int calculateAge(LocalDate birthDate) {\n    return Period.between(birthDate, LocalDate.now()).getYears();\n}",
          "created": "2025-03-09T12:14:42.357Z",
          "tags": [
            "age",
            "math",
            "java"
          ]
        },
        {
          "id": 171,
          "title": "age calculate",
          "description": "Calculates the age in years based on a birth date provided as a string.",
          "language": "c",
          "code": "#include <stdio.h>\n#include <time.h>\n\nint calculateAge(int birthYear, int birthMonth, int birthDay) {\n    time_t t = time(NULL);\n    struct tm now = *localtime(&t);\n    \n    int age = now.tm_year + 1900 - birthYear;\n    if (now.tm_mon + 1 < birthMonth || (now.tm_mon + 1 == birthMonth && now.tm_mday < birthDay)) {\n        age--;\n    }\n    return age;\n}",
          "created": "2025-03-09T12:14:42.360Z",
          "tags": [
            "age",
            "math",
            "c"
          ]
        },
        {
          "id": 172,
          "title": "age calculate",
          "description": "Calculates the age in years based on a birth date provided as a string.",
          "language": "cpp",
          "code": "#include <iostream>\n#include <ctime>\n\nint calculateAge(int birthYear, int birthMonth, int birthDay) {\n    time_t t = time(0);\n    tm *now = localtime(&t);\n    \n    int age = (now->tm_year + 1900) - birthYear;\n    if ((now->tm_mon + 1 < birthMonth) || (now->tm_mon + 1 == birthMonth && now->tm_mday < birthDay)) {\n        age--;\n    }\n    return age;\n}",
          "created": "2025-03-09T12:14:42.362Z",
          "tags": [
            "age",
            "math",
            "cpp"
          ]
        },
        {
          "id": 173,
          "title": "age calculate",
          "description": "Calculates the age in years based on a birth date provided as a string.",
          "language": "csharp",
          "code": "using System;\n\nstatic int CalculateAge(DateTime birthDate) {\n    DateTime today = DateTime.Today;\n    int age = today.Year - birthDate.Year;\n    if (birthDate > today.AddYears(-age)) age--;\n    return age;\n}",
          "created": "2025-03-09T12:14:42.365Z",
          "tags": [
            "age",
            "math",
            "csharp"
          ]
        },
        {
          "id": 174,
          "title": "age calculate",
          "description": "Calculates the age in years based on a birth date provided as a string.",
          "language": "kotlin",
          "code": "import java.time.LocalDate\nimport java.time.Period\n\nfun calculateAge(birthDate: LocalDate): Int {\n    return Period.between(birthDate, LocalDate.now()).years\n}",
          "created": "2025-03-09T12:14:42.366Z",
          "tags": [
            "age",
            "math",
            "kotlin"
          ]
        },
        {
          "id": 175,
          "title": "age calculate",
          "description": "Calculates the age in years based on a birth date provided as a string.",
          "language": "javascript",
          "code": "function calculateAge(birthDate) {\n    let today = new Date();\n    let birth = new Date(birthDate);\n    let age = today.getFullYear() - birth.getFullYear();\n    if (today.getMonth() < birth.getMonth() || \n       (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {\n        age--;\n    }\n    return age;\n}",
          "created": "2025-03-09T12:14:42.367Z",
          "tags": [
            "age",
            "math",
            "javascript"
          ]
        },
        {
          "id": 176,
          "title": "age calculate",
          "description": "Calculates the age in years based on a birth date provided as a string.",
          "language": "go",
          "code": "import (\n    \"time\"\n)\n\nfunc calculateAge(birthDate time.Time) int {\n    today := time.Now()\n    age := today.Year() - birthDate.Year()\n    if today.YearDay() < birthDate.YearDay() {\n        age--\n    }\n    return age\n}",
          "created": "2025-03-09T12:14:42.368Z",
          "tags": [
            "age",
            "math",
            "go"
          ]
        }
      ],
      [
        {
          "id": 177,
          "title": "mean value",
          "description": "Calculates the arithmetic mean (average) of a list of numbers.",
          "language": "python",
          "code": "from funcbox import mean_val\nprint(mean_val([........])) #list",
          "created": "2025-03-09T12:23:04.568Z",
          "tags": [
            "mean",
            "math",
            "python"
          ]
        },
        {
          "id": 178,
          "title": "mean value",
          "description": "Calculates the arithmetic mean (average) of a list of numbers.",
          "language": "java",
          "code": "public static double mean(int[] numbers) {\n    int sum = 0;\n    for (int num : numbers) {\n        sum += num;\n    }\n    return (double) sum / numbers.length;\n}",
          "created": "2025-03-09T12:23:04.570Z",
          "tags": [
            "mean",
            "math",
            "java"
          ]
        },
        {
          "id": 179,
          "title": "mean value",
          "description": "Calculates the arithmetic mean (average) of a list of numbers.",
          "language": "c",
          "code": "#include <stdio.h>\n\ndouble mean(int numbers[], int size) {\n    int sum = 0;\n    for (int i = 0; i < size; i++) {\n        sum += numbers[i];\n    }\n    return (double) sum / size;\n}",
          "created": "2025-03-09T12:23:04.571Z",
          "tags": [
            "mean",
            "math",
            "c"
          ]
        },
        {
          "id": 180,
          "title": "mean value",
          "description": "Calculates the arithmetic mean (average) of a list of numbers.",
          "language": "cpp",
          "code": "#include <vector>\n\ndouble mean(std::vector<int> numbers) {\n    int sum = 0;\n    for (int num : numbers) {\n        sum += num;\n    }\n    return (double) sum / numbers.size();\n}",
          "created": "2025-03-09T12:23:04.573Z",
          "tags": [
            "mean",
            "math",
            "cpp"
          ]
        },
        {
          "id": 181,
          "title": "mean value",
          "description": "Calculates the arithmetic mean (average) of a list of numbers.",
          "language": "csharp",
          "code": "using System;\nusing System.Linq;\n\nstatic double Mean(int[] numbers) {\n    return numbers.Average();\n}",
          "created": "2025-03-09T12:23:04.574Z",
          "tags": [
            "mean",
            "math",
            "csharp"
          ]
        },
        {
          "id": 182,
          "title": "mean value",
          "description": "Calculates the arithmetic mean (average) of a list of numbers.",
          "language": "kotlin",
          "code": "fun mean(numbers: List<Int>): Double {\n    return numbers.average()\n}",
          "created": "2025-03-09T12:23:04.576Z",
          "tags": [
            "mean",
            "math",
            "kotlin"
          ]
        },
        {
          "id": 183,
          "title": "mean value",
          "description": "Calculates the arithmetic mean (average) of a list of numbers.",
          "language": "javascript",
          "code": "function mean(numbers) {\n    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;\n}",
          "created": "2025-03-09T12:23:04.577Z",
          "tags": [
            "mean",
            "math",
            "javascript"
          ]
        },
        {
          "id": 184,
          "title": "mean value",
          "description": "Calculates the arithmetic mean (average) of a list of numbers.",
          "language": "go",
          "code": "func mean(numbers []int) float64 {\n    sum := 0\n    for _, num := range numbers {\n        sum += num\n    }\n    return float64(sum) / float64(len(numbers))\n}",
          "created": "2025-03-09T12:23:04.578Z",
          "tags": [
            "mean",
            "math",
            "go"
          ]
        }
      ]
];

// DOM Elements
const searchBox = document.getElementById('searchBox');
const languageFilters = document.getElementById('languageFilters');
const sortSelect = document.getElementById('sortSelect');
const snippetDisplay = document.getElementById('codeSnippetDisplay');
const totalSnippetsEl = document.getElementById('totalSnippets');
const filteredSnippetsEl = document.getElementById('filteredSnippets');
const languagesCountEl = document.getElementById('languagesCount');

// Initialize stats
function updateStats(filtered) {
    const flatSnippets = snippets.flat();
    totalSnippetsEl.textContent = flatSnippets.length;
    filteredSnippetsEl.textContent = filtered.length;

    // Count unique languages
    const uniqueLanguages = [...new Set(flatSnippets.map(s => s.language))];
    languagesCountEl.textContent = uniqueLanguages.length;
}

// Language filter click handling
languageFilters.addEventListener('click', (e) => {
    const target = e.target.closest('.lang-filter');
    if (target) {
        document.querySelectorAll('.lang-filter').forEach(filter => {
            filter.classList.remove('active');
        });
        target.classList.add('active');
        filterSnippets();
    }
});

// Sort change handling
sortSelect.addEventListener('change', filterSnippets);

// Search input handling
searchBox.addEventListener('input', filterSnippets);

// Filter and display snippets
function filterSnippets() {
    const searchText = searchBox.value.toLowerCase();
    const activeFilter = document.querySelector('.lang-filter.active');
    const selectedLanguage = activeFilter ? activeFilter.getAttribute('data-language') : 'all';
    const sortBy = sortSelect.value;

    // Flatten the snippets array
    const flatSnippets = snippets.flat();

    // Filter snippets
    let filtered = flatSnippets.filter(snippet => {
        const matchesLanguage = selectedLanguage === 'all' || snippet.language === selectedLanguage;
        const matchesSearch = searchText === '' ||
            snippet.code.toLowerCase().includes(searchText) ||
            snippet.title.toLowerCase().includes(searchText) ||
            snippet.description.toLowerCase().includes(searchText) ||
            (snippet.tags && snippet.tags.some(tag => tag.toLowerCase().includes(searchText)));

        return matchesLanguage && matchesSearch;
    });

    // Sort snippets
    switch (sortBy) {
        case 'newest':
            filtered.sort((a, b) => new Date(b.created) - new Date(a.created));
            break;
        case 'oldest':
            filtered.sort((a, b) => new Date(a.created) - new Date(b.created));
            break;
        case 'name':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }

    // Display snippets
    renderSnippets(filtered);

    // Update statistics
    updateStats(filtered);
}

// Render snippets to the display area
function renderSnippets(snippetsToRender) {
    snippetDisplay.innerHTML = '';

    if (snippetsToRender.length === 0) {
        snippetDisplay.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>No snippets found</h3>
            <p>Try adjusting your search or filter criteria</p>
        </div>`;
        return;
    }

    snippetsToRender.forEach(snippet => {
        const card = document.createElement('div');
        card.className = 'code-card';
        card.id = `snippet-${snippet.id}`;

        // Convert date string to Date object
        const dateFormatted = new Date(snippet.created).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        card.innerHTML = `
        <div class="code-header">
            <div class="language-badge ${snippet.language}">
                <i class="fab fa-${getLanguageIcon(snippet.language)}"></i>
                ${capitalizeFirstLetter(snippet.language)}
            </div>
            <h5>${snippet.title}</h5>
            <div class="code-actions">
                <button class="action-btn copy-btn" title="Copy to clipboard">
                    <i class="fas fa-copy"></i>
                </button>
                <button class="action-btn expand-btn" title="Expand view">
                    <i class="fas fa-expand-alt"></i>
                </button>
            </div>
        </div>
        <div class="code-content">
            <div class="copy-success">Copied!</div>
            <pre class="line-numbers"><code class="language-${snippet.language}">${escapeHtml(snippet.code)}</code></pre>
        </div>`;

        snippetDisplay.appendChild(card);
        setupCardEvents(card, snippet);
    });

    // Apply syntax highlighting
    Prism.highlightAll();
}

// Escape HTML for safe display
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Setup event listeners for card actions
function setupCardEvents(card, snippet) {
    const copyBtn = card.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(snippet.code).then(() => {
            const copySuccess = card.querySelector('.copy-success');
            copySuccess.classList.add('show-copy-success');
            setTimeout(() => {
                copySuccess.classList.remove('show-copy-success');
            }, 2000);
        });
    });

    const expandBtn = card.querySelector('.expand-btn');
    expandBtn.addEventListener('click', () => {
        createExpandedView(snippet);
    });
}

// Expand snippet view
function createExpandedView(snippet) {
    const expandedView = document.createElement('div');
    expandedView.className = 'expanded-view';

    expandedView.innerHTML = `
    <div class="expanded-header">
        <h2>${snippet.title}</h2>
        <p>${snippet.description}</p>
        <button class="close-expanded"><i class="fas fa-times"></i> Close</button>
    </div>
    <div class="expanded-content">
        <pre class="line-numbers"><code class="language-${snippet.language}">${escapeHtml(snippet.code)}</code></pre>
    </div>`;

    document.body.appendChild(expandedView);
    Prism.highlightAll();

    const closeBtn = expandedView.querySelector('.close-expanded');
    closeBtn.addEventListener('click', () => document.body.removeChild(expandedView));
}

// Get Font Awesome icon for each language
function getLanguageIcon(language) {
    const icons = { javascript: 'js', python: 'python', java: 'java', go: 'google' };
    return icons[language] || 'code';
}

// Capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize on page load
window.addEventListener('load', filterSnippets);
