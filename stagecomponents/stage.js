document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', initializeAppStructure);
    routeChange();
});

function initializeAppStructure() {
    document.body.innerHTML = `
        <header id="app-header">Town Tripping</header>
        <main id="app-main"></main>
        <footer id="app-footer">Footer content</footer>
    `;
}