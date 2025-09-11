document.addEventListener('DOMContentLoaded', function() {
    // Existing modal functionality
    const modal = document.querySelector('.gallery-modal');
    const modalImg = document.querySelector('.gallery-modal-image');
    const closeButton = document.querySelector('.gallery-close-button');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    
    let currentImages = [];
    let currentImageIndex = 0;

    // Enhanced folder toggle functionality with lazy loading
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

            // If expanding for the first time, load images lazily
            if (!isExpanded && !imageGrid.dataset.loaded) {
                loadImagesForFolder(imageGrid);
                imageGrid.dataset.loaded = 'true';
            }

            // Calculate and set the max-height
            if (!isExpanded) {
                // Need to wait a bit for images to load before calculating height
                setTimeout(() => {
                    const gridHeight = imageGrid.scrollHeight;
                    imageGrid.style.maxHeight = gridHeight + 'px';
                }, 100);
            } else {
                imageGrid.style.maxHeight = '0';
            }
        });
    });

    function loadImagesForFolder(imageGrid) {
        const imageItems = imageGrid.querySelectorAll('.image-item');
        
        imageItems.forEach((item, index) => {
            // Add a slight delay to prevent overwhelming the browser
            setTimeout(() => {
                const img = item.querySelector('img');
                if (img && img.dataset.src) {
                    // Create a new image to preload
                    const newImg = new Image();
                    newImg.onload = () => {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        item.classList.add('loaded');
                    };
                    newImg.src = img.dataset.src;
                }
            }, index * 50); // Stagger loading by 50ms per image
        });
    }

    // Enhanced modal functionality with navigation
    function setupImageClickHandlers() {
        const galleryImages = document.querySelectorAll('.image-item img');
        
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', function() {
                if (this.src && !this.dataset.src) { // Only if image is loaded
                    openModal(this, index);
                }
            });
        });
    }

    function openModal(clickedImg, index) {
        // Get all loaded images from the same folder
        const section = clickedImg.closest('.gallery-section');
        const loadedImages = Array.from(section.querySelectorAll('.image-item img')).filter(img => 
            img.src && !img.dataset.src
        );
        
        currentImages = loadedImages;
        currentImageIndex = loadedImages.indexOf(clickedImg);
        
        modal.style.display = 'block';
        modalImg.src = clickedImg.src;
        modalImg.alt = clickedImg.alt;
        document.body.style.overflow = 'hidden';
        
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        prevBtn.style.display = currentImageIndex > 0 ? 'block' : 'none';
        nextBtn.style.display = currentImageIndex < currentImages.length - 1 ? 'block' : 'none';
    }

    function showPreviousImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            const img = currentImages[currentImageIndex];
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            updateNavigationButtons();
        }
    }

    function showNextImage() {
        if (currentImageIndex < currentImages.length - 1) {
            currentImageIndex++;
            const img = currentImages[currentImageIndex];
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            updateNavigationButtons();
        }
    }

    // Navigation event listeners
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);

    // Close modal functionality
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

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === 'block') {
            switch(event.key) {
                case 'Escape':
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    showNextImage();
                    break;
            }
        }
    });

    // Initialize click handlers for any pre-loaded images
    setupImageClickHandlers();
    
    // Set up a mutation observer to handle dynamically loaded images
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                setupImageClickHandlers();
            }
        });
    });

    // Observe all image elements for src changes
    document.querySelectorAll('.image-item img').forEach(img => {
        observer.observe(img, { attributes: true, attributeFilter: ['src'] });
    });
});
