document.addEventListener('DOMContentLoaded', function() {
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
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    navLinks.classList.remove('show');
                    hamburgerMenu.classList.remove('open');

                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            navLinks.addEventListener('click', function(event) {
                event.stopPropagation();
            });

            document.addEventListener('click', function(event) {
                if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                    navLinks.classList.remove('show');
                    hamburgerMenu.classList.remove('open');
                }
            });
        }
    }

    // Function to set up smooth scrolling
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

    // Artist Modal Setup
    const artistModal = document.getElementById('artistModal');
    const closeButton = document.querySelector('.close-button');

    // Artist data
    const artistData = {
        artist1: {
            name: "Artist 1",
            bio: "Bio text for Artist 1",
            image: "assets/images/artist_tiles/artist_kachel4.jpg",
            facebook: "https://facebook.com/artist1",
            instagram: "https://instagram.com/artist1",
            spotify: "https://open.spotify.com/artist/artist1",
            website: "https://artist1.com"
        },
        artist2: {
            name: "Artist 2",
            bio: "Bio text for Artist 2",
            image: "assets/images/artist_tiles/artist_kachel4.jpg",
            facebook: "https://facebook.com/artist2",
            instagram: "https://instagram.com/artist2",
            spotify: "https://open.spotify.com/artist/artist2",
            website: "https://artist2.com"
        },
        artist3: {
            name: "Artist 3",
            bio: "Bio text for Artist 3",
            image: "assets/images/artist_tiles/artist_kachel4.jpg",
            facebook: "https://facebook.com/artist3",
            instagram: "https://instagram.com/artist3",
            spotify: "https://open.spotify.com/artist/artist3",
            website: "https://artist3.com"
        },
        artist4: {
            name: "Artist 4",
            bio: "Bio text for Artist 4",
            image: "assets/images/artist_tiles/artist_kachel4.jpg",
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

        if (artist && artistModal) {
            // Set modal content
            document.getElementById('modal-artist-name').textContent = artist.name;
            document.getElementById('modal-bio').textContent = artist.bio;
            
            // Set modal image
            const modalImage = document.getElementById('modal-image');
            if (modalImage) {
                modalImage.src = artist.image;
                modalImage.alt = artist.name;
            }

            // Set social links
            document.getElementById('facebook-link').href = artist.facebook;
            document.getElementById('instagram-link').href = artist.instagram;
            document.getElementById('spotify-link').href = artist.spotify;
            document.getElementById('website-link').href = artist.website;

            // Display modal
            artistModal.style.display = 'block';
        } else {
            console.error('Modal elements not found or artist data missing');
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

    // Initialize everything
    setupMobileMenu();
    setupSmoothScrolling();
});