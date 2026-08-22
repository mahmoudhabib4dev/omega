document.addEventListener('DOMContentLoaded', async () => {
    const navbarLoader = document.getElementById('navbar');
    try {
        const response = await fetch('./components/navbar.html');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const navbar = await response.text();
        navbarLoader.innerHTML = navbar;

      // Hamburger animation trigger logic
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileDropdown = document.getElementById('mobile-dropdown');

        if (hamburgerBtn && mobileDropdown) {
            hamburgerBtn.addEventListener('click', () => {
                const isOpen = mobileDropdown.classList.toggle('active');
                hamburgerBtn.textContent = isOpen ? '✕' : '☰';
            });
        }
    } catch (error) {
        console.error('Failed to load navbar component:', error);
    }
});