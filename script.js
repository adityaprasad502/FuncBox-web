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
