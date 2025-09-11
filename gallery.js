document.addEventListener('DOMContentLoaded', function() {
    console.log('Gallery script loaded - DEBUG VERSION');
    
    // Debug: Check what we have in the DOM
    const galleryContainer = document.querySelector('.gallery-container');
    console.log('Gallery container found:', galleryContainer);
    
    const allImageItems = document.querySelectorAll('.image-item');
    console.log('Total image items found:', allImageItems.length);
    
    const allImages = document.querySelectorAll('.image-item img');
    console.log('Total images found:', allImages.length);
    
    if (allImages.length > 0) {
        const firstImg = allImages[0];
        console.log('First image src:', firstImg.src);
        console.log('First image data-src:', firstImg.dataset.src);
        console.log('First image element:', firstImg);
    }
    
    // Enhanced folder toggle functionality with lazy loading
    const folderHeaders = document.querySelectorAll('.folder-header');
    console.log('Found folder headers:', folderHeaders.length);

    folderHeaders.forEach(header => {
        header.addEventListener('click', function() {
            console.log('Folder header clicked');
            const section = this.parentElement;
            const imageGrid = section.querySelector('.image-grid');
            const toggleBtn = this.querySelector('.toggle-btn');
            const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

            console.log('Current expanded state:', isExpanded);
            console.log('Image grid:', imageGrid);

            // Toggle the collapsed state
            imageGrid.classList.toggle('collapsed');
            toggleBtn.setAttribute('aria-expanded', !isExpanded);

            // If expanding for the first time, load images lazily
            if (!isExpanded && !imageGrid.dataset.loaded) {
                console.log('Loading images for first time');
                setupImageLoader(imageGrid);
                imageGrid.dataset.loaded = 'true';
            }

            // Calculate and set the max-height
            if (!isExpanded) {
                // Need to wait a bit for images to load before calculating height
                setTimeout(() => {
                    const gridHeight = imageGrid.scrollHeight;
                    imageGrid.style.maxHeight = gridHeight + 'px';
                    console.log('Set grid height to:', gridHeight + 'px');
                }, 100);
            } else {
                imageGrid.style.maxHeight = '0';
                console.log('Collapsed grid');
            }
        });
    });

    function setupImageLoader(imageGrid) {
        const imageItems = Array.from(imageGrid.querySelectorAll('.image-item'));
        console.log('Setting up loader for', imageItems.length, 'images');
        imageItems.forEach((item, i) => {
            const img = item.querySelector('img');
            if (img && img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                item.classList.add('loaded');
            }
        });
    }

    // Modal functionality
    const modal = document.querySelector('.gallery-modal');
    const modalImg = document.querySelector('.gallery-modal-image');
    const closeButton = document.querySelector('.gallery-close-button');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    
    let currentImages = [];
    let currentImageIndex = 0;

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
        if (prevBtn && nextBtn) {
            prevBtn.style.display = currentImageIndex > 0 ? 'block' : 'none';
            nextBtn.style.display = currentImageIndex < currentImages.length - 1 ? 'block' : 'none';
        }
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
    if (prevBtn) prevBtn.addEventListener('click', showPreviousImage);
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);

    // Open modal when clicking on an image
    document.addEventListener('click', function(e) {
        if (e.target.matches('.image-item img') && e.target.src && !e.target.dataset.src) {
            openModal(e.target);
        }
    });

    // Close modal when clicking the close button
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside the image
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (modal && modal.style.display === 'block') {
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
});
