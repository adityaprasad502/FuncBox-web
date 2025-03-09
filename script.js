
// Extended snippets data with more information
const snippets = [
    {
        id: 1,
        title: "even number",
        description: "check whether Checks if a given number or a list of numbers is even.there the string it is palindrome or not",
        language: "java",
        code: "public static boolean isEven(int number) {\n    return number % 2 == 0;\n}\n\n",
        created: new Date(2025, 2, 9),
        tags: ["even", "math"]
    }
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
    totalSnippetsEl.textContent = snippets.length;
    filteredSnippetsEl.textContent = filtered.length;

    // Count unique languages
    const uniqueLanguages = [...new Set(snippets.map(s => s.language))];
    languagesCountEl.textContent = uniqueLanguages.length;
}

// Language filter click handling
languageFilters.addEventListener('click', (e) => {
    const target = e.target.closest('.lang-filter');
    if (target) {
        // Remove active class from all filters
        document.querySelectorAll('.lang-filter').forEach(filter => {
            filter.classList.remove('active');
        });

        // Add active class to clicked filter
        target.classList.add('active');

        // Filter snippets
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

    // Filter snippets
    let filtered = snippets.filter(snippet => {
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
            filtered.sort((a, b) => b.created - a.created);
            break;
        case 'oldest':
            filtered.sort((a, b) => a.created - b.created);
            break;
        case 'name':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
        // For relevance, keep original order or implement custom relevance logic
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
        // Show empty state
        snippetDisplay.innerHTML = `
<div class="empty-state">
    <i class="fas fa-search"></i>
    <h3>No snippets found</h3>
    <p>Try adjusting your search or filter criteria</p>
</div>
`;
        return;
    }

    snippetsToRender.forEach(snippet => {
        // Create the card
        const card = document.createElement('div');
        card.className = 'code-card';
        card.id = `snippet-${snippet.id}`;

        // Get date formatted
        const dateFormatted = snippet.created.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        // Create card header
        const headerHtml = `
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
`;

        // Create card content
        const contentHtml = `
<div class="code-content">
<div class="copy-success">Copied!</div>
<pre class="line-numbers"><code class="language-${snippet.language}">${escapeHtml(snippet.code)}</code></pre>
</div>
`;

        // Assemble the card
        card.innerHTML = headerHtml + contentHtml;
        snippetDisplay.appendChild(card);

        // Setup event listeners for the card
        setupCardEvents(card, snippet);
    });

    // Apply syntax highlighting
    Prism.highlightAll();
}

// Helper function to escape HTML for safe display
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Setup event listeners for card actions
function setupCardEvents(card, snippet) {
    // Copy button
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

    // Expand button
    const expandBtn = card.querySelector('.expand-btn');
    expandBtn.addEventListener('click', () => {
        createExpandedView(snippet);
    });
}

// Create expanded view for a snippet
function createExpandedView(snippet) {
    // Create expanded view container
    const expandedView = document.createElement('div');
    expandedView.className = 'expanded-view';

    // Create expanded view content
    expandedView.innerHTML = `
<div class="expanded-header">
<div>
<h2>${snippet.title}</h2>
<p>${snippet.description}</p>
</div>
<button class="close-expanded">
<i class="fas fa-times"></i> Close
</button>
</div>
<div class="expanded-content">
<pre class="line-numbers"><code class="language-${snippet.language}">${escapeHtml(snippet.code)}</code></pre>
</div>
`;

    // Add to body
    document.body.appendChild(expandedView);

    // Apply syntax highlighting
    Prism.highlightAll();

    // Setup close button
    const closeBtn = expandedView.querySelector('.close-expanded');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(expandedView);
    });

    // Also close on Escape key
    document.addEventListener('keydown', function escapeListener(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(expandedView);
            document.removeEventListener('keydown', escapeListener);
        }
    });
}

// Helper to get the appropriate Font Awesome icon for each language
function getLanguageIcon(language) {
    const icons = {
        'javascript': 'js',
        'python': 'python',
        'java': 'java',
        'html': 'html5',
        'css': 'css3-alt',
        'php': 'php',
        'ruby': 'gem',
        'csharp': 'microsoft',
        'cpp': 'cuttlefish', // Not perfect but close
        'go': 'google'
    };

    return icons[language] || 'code';
}

// Helper to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize on page load
window.addEventListener('load', () => {
    filterSnippets();
});
