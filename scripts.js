document.addEventListener('DOMContentLoaded', function() {
    // Load header content FIRST
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            // Set up mobile menu AFTER header is loaded
            setupMobileMenu();
            // Set up smooth scrolling AFTER header is loaded
            setupSmoothScrolling();
        });

    // Load footer content
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

    // Function to set up mobile menu
    function setupMobileMenu() {
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const navLinks = document.getElementById('nav-links');

        if (hamburgerMenu && navLinks) {
            hamburgerMenu.addEventListener('click', function(event) {
                navLinks.classList.toggle('show');
                this.classList.toggle('open');
                event.stopPropagation();
            });

            // Handle clicks on the links
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault(); // Prevent default action

                    // Close the mobile menu
                    navLinks.classList.remove('show');
                    hamburgerMenu.classList.remove('open');

                    // Get the target section and scroll to it
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Prevent clicks within navLinks from closing the menu immediately
            navLinks.addEventListener('click', function(event) {
                event.stopPropagation();
            });

            // Close the menu when clicking outside of it
            document.addEventListener('click', function(event) {
                if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                    navLinks.classList.remove('show');
                    hamburgerMenu.classList.remove('open');
                }
            });
        }
    }

    // Function to set up smooth scrolling for non-navigation links
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]:not(#nav-links a)').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // --- Artist Modal Functionality ---
    const artistModal = document.getElementById('artistModal');
    const closeButton = document.querySelector('.close-button');

    // Sample artist data (replace with your actual data)
    const artistData = {
        artist1: {
            name: "Artist 1",
            bio: "Bio text for Artist 1",
            facebook: "https://facebook.com/artist1",
            instagram: "https://instagram.com/artist1",
            spotify: "https://open.spotify.com/artist/artist1",
            website: "https://artist1.com"
        },
        artist2: {
            name: "Artist 2",
            bio: "Bio text for Artist 2",
            facebook: "https://facebook.com/artist2",
            instagram: "https://instagram.com/artist2",
            spotify: "https://open.spotify.com/artist/artist2",
            website: "https://artist2.com"
        },
        artist3: {
            name: "Artist 3",
            bio: "Bio text for Artist 3",
            facebook: "https://facebook.com/artist3",
            instagram: "https://instagram.com/artist3",
            spotify: "https://open.spotify.com/artist/artist3",
            website: "https://artist3.com"
        },
        artist4: {
            name: "Artist 4",
            bio: "Bio text for Artist 4",
            facebook: "https://facebook.com/artist4",
            instagram: "https://instagram.com/artist4",
            spotify: "https://open.spotify.com/artist/artist4",
            website: "https://artist4.com"
        }
    };

    // Function to open the modal
    window.openModal = function(element) {
        const artistId = element.getAttribute('data-artist-id');
        const artist = artistData[artistId];

        if (artist) {
            document.getElementById('modal-artist-name').textContent = artist.name;
            document.getElementById('modal-bio').textContent = artist.bio;
            document.getElementById('modal-image').src = element.querySelector('img').src;
            document.getElementById('facebook-link').href = artist.facebook;
            document.getElementById('instagram-link').href = artist.instagram;
            document.getElementById('spotify-link').href = artist.spotify;
            document.getElementById('website-link').href = artist.website;

            artistModal.style.display = 'block';
        }
    }

    // Close modal functionality
    if (closeButton && artistModal) {
        closeButton.onclick = function() {
            artistModal.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target == artistModal) {
                artistModal.style.display = 'none';
            }
        };
    }
});