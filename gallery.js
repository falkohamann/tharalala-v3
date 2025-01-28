document.addEventListener('DOMContentLoaded', function() {
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
});