// theme.js — toggles dark theme on <body> using class "dark-theme"
// stores preference in localStorage and updates button icon

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  const body = document.body;

  if (!btn) return; // guard

  // Start: check saved preference or system preference
  const saved = localStorage.getItem("theme"); // "dark" or "light" or null
  if (saved === "dark") {
    body.classList.add("dark-theme");
    btn.textContent = "☀️";
  } else if (saved === "light") {
    body.classList.remove("dark-theme");
    btn.textContent = "🌙";
  } else {
    // no saved value: respect prefers-color-scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add("dark-theme");
      btn.textContent = "☀️";
    } else {
      body.classList.remove("dark-theme");
      btn.textContent = "🌙";
    }
  }

  btn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-theme");
    if (isDark) {
      localStorage.setItem("theme", "dark");
      btn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      btn.textContent = "🌙";
    }
  });
});
