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

    // Check if modal exists
    if (!artistModal) {
        console.error("Artist modal not found in the DOM.");
        return;
    }

    // Function to open modal with artist data
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
                modalBio.textContent = artist.bio;

                facebookLink.href = artist.facebook || "#";
                instagramLink.href = artist.instagram || "#";
                spotifyLink.href = artist.spotify || "#";
                websiteLink.href = artist.website || "#";

                artistModal.style.display = "block";
            })
            .catch((error) => {
                console.error("Error loading artist data:", error);
                alert("Could not load artist details. Check if the JSON file exists.");
            });
    }

    // **Event Delegation for Artist Clicks**
    document.body.addEventListener("click", function (event) {
        const target = event.target.closest(".artists-grid-item");
        if (target) {
            const artistId = target.dataset.artistId;
            if (artistId) {
                openArtistModal(artistId);
            } else {
                console.error("Artist ID not found on clicked element.");
            }
        }
    });

    // Close modal when clicking outside or pressing ESC
    if (artistCloseButton) {
        artistCloseButton.addEventListener("click", function () {
            artistModal.style.display = "none";
        });
    }

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
