<!-- gallery.php -->
<?php include 'header.php'; ?>
<div id="header"></div>
<main id="main-content">
    <div class="gallery-container">
    <?php
    $galleryPath = 'assets/images/gallery';
    $subfolders = array_filter(glob($galleryPath . '/*'), 'is_dir');

    // Sort subfolders in reverse order (newest first)
    rsort($subfolders);

    foreach ($subfolders as $subfolder) {
        $folderName = basename($subfolder);
        $images = glob($subfolder . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);

        if (!empty($images)) {
            echo "<section class='gallery-section'>";
            echo "<div class='folder-header'>";
            echo "<h2>" . htmlspecialchars($folderName) . "</h2>";
            echo "<button class='toggle-btn' aria-expanded='false'>
                    <span class='icon'>▼</span>
                    <span class='sr-only'>Toggle folder</span>
                  </button>";
            echo "</div>";

            echo "<div class='image-grid collapsed'>";
            foreach ($images as $image) {
                $imageName = basename($image);
                echo "<div class='image-item'>";
                echo "<img src='" . htmlspecialchars($image) . "'
                          alt='" . htmlspecialchars($imageName) . "'
                          loading='lazy'>";
                echo "</div>";
            }
            echo "</div>";
            echo "</section>";
        }
    }
    ?>

<div class="gallery-modal">
    <div class="gallery-modal-content">
        <span class="gallery-close-button">&times;</span>
        <button class="gallery-nav-btn gallery-prev">&lt;</button>
        <img class="gallery-modal-image" src="" alt="">
        <button class="gallery-nav-btn gallery-next">&gt;</button>
    </div>
</div>
</div>
    <div class="gallery-modal">
    <div class="gallery-modal-content">
        <span class="gallery-close-button">&times;</span>
        <img class="gallery-modal-image" src="" alt="">
    </div>
</div>
    <script src="gallery.js"></script>
</main>
<div id="footer"></div>
<?php include 'footer.php'; ?>
</body>
</html>