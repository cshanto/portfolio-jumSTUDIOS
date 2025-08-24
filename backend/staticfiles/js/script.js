// Auth popup logic
const signinBtn = document.getElementById("signin-btn");
const signupBtn = document.getElementById("signup-btn");
const popup = document.getElementById("auth-popup");
const closePopup = document.getElementById("close-popup");
const authTitle = document.getElementById("auth-title");

signinBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
  authTitle.textContent = "Sign In";
});

signupBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
  authTitle.textContent = "Sign Up";
});

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});
