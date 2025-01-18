// JavaScript for artist modal and image gallery modal
var artistModal = document.getElementById("artistModal");
var imageModal = document.getElementById("imageModal");
var modalImage = document.getElementById("modalImage");
var modalCaption = document.getElementById("caption");
var currentImageIndex = 0;
var currentGalleryImages = [];
var artistData = {}; // To store artist data from JSON

// Ensure modals are initialized
document.addEventListener('DOMContentLoaded', function() {
    artistModal = document.getElementById("artistModal");
    imageModal = document.getElementById("imageModal");
    modalImage = document.getElementById("modalImage");
    modalCaption = document.getElementById("caption");
});

// Fetch artist data from JSON (do this once on page load)
fetch('includes/artist_cards/artists.json')
  .then(response => response.json())
  .then(data => {
    artistData = data;
    console.log("Artist data loaded:", artistData);
  });

// Function to open the modal
function openModal(element) {
    event.preventDefault();
    currentImageIndex = parseInt(element.getAttribute('data-img-index'));
    console.log("Opening modal for index:", currentImageIndex);

    if (element.closest('#artists')) {
        openArtistModal(element);
    } else if (element.closest('#gallery')) {
        openImageModal(element);
    }
}

function openArtistModal(element) {
    if (!artistModal) {
        console.error("Artist modal element not found");
        return;
    }

    var artistId = element.getAttribute('data-artist-id');
    var artist = artistData[artistId];
    console.log("Opening artist modal for:", artistId, artist);

    // Update artistModal content
    document.getElementById('modal-image').src = artist.image;
    document.getElementById('modal-artist-name').textContent = artist.name;
    document.getElementById('modal-bio').textContent = artist.bio;

    // Update social links
    document.getElementById('facebook-link').href = artist.facebook;
    document.getElementById('instagram-link').href = artist.instagram;
    document.getElementById('spotify-link').href = artist.spotify;
    document.getElementById('website-link').href = artist.website;

    artistModal.style.display = "block";
}

function openImageModal(element) {
    if (!imageModal) {
        console.error("Image modal element not found");
        return;
    }

    var galleryContainer = element.closest('.gallery');
    currentGalleryImages = Array.from(galleryContainer.querySelectorAll('.gallery-item img'));

    modalImage.src = element.querySelector('img').src;
    imageModal.style.display = "block";

    // Set the size of the image
    modalImage.onload = function() {
        var imgRatio = this.naturalWidth / this.naturalHeight;
        var winRatio = window.innerWidth / window.innerHeight;

        if (imgRatio > winRatio) {
            // Image is wider than the window ratio
            this.style.width = '90vw';
            this.style.height = 'auto';
        } else {
            // Image is taller than the window ratio
            this.style.height = '90vh';
            this.style.width = 'auto';
        }
    }
}

// Function to close the modal
function closeModal() {
    console.log("closeModal function called");

    if (artistModal) {
        artistModal.style.display = "none";
    }

    if (imageModal) {
        imageModal.style.display = "none";
    }
}

// Functions for image navigation
function prevImage() {
    if (currentGalleryImages.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        modalImage.src = currentGalleryImages[currentImageIndex].src;
    }
}

function nextImage() {
    if (currentGalleryImages.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
        modalImage.src = currentGalleryImages[currentImageIndex].src;
    }
}

// Attach closeModal function to the close buttons
function attachCloseListener(modalElement, buttonSelector) {
    if (modalElement) {
        var closeButton = modalElement.querySelector(buttonSelector);
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
            console.log(`Event listener attached to close button for ${modalElement.id}`);
        } else {
            console.error(`Close button not found for ${modalElement.id}`);
        }
    } else {
        console.error(`Modal element not found: ${modalElement}`);
    }
}

attachCloseListener(artistModal, '.close-button');
attachCloseListener(imageModal, '.close-button');

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == artistModal || event.target == imageModal) {
        closeModal();
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (imageModal.style.display === "block") {
        if (event.key === "ArrowLeft") {
            prevImage();
        } else if (event.key === "ArrowRight") {
            nextImage();
        } else if (event.key === "Escape") {
            closeModal();
        }
    }
});

console.log("Modal script loaded");
