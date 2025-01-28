document.addEventListener('DOMContentLoaded', function() {
    // Existing folder toggle functionality remains the same
    const folderHeaders = document.querySelectorAll('.folder-header');

    folderHeaders.forEach(header => {
        // ... existing folder code ...
    });

    // Modal functionality with navigation
    const modal = document.querySelector('.gallery-modal');
    const modalImg = document.querySelector('.gallery-modal-image');
    const closeButton = document.querySelector('.gallery-close-button');
    const prevButton = document.querySelector('.gallery-prev');
    const nextButton = document.querySelector('.gallery-next');
    const galleryImages = document.querySelectorAll('.image-item img');
    let currentImageIndex = 0;

    function showImage(index) {
        currentImageIndex = index;
        modalImg.src = galleryImages[index].src;
        modalImg.alt = galleryImages[index].alt;
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
            modal.style.display = 'block';
            showImage(index);
            document.body.style.overflow = 'hidden';
        });
    });

    // Navigation button click handlers
    nextButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });

    prevButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowRight') {
                showNext();
            } else if (event.key === 'ArrowLeft') {
                showPrev();
            } else if (event.key === 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Existing close functionality
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});