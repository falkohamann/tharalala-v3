document.addEventListener("DOMContentLoaded", function () {
    console.log("Scripts loaded successfully.");

    // --- Mobile Menu Functionality ---
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener("click", function (e) {
            e.stopPropagation();
            this.classList.toggle("open");
            navLinks.classList.toggle("show");
        });

        document.addEventListener("click", function (event) {
            if (!hamburgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
                hamburgerMenu.classList.remove("open");
                navLinks.classList.remove("show");
            }
        });

        // Close mobile menu after a nav link is clicked
        navLinks.addEventListener("click", function (event) {
            if (event.target.tagName === "A") {
                hamburgerMenu.classList.remove("open");
                navLinks.classList.remove("show");
            }
        });
    }

    // --- Artist Modal Functionality ---
    const artistModal = document.getElementById("artistModal");
    const modalImage = document.getElementById("modal-image");
    const modalArtistName = document.getElementById("modal-artist-name");
    const modalBio = document.getElementById("modal-bio");
    const facebookLink = document.getElementById("facebook-link");
    const instagramLink = document.getElementById("instagram-link");
    const spotifyLink = document.getElementById("spotify-link");
    const websiteLink = document.getElementById("website-link");
    const artistCloseButton = artistModal.querySelector(".close-button");

    if (!artistModal) {
        console.error("Artist modal not found in the DOM.");
        return;
    }

    function openArtistModal(artistId) {
        console.log(`Opening modal for artist: ${artistId}`);

        fetch(`data/artists/${artistId}.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Artist data not found: ${artistId}`);
                }
                return response.json();
            })
            .then((artist) => {
                modalImage.src = artist.image;
                modalImage.alt = artist.name;
                modalArtistName.textContent = artist.name;
                // Replace newlines with <br> and **bold** with <b> for HTML display
                modalBio.innerHTML = artist.bio
                    .replace(/\n/g, "<br>")
                    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

                const socialLinks = {
                    'facebook-link': artist.social.facebook,
                    'instagram-link': artist.social.instagram,
                    'spotify-link': artist.social.spotify,
                    'website-link': artist.social.url,
                    'youtube-link': artist.social.youtube
                };

                for (const [id, url] of Object.entries(socialLinks)) {
                    const linkElement = document.getElementById(id);
                    if (url && url.trim() !== "") {
                        linkElement.href = url;
                        linkElement.style.display = 'inline-block';
                    } else {
                        linkElement.style.display = 'none';
                    }
                }

                artistModal.style.display = "block";
            })
            .catch((error) => {
                console.error("Error loading artist data:", error);
                alert("Could not load artist details. Check if the JSON file exists.");
            });
    }

    // Event Delegation for Artist Clicks (artists-grid-item and timetable-artist-link)
    document.body.addEventListener("click", function (event) {
        const target = event.target.closest(".artists-grid-item, .timetable-artist-link");
        if (target) {
            const artistId = target.dataset.artistId;
            if (artistId) {
                openArtistModal(artistId);
            } else {
                console.error("Artist ID not found on clicked element.");
            }
        }
    });

    // Close modal functionality
    artistCloseButton.addEventListener("click", function () {
        artistModal.style.display = "none";
    });

    artistModal.addEventListener("click", function (event) {
        if (event.target === artistModal) {
            artistModal.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && artistModal.style.display === "block") {
            artistModal.style.display = "none";
        }
    });
});