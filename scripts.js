/*script.js*/document.addEventListener('DOMContentLoaded', function() {
    // --- Existing Functionality (Folder Toggle) ---
    const folderHeaders = document.querySelectorAll('.folder-header');

    folderHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const folder = header.parentElement;
            const imageGrid = folder.querySelector('.image-grid');
            const toggleBtn = header.querySelector('.toggle-btn');

            imageGrid.classList.toggle('collapsed');
            const isCollapsed = imageGrid.classList.contains('collapsed');
            toggleBtn.setAttribute('aria-expanded', !isCollapsed);
            toggleBtn.setAttribute('aria-label', isCollapsed ? 'Open folder' : 'Close folder');
        });
    });

    // --- New Artist Modal Functionality ---
    const artistData = {
        artist1: {
            name: "Artist One",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam ultricies, nunc nisl tincidunt nunc, vitae lacinia nisl nisl vitae nisl.",
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
        // ... add more artists if needed
    };

    const artistModal = document.getElementById('artistModal'); // Get the artist modal element
    const modalImage = document.getElementById('modal-image');
    const modalArtistName = document.getElementById('modal-artist-name');
    const modalBio = document.getElementById('modal-bio');
    const facebookLink = document.getElementById('facebook-link');
    const instagramLink = document.getElementById('instagram-link');
    const spotifyLink = document.getElementById('spotify-link');
    const websiteLink = document.getElementById('website-link');
    const artistCloseButton = artistModal.querySelector('.close-button'); // Get the close button of the artist modal

    function openModal(element) {
        const artistId = element.dataset.artistId;
        const artist = artistData[artistId];

        modalImage.src = artist.image;
        modalImage.alt = artist.name;
        modalArtistName.textContent = artist.name;
        modalBio.textContent = artist.bio;
        facebookLink.href = artist.facebook;
        instagramLink.href = artist.instagram;
        spotifyLink.href = artist.spotify;
        websiteLink.href = artist.website;

        artistModal.style.display = 'block'; // Show the artist modal
    }

    const artistGridItems = document.querySelectorAll('.artists-grid-item');
    artistGridItems.forEach(item => {
        item.addEventListener('click', function() {
            openModal(this);
        });
    });

    artistCloseButton.addEventListener('click', function() {
        artistModal.style.display = 'none'; // Hide the artist modal
    });

    artistModal.addEventListener('click', function(event) {
        if (event.target === artistModal) {
            artistModal.style.display = 'none'; // Hide the artist modal
        }
    });

    // --- Existing Gallery Modal Functionality ---
    const galleryModal = document.querySelector('.gallery-modal'); // Use a different variable name for the gallery modal
    const galleryModalImg = document.querySelector('.gallery-modal-image');
    const galleryCloseButton = document.querySelector('.gallery-close-button'); // Use a different variable name
    const galleryPrevButton = document.querySelector('.gallery-prev'); // Use a different variable name
    const galleryNextButton = document.querySelector('.gallery-next'); // Use a different variable name
    const galleryImages = document.querySelectorAll('.image-item img');
    let currentImageIndex = 0;

    function showImage(index) {
        currentImageIndex = index;
        galleryModalImg.src = galleryImages[index].src;
        galleryModalImg.alt = galleryImages[index].alt;
    }

    function showNext() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        showImage(currentImageIndex);
    }

    function showPrev() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentImageIndex);
    }

    // Open modal when clicking on an image
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            galleryModal.style.display = 'block';
            showImage(index);
            document.body.style.overflow = 'hidden';
        });
    });

    // Navigation button click handlers
    galleryNextButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });

    galleryPrevButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (galleryModal.style.display === 'block') {
            if (event.key === 'ArrowRight') {
                showNext();
            } else if (event.key === 'ArrowLeft') {
                showPrev();
            } else if (event.key === 'Escape') {
                galleryModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Existing close functionality
    galleryCloseButton.addEventListener('click', function() {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    galleryModal.addEventListener('click', function(event) {
        if (event.target === galleryModal) {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
