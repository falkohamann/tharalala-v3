document.addEventListener('DOMContentLoaded', function() {
    // Load header content FIRST
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Set up mobile menu AFTER header is loaded
            setupMobileMenu();
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
            hamburgerMenu.addEventListener('click', function() {
                navLinks.classList.toggle('show');
                this.classList.toggle('open');
            });
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if it's open
            const hamburgerMenu = document.getElementById('hamburger-menu'); // Get it here
            const navLinks = document.getElementById('nav-links'); // Get it here
            if (window.innerWidth < 768 && hamburgerMenu && navLinks) {
                navLinks.classList.remove('show');
                hamburgerMenu.classList.remove('open');
            }

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Artist modal functionality
    const artistModal = document.getElementById('artistModal');
    const closeButton = document.querySelector('.close-button');

    // Sample artist data - replace with your actual data
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
        },
        // Add more artists as needed
    };

    function openModal(element) {
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
        }

        artistModal.style.display = 'block';
    }

    window.openModal = openModal; // Make function globally available

    if (closeButton && artistModal) { // Check if elements exist
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