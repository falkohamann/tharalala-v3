<?php include 'header.php'; ?>
<div id="header"></div>
<main id="main-content">
    <section id="welcome-banner">
        <img src="assets/images/header-vol3.png" alt="Willkommen beim Tharalala Musik Festival!">
    </section>

    <div class="parallax-container" id="parallax1">
        <div class="parallax-background" style="background-image: url('assets/images/bg-images/bg-21.jpeg');"></div>
    </div>

    <section id="program">
        <div class="container">
            <img src="assets/images/program.png" alt="Programm">
            <div class="program-tables-container">
                <table class="program-table">
                    <thead>
                        <tr>
                            <th>Freitag</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>18:00 - <a href="#">Band A</a></td>
                        </tr>
                        <tr>
                            <td>20:00 - <a href="#">Band D</a></td>
                        </tr>
                    </tbody>
                </table>

                <table class="program-table">
                    <thead>
                        <tr>
                            <th>Samstag</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>16:00 - <a href="#">Band B</a></td>
                        </tr>
                        <tr>
                            <td>18:00 - <a href="#">Band E</a></td>
                        </tr>
                    </tbody>
                </table>

                <table class="program-table">
                    <thead>
                        <tr>
                            <th>Sonntag</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>14:00 - <a href="#">Band C</a></td>
                        </tr>
                        <tr>
                            <td>16:00 - <a href="#">Band F</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <div class="parallax-container" id="parallax2">
        <div class="parallax-background" style="background-image: url('assets/images/bg-images/bg-13.jpeg');"></div>
    </div>

    <section id="artists">
        <div class="container">
            <img src="assets/images/kuenstler.png" alt="Künstler">
            <div class="artists-grid">
                <a href="javascript:void(0);" onclick="openModal(this);" data-img-index="0" class="artists-grid-item" data-artist-id="artist1">
                    <img src="assets/images/artist_tiles/artist_kachel4.jpg" alt="Artist 1">
                </a>
                <a href="javascript:void(0);" onclick="openModal(this);" data-img-index="1" class="artists-grid-item" data-artist-id="artist2">
                    <img src="assets/images/artist_tiles/artist_kachel4.jpg" alt="Artist 2">
                </a>
                <a href="javascript:void(0);" onclick="openModal(this);" data-img-index="2" class="artists-grid-item" data-artist-id="artist3">
                    <img src="assets/images/artist_tiles/artist_kachel4.jpg" alt="Artist 3">
                </a>
                <a href="javascript:void(0);" onclick="openModal(this);" data-img-index="3" class="artists-grid-item" data-artist-id="artist4">
                    <img src="assets/images/artist_tiles/artist_kachel4.jpg" alt="Artist 4">
                </a>
            </div>
        </div>
    </section>

    <div id="artistModal" class="modal">
        <div class="modal-content">
            <span class="close-button">×</span>
            <div class="modal-header">
                <img src="" alt="" id="modal-image">
                <h2 id="modal-artist-name"></h2>
            </div>
            <div class="modal-body">
                <p id="modal-bio"></p>
                <div class="social-links">
                    <a href="#" target="_blank" id="facebook-link"><i class="fab fa-facebook"></i></a>
                    <a href="#" target="_blank" id="instagram-link"><i class="fab fa-instagram"></i></a>
                    <a href="#" target="_blank" id="spotify-link"><i class="fab fa-spotify"></i></a>
                    <a href="#" target="_blank" id="website-link"><i class="fas fa-globe"></i></a>
                </div>
            </div>
        </div>
    </div>

    <div class="parallax-container" id="parallax3">
        <div class="parallax-background" style="background-image: url('assets/images/bg-images/bg-23.jpeg');"></div>
    </div>

    <section id="info">
        <div class="container">
            <img src="assets/images/info.png" alt="Festival Info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>
            <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
        </div>
    </section>

    <div class="parallax-container" id="parallax4">
        <div class="parallax-background" style="background-image: url('assets/images/bg-images/bg-7.jpeg');"></div>
    </div>

    <section id="location">
        <div class="container">
            <img src="assets/images/location.png" alt="Location">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.8972397889434!2d13.581857799999998!3d50.981089999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709db66d1315023%3A0x53f84a21561fa28c!2sKuppelhalle%20Tharandt!5e0!3m2!1sde!2sde!4v1737814041368!5m2!1sde!2sde" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
    <div class="parallax-container" id="parallax5">
        <div class="parallax-background" style="background-image: url('assets/images/bg-images/bg-20.jpeg');"></div>
    </div>
    <section id="pictures">
        <div class="container">
            <img src="assets/images/pictures.png" alt="Bilder">
            <div class="text-container">
            <p>Taucht ein in magische Festival-Momente! Unsere Bildergalerie nimmt euch mit auf eine visuelle Reise durch das Tharalala Musik Festival - von mitreißenden Live-Performances über ausgelassene Tanzszenen bis hin zu den kleinen, besonderen Augenblicken, die dieses Festival so einzigartig machen. Lasst die Atmosphäre noch einmal aufleben und entdeckt vielleicht sogar euch selbst in einem der Schnappschüsse.</p>
            </div>
            <div class="gallery-container">
    <?php
    $galleryPath = 'assets/images/gallery';
    $subfolders = array_filter(glob($galleryPath . '/*'), 'is_dir');

    // Sort subfolders in reverse order (newest first)
    rsort($subfolders);

    foreach ($subfolders as $subfolder) {
        $folderName = basename($subfolder);
        $images = glob($subfolder . '/*.{webp}', GLOB_BRACE);

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
        </div>
    </section>

    <div class="parallax-container" id="parallax5">
        <div class="parallax-background" style="background-image: url('assets/images/bg-images/bg-10.jpeg');"></div>
    </div>
    <section id="past">
        <div class="container">
            <img src="assets/images/past.png" alt="Vergangenes">
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
    </section>

    <div class="parallax-container" id="parallax5">
        <div class="parallax-background" style="background-image: url('assets/images/bg-images/bg-1.jpeg');"></div>
    </div>
    <section id="contact">
        <div class="container">
            <img src="assets/images/contact.png" alt="Kontakt" class="contact-image">
            <div class="content-wrapper">
                <div class="contact-section">
                    <div class="contact-info">
                        <h3>ALLGEMEINE ANFRAGEN</h3>
                        <p class="email-address">info@tharalala.de</p>
                    </div>
                    <div class="contact-info">
                        <h3>BOOKING ANFRAGEN</h3>
                        <p class="email-address">booking@htharalala.de</p>
                    </div>
                </div>
                <div class="form-section">
                    <h2>WIR MELDEN UNS!</h2>
                    <form action="#" method="post">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required>
                        <label for="message">Nachricht</label>
                        <textarea id="message" name="message" required rows="6"></textarea>
                        <div class="checkbox-container">
                            <input type="checkbox" id="data-privacy" name="data-privacy" required>
                            <label for="data-privacy">Mit dem Absenden dieser Nachricht akzeptiere ich die <a href="#">Datenschutzerklärung</a></label>
                        </div>
                        <input type="submit" value="SENDEN">
                    </form>
                </div>
            </div>
        </div>
    </section>

    <div class="parallax-container" id="parallax6">
        <div class="parallax-background" style="background-image: url('assets/images/bg-images/bg-3.jpeg');"></div>
    </div>
</main>
<div id="footer"></div>
<script src="gallery.js"></script>
<?php include 'footer.php'; ?>
</body>
</html>