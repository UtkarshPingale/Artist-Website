// JavaScript for toggling the visibility of the menu
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const toggleMenu = document.getElementById('menu-box');

    // Toggle menu when clicking on the menu icon
    menuIcon.addEventListener('click', (e) => {
        toggleMenu.classList.toggle('hidden'); // Toggle between showing and hiding
        e.stopPropagation(); // Prevent this click from being detected by the document click event below
    });

    // Hide the menu when clicking outside of it
    document.addEventListener('click', (e) => {
        // Check if the click is outside the menu and menu icon
        if (!toggleMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            toggleMenu.classList.add('hidden'); // Hide the menu
        }
    });
});
