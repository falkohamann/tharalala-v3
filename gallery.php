<!-- gallery.php -->
<?php include 'header.php'; ?>
<div id="header"></div>
<main id="main-content">
<div class="gallery-container">
    <?php
    $galleryPath = 'assets/images/gallery';
    $subfolders = array_filter(glob($galleryPath . '/*'), 'is_dir');

    foreach ($subfolders as $subfolder) {
        $folderName = basename($subfolder);
        $images = glob($subfolder . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);

        if (!empty($images)) {
            echo "<section class='gallery-section'>";
            echo "<h2>" . htmlspecialchars($folderName) . "</h2>";
            echo "<div class='image-grid'>";

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
</div>
</main>
<div id="footer"></div>
<?php include 'footer.php'; ?>
</body>
</html>