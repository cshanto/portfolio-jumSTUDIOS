// 🌙 Dark/Light Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
}

// Apply stored theme on load
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
}

// 📱 Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
    });
}
// 🌙 Dark/Light Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
}

// Apply stored theme on load
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
}

// 📱 Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
    });
}
