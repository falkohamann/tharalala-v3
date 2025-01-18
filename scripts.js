document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu?.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        this.classList.toggle('open');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if it's open
            if (window.innerWidth < 768) {
                navLinks.classList.remove('show');
                hamburgerMenu?.classList.remove('open');
            }

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize parallax effect
    const parallaxes = document.querySelectorAll('.parallax-background');
    let ticking = false;
    let lastScrollY = window.pageYOffset;

    function updateParallax() {
        parallaxes.forEach(parallax => {
            const container = parallax.parentElement;
            const rect = container.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

            if (isInViewport) {
                const speed = 0.4;
                const yPos = (rect.top - lastScrollY) * speed;
                parallax.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        lastScrollY = window.pageYOffset;
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Initial parallax update
    updateParallax();

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
        // Add more artists as needed
    };

    window.openModal = function(element) {
        const artistId = element.getAttribute('data-artist-id');
        const artist = artistData[artistId];

        if (artist) {
            document.getElementById('modal-artist-name').textContent = artist.name;
            document.getElementById('modal-bio').textContent = artist.bio;
            document.getElementById('facebook-link').href = artist.facebook;
            document.getElementById('instagram-link').href = artist.instagram;
            document.getElementById('spotify-link').href = artist.spotify;
            document.getElementById('website-link').href = artist.website;
        }

        artistModal.style.display = 'block';
    };

    closeButton?.addEventListener('click', function() {
        artistModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === artistModal) {
            artistModal.style.display = 'none';
        }
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateParallax, 66); // Debounce resize events
    });
});