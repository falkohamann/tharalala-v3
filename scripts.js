/* ===== CSS Optimization ===== */
/* --- Enhanced Variables --- */
:root {
  --primary-color: #4f772d;
  --secondary-color: #90a955;
  --background-color: var(--secondary-color); /* Reuse existing variable */
  --text-color: #ecf39e;
  --accent-color: #31572c;
  --font-family: 'Arial', sans-serif;
  --header-bg: rgba(49, 87, 44, 0.9); /* Calculated from original #31572CE6 */
  --modal-zindex: 1000;
  --header-zindex: 1010;
  --gallery-modal-zindex: 1020;
  --container-width: min(90%, 1200px);
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}

/* --- Base Reset & Global Styles --- */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Account for fixed header */
}

body {
  font-family: var(--font-family);
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 60px;
}

/* --- Layout Components --- */
.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
}

/* --- Header & Navigation --- */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--header-bg);
  padding: 0.5rem 0;
  z-index: var(--header-zindex);
}

nav {
  margin-left: auto;
}

.nav-list {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--secondary-color);
}

/* --- Responsive Mobile Menu --- */
#hamburger-menu {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger-bar {
  display: block;
  width: 25px;
  height: 3px;
  background-color: var(--text-color);
  margin: 5px 0;
  transition: var(--transition-normal);
}

/* --- Sections & Content Blocks --- */
section {
  padding: 4rem 0;
  position: relative;
}

/* --- Gallery Improvements --- */
.gallery-container {
  background-color: var(--text-color);
  padding: 2rem 0;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.image-item {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  transition: transform var(--transition-normal);
}

.image-item:hover {
  transform: translateY(-5px);
}

/* --- Modal Enhancements --- */
.gallery-modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  z-index: var(--gallery-modal-zindex);
}

.gallery-modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

/* --- Form Optimization --- */
input, textarea, button {
  font-family: inherit;
  font-size: inherit;
}

/* --- Performance Improvements --- */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  .image-item,
  .image-item img {
    transition: none !important;
  }
}

/* ===== Mobile Responsiveness ===== */
@media (max-width: 768px) {
  :root {
    --container-width: 95%;
  }

  .container {
    padding: 0 15px;
  }

  #hamburger-menu {
    display: block;
  }

  .nav-list {
    position: fixed;
    top: 60px;
    left: 0;
    flex-direction: column;
    width: 100%;
    background: var(--header-bg);
    display: none;
    padding: 1rem 0;
  }

  .nav-list.show {
    display: flex;
  }

  .nav-list li {
    padding: 1rem;
    border-top: 1px solid rgba(236, 243, 158, 0.1);
  }

  /* Touch target optimization */
  .nav-link,
  .gallery-nav-btn,
  .gallery-close-button {
    min-width: 44px;
    min-height: 44px;
  }
}