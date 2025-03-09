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
            <p class="snippet-date">Created: ${dateFormatted}</p>
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
