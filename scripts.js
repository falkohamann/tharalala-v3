document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Functionality ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('open');
            navLinks.classList.toggle('show');
        });

        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('open');
                navLinks.classList.remove('show');
            });
        });

        document.addEventListener('click', function(event) {
            if (!hamburgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
                hamburgerMenu.classList.remove('open');
                navLinks.classList.remove('show');
            }
        });
    }

    // --- Folder and Gallery Functionality ---
    const folderHeaders = document.querySelectorAll('.folder-header');
    const galleryModal = document.querySelector('.gallery-modal');
    const galleryModalImg = document.querySelector('.gallery-modal-image');
    const galleryCloseButton = document.querySelector('.gallery-close-button');
    const galleryPrevButton = document.querySelector('.gallery-prev');
    const galleryNextButton = document.querySelector('.gallery-next');
    const galleryImages = document.querySelectorAll('.image-item img');
    let currentImageIndex = 0;

    // Folder toggle functionality
    folderHeaders.forEach(header => {
        const toggleBtn = header.querySelector('.toggle-btn');

        if (toggleBtn) {
            toggleBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const imageGrid = header.nextElementSibling;
                const icon = this.querySelector('.icon');

                const isCurrentlyCollapsed = imageGrid.classList.contains('collapsed');

                if (isCurrentlyCollapsed) {
                    imageGrid.style.maxHeight = imageGrid.scrollHeight + 'px';
                } else {
                    imageGrid.style.maxHeight = '0px';
                }

                imageGrid.classList.toggle('collapsed');
                this.setAttribute('aria-expanded', !isCurrentlyCollapsed);
                icon.textContent = isCurrentlyCollapsed ? '▲' : '▼';
            });
        }
    });

    // Gallery modal functionality
    function showImage(index) {
        currentImageIndex = index;
        galleryModalImg.src = galleryImages[index].src;
        galleryModalImg.alt = galleryImages[index].alt;
    }

    function showNext(e) {
        e?.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        showImage(currentImageIndex);
    }

    function showPrev(e) {
        e?.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentImageIndex);
    }

    // Add click handlers to all gallery images
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            galleryModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            showImage(index);
        });
    });

    // Navigation buttons
    if (galleryPrevButton) {
        galleryPrevButton.addEventListener('click', showPrev);
    }

    if (galleryNextButton) {
        galleryNextButton.addEventListener('click', showNext);
    }

    // Close button and click outside
    function closeGalleryModal() {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    if (galleryCloseButton) {
        galleryCloseButton.addEventListener('click', function(e) {
            e.stopPropagation();
            closeGalleryModal();
        });
    }

    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            closeGalleryModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (galleryModal.style.display === 'block') {
            if (e.key === 'ArrowRight') {
                showNext(e);
            } else if (e.key === 'ArrowLeft') {
                showPrev(e);
            } else if (e.key === 'Escape') {
                closeGalleryModal();
            }
        }
    });

    // --- Artist Modal Functionality ---
    const artistData = {
        artist1: {
            name: "Artist One",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "assets/images/artist_tiles/artist_kachel4.jpg",
            facebook: "#",
            instagram: "#",
            spotify: "#",
            website: "#"
        },
        artist2: {
            name: "Artist Two",
            bio: "Bio for Artist Two...",
            image: "assets/images/artist_tiles/artist_kachel4.jpg",
            facebook: "#",
            instagram: "#",
            spotify: "#",
            website: "#"
        },
        artist3: {
            name: "Artist Three",
            bio: "Bio for Artist Three...",
            image: "assets/images/artist_tiles/artist_kachel4.jpg",
            facebook: "#",
            instagram: "#",
            spotify: "#",
            website: "#"
        },
        artist4: {
            name: "Artist Four",
            bio: "Bio for Artist Four...",
            image: "assets/images/artist_tiles/artist_kachel4.jpg",
            facebook: "#",
            instagram: "#",
            spotify: "#",
            website: "#"
        }
    };

    const artistModal = document.getElementById('artistModal');
    if (artistModal) {
        const modalImage = document.getElementById('modal-image');
        const modalArtistName = document.getElementById('modal-artist-name');
        const modalBio = document.getElementById('modal-bio');
        const facebookLink = document.getElementById('facebook-link');
        const instagramLink = document.getElementById('instagram-link');
        const spotifyLink = document.getElementById('spotify-link');
        const websiteLink = document.getElementById('website-link');
        const artistCloseButton = artistModal.querySelector('.close-button');

        function openArtistModal(element) {
            const artistId = element.dataset.artistId;
            const artist = artistData[artistId];

            if (modalImage) {
                modalImage.src = artist.image;
                modalImage.alt = artist.name;
            }
            if (modalArtistName) modalArtistName.textContent = artist.name;
            if (modalBio) modalBio.textContent = artist.bio;
            if (facebookLink) facebookLink.href = artist.facebook;
            if (instagramLink) instagramLink.href = artist.instagram;
            if (spotifyLink) spotifyLink.href = artist.spotify;
            if (websiteLink) websiteLink.href = artist.website;

            artistModal.style.display = 'block';
        }

        const artistGridItems = document.querySelectorAll('.artists-grid-item');
        artistGridItems.forEach(item => {
            item.addEventListener('click', function() {
                openArtistModal(this);
            });
        });

        if (artistCloseButton) {
            artistCloseButton.addEventListener('click', function() {
                artistModal.style.display = 'none';
            });
        }

        artistModal.addEventListener('click', function(event) {
            if (event.target === artistModal) {
                artistModal.style.display = 'none';
            }
        });
    }
});