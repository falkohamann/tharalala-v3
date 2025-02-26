document.addEventListener("DOMContentLoaded", function () {
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

    // --- Gallery Modal Functionality ---
    const galleryModal = document.querySelector(".gallery-modal");
    const galleryModalImg = document.querySelector(".gallery-modal-image");
    const galleryCloseButton = document.querySelector(".gallery-close-button");
    const galleryPrevButton = document.querySelector(".gallery-prev");
    const galleryNextButton = document.querySelector(".gallery-next");
    const galleryImages = document.querySelectorAll(".image-item img");
    let currentImageIndex = 0;

    function showImage(index) {
        currentImageIndex = index;
        galleryModalImg.src = galleryImages[index].src;
        galleryModalImg.alt = galleryImages[index].alt;
    }

    function showNext(e) {
        e?.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        showImage(currentImageIndex);
    }

    function showPrev(e) {
        e?.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentImageIndex);
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener("click", function (e) {
            e.stopPropagation();
            galleryModal.style.display = "block";
            document.body.style.overflow = "hidden";
            showImage(index);
        });
    });

    if (galleryPrevButton) galleryPrevButton.addEventListener("click", showPrev);
    if (galleryNextButton) galleryNextButton.addEventListener("click", showNext);

    function closeGalleryModal() {
        galleryModal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    if (galleryCloseButton) {
        galleryCloseButton.addEventListener("click", function (e) {
            e.stopPropagation();
            closeGalleryModal();
        });
    }

    galleryModal.addEventListener("click", function (e) {
        if (e.target === galleryModal) {
            closeGalleryModal();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (galleryModal.style.display === "block") {
            if (e.key === "ArrowRight") showNext(e);
            else if (e.key === "ArrowLeft") showPrev(e);
            else if (e.key === "Escape") closeGalleryModal();
        }
    });

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

    function openArtistModal(artistId) {
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
                alert("Error loading artist details. Please try again later.");
            });
    }

    document.querySelectorAll(".artists-grid-item").forEach((item) => {
        item.addEventListener("click", function () {
            const artistId = this.dataset.artistId;
            openArtistModal(artistId);
        });
    });

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
});
