// JavaScript for toggling the visibility of the menu
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const toggleMenu = document.getElementById('menu-box');

    menuIcon.addEventListener('click', () => {
        toggleMenu.classList.toggle('hidden'); // Toggles between showing and hiding
    });
});
