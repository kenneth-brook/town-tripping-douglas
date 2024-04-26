window.addEventListener('hashchange', routeChange);  // Existing event listener for hash changes

// Function that handles routing based on the current hash
function routeChange() {
    const hash = window.location.hash.replace('#', '') || 'home';  // Default to 'home' if hash is empty
    switch(hash) {
        case 'home':
            loadHomePage();
            break;
        case 'about':
            loadAboutPage();
            break;
        // Add other cases as necessary
        default:
            loadNotFoundPage();
            break;
    }
}

function loadHomePage() {
    const main = document.getElementById('app-main');
    if (main) {
        main.innerHTML = '<p>Welcome to our town. Here’s why you should visit...</p>';
    }
}

function loadAboutPage() {
    const main = document.getElementById('app-main');
    if (main) {
        main.innerHTML = '<p>Learn more about our town’s rich history...</p>';
    }
}

function loadNotFoundPage() {
    const main = document.getElementById('app-main');
    if (main) {
        main.innerHTML = '<p>Page not found. Return to <a href="#home">Home</a>.</p>';
    }
}