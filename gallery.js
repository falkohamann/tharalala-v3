document.addEventListener('DOMContentLoaded', function() {
    // Existing folder toggle functionality
    const folderHeaders = document.querySelectorAll('.folder-header');

    folderHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.parentElement;
            const imageGrid = section.querySelector('.image-grid');
            const toggleBtn = this.querySelector('.toggle-btn');
            const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

            // Toggle the collapsed state
            imageGrid.classList.toggle('collapsed');
            toggleBtn.setAttribute('aria-expanded', !isExpanded);

            // If expanding, calculate and set the max-height
            if (!isExpanded) {
                const gridHeight = imageGrid.scrollHeight;
                imageGrid.style.maxHeight = gridHeight + 'px';
            } else {
                imageGrid.style.maxHeight = '0';
            }
        });
    });

    // New modal functionality
    const modal = document.querySelector('.gallery-modal');
    const modalImg = document.querySelector('.gallery-modal-image');
    const closeButton = document.querySelector('.gallery-close-button');
    const galleryImages = document.querySelectorAll('.image-item img');

    // Open modal when clicking on an image
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal when clicking the close button
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
});