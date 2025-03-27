"use strict";
// Select elements
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
// Function to toggle theme
const toggleTheme = () => {
    // Toggle dark mode by adding/removing the 'dark' class
    body.classList.toggle("dark");
    // You can also toggle the button's text based on the theme
    const isDarkMode = body.classList.contains("dark");
    if (themeToggleBtn) {
        themeToggleBtn.textContent = isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode";
    }
};
// Event listener for theme toggle button
themeToggleBtn === null || themeToggleBtn === void 0 ? void 0 : themeToggleBtn.addEventListener("click", toggleTheme);
// Simple animation for the stick figure (move across the top)
let position = 0;
const stickFigure = document.getElementById("stick-figure");
const moveFigure = () => {
    if (stickFigure) {
        position += 1;
        stickFigure.style.transform = `translateX(${position}px)`;
        if (position > window.innerWidth) {
            position = 0;
        }
    }
};
setInterval(moveFigure, 10); // Move the stick figure every 10ms
