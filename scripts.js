document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const navMenuLinks = document.querySelectorAll('#nav-links a');
    const mainContent = document.getElementById('main-content');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        this.classList.toggle('open');
    });

    const pages = {
        // ... (rest of your pages content)
    };

    function loadPage(page) {
        mainContent.innerHTML = pages[page] || '<h2>404 - Seite nicht gefunden</h2>';
        window.scrollTo(0, 0);
    }

    navMenuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);

            // Schließen des mobilen Menüs nach dem Klick
            if (window.innerWidth < 768) {
                navLinks.classList.remove('show');
                hamburgerMenu.classList.remove('open');
            }
        });
    });

    // Remove this line:
    // loadPage('startseite');
});