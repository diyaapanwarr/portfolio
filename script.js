// script.js

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme'); // Toggle dark-theme class
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Switch to Light Theme'; // Change button text
    } else {
        themeToggle.textContent = 'Switch to Dark Theme'; // Change button text
    }
});
