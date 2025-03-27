<!-- index.php -->
<?php include 'header.php'; ?>
<div id="header"></div>
<main id="main-content">
    <section id="welcome-banner">
    <div class="moving-text-container">
        <span class="moving-text line1">Willkommen zum Tharalala!</span>
        <span class="moving-text line2">22.08. - 24.08. 2025</span>
        <span class="moving-text line3">Kuppelhalle Tharandt</span>
    </div>
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
                            <td>18:00 - <a href="#">Einlaß</a></td>
                        </tr>
                        <tr>
                            <td>19:00 - <a href="javascript:void(0);" class="timetable-artist-link" data-artist-id="artist-01">Remo</a>
                            </td>
                        </tr>
                        <tr>
                            <td>20:30 - <a href="javascript:void(0);" class="timetable-artist-link" data-artist-id="artist-02">Brettel (Tharandt)</a></td>
                        </tr>
                        <tr>
                            <td>22:00 - <a href="javascript:void(0);" class="timetable-artist-link" data-artist-id="artist-03">Second Project</a></td>
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
                            <td>16:00 - <a href="javascript:void(0);" class="timetable-artist-link" data-artist-id="artist-02">Einlaß</a></td>
                        </tr>
                        <tr>
                            <td>17:00 - <a href="javascript:void(0);" class="timetable-artist-link" data-artist-id="artist-04">MalKapaun</a></td>
                        </tr>
                        <tr>
                            <td>18:10 - <a href="javascript:void(0);" class="timetable-artist-link" data-artist-id="artist-05">O'Reilly (München)</a></td>
                        </tr>
                        <tr>
                            <td>19:20 - <a href="javascript:void(0);" class="timetable-artist-link" data-artist-id="artist-06">The Perky Pollyvocs</a></td>
                        </tr>
                        <tr>
                            <td>20:30 - <a href="javascript:void(0);" class="timetable-artist-link" data-artist-id="artist-07">Trackstone (Polen)</a></td>
                        </tr>
                        <tr>
                            <td>21:40 - <a href="javascript:void(0);" class="timetable-artist-link" data-artist-id="artist-08">First Born Unicorn (Frankfurt am Main)</a></td>
                        </tr>
                        <tr>
                            <td>22:50 - <a href="javascript:void(0);" class="timetable-artist-link" data-artist-id="artist-09">The Freaky Friday Jailhouse Gang (Graz - Österreich)</a></td>
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
                            <td>wird noch bekannt gegeben</td>
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
            <?php
            $artistFiles = glob("data/artists/*.json");
            foreach ($artistFiles as $file) {
                $artistData = json_decode(file_get_contents($file), true);
                $artistId = basename($file, ".json");
                echo "<a href='javascript:void(0);' class='artists-grid-item' data-artist-id='" . htmlspecialchars($artistId) . "'>
                        <img src='" . htmlspecialchars($artistData['image']) . "' alt='" . htmlspecialchars($artistData['name']) . "'>
                      </a>";
            }
            ?>
        </div>
    </div>
</section>

<div id="artistModal" class="modal">
    <div class="modal-content">
        <button class="close-button" aria-label="Close">&times;</button>
        <div class="modal-header">
            <img src="" alt="" id="modal-image">
            <h2 id="modal-artist-name"></h2>
        </div>
        <div class="modal-body">
            <p id="modal-bio"></p>
            <div class="social-links">
                <a href="#" target="_blank" id="facebook-link"><i class="fab fa-facebook"></i></a>
                <a href="#" target="_blank" id="youtube-link"><i class="fab fa-youtube"></i></a>
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
            <p>Die Kuppelhalle Tharandt ist ein lebendiges Mehrgenerationenhaus und soziokulturelles Zentrum, das unter dem Motto "Irgendwas ist immer!" vielfältige Veranstaltungen und Angebote für alle Altersgruppen bietet. Mit ihrem einzigartigen architektonischen Charme und der flexiblen Raumgestaltung eignet sich die Kuppelhalle hervorragend als Partylocation für das Musikfestival Tharalala. Die einladende Atmosphäre und die zentrale Lage machen sie zum idealen Treffpunkt für Musikliebhaber und Feiernde, die gemeinsam unvergessliche Momente erleben möchten.
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
        <button class="gallery-close-button" aria-label="Close">&times;</button>
        <button class="gallery-nav-btn gallery-prev" aria-label="Previous Image">&lt;</button>
        <img class="gallery-modal-image" src="" alt="">
        <button class="gallery-nav-btn gallery-next" aria-label="Next Image">&gt;</button>
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
    <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);
    $privacyAccepted = isset($_POST["data-privacy"]);

    if (empty($name) || empty($email) || empty($message) || !$privacyAccepted) {
        $error = "Bitte füllen Sie alle Felder aus und akzeptieren Sie die Datenschutzerklärung.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    } else {
        $to = "falko.hamann@gmail.com"; // Change this
        $subject = "Neue Nachricht von $name";
        $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
        $emailBody = "Name: $name\nEmail: $email\n\nNachricht:\n$message";

        if (mail($to, $subject, $emailBody, $headers)) {
            $success = "Vielen Dank! Ihre Nachricht wurde gesendet.";
        } else {
            $error = "Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.";
        }
    }
}
?>

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

                <!-- Display Success/Error Messages -->
                <?php if (!empty($error)): ?>
                    <p class="error-message"><?php echo $error; ?></p>
                <?php endif; ?>
                <?php if (!empty($success)): ?>
                    <p class="success-message"><?php echo $success; ?></p>
                <?php endif; ?>

                <!-- Display Form Only If No Success Message -->
                <?php if (empty($success)): ?>
                    <form action="index.php" method="post">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required value="<?php echo isset($name) ? htmlspecialchars($name) : ''; ?>">

                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required value="<?php echo isset($email) ? htmlspecialchars($email) : ''; ?>">

                        <label for="message">Nachricht</label>
                        <textarea id="message" name="message" required rows="6"><?php echo isset($message) ? htmlspecialchars($message) : ''; ?></textarea>

                        <div class="checkbox-container">
                            <input type="checkbox" id="data-privacy" name="data-privacy" required <?php echo isset($privacyAccepted) ? 'checked' : ''; ?>>
                            <label for="data-privacy">Mit dem Absenden dieser Nachricht akzeptiere ich die <a href="#">Datenschutzerklärung</a></label>
                        </div>

                        <input type="submit" value="SENDEN">
                    </form>
                <?php endif; ?>
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
