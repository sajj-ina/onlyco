document.addEventListener("DOMContentLoaded", () => {
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const forgotForm = document.getElementById("forgot-form");

document.getElementById("signup-link").onclick = e => {
e.preventDefault();
loginForm.classList.remove("active");
signupForm.classList.add("active");
};

document.getElementById("login-link").onclick = e => {
e.preventDefault();
signupForm.classList.remove("active");
loginForm.classList.add("active");
};

document.getElementById("forgot-link").onclick = e => {
e.preventDefault();
loginForm.classList.remove("active");
forgotForm.classList.add("active");
};

document.getElementById("back-login").onclick = e => {
e.preventDefault();
forgotForm.classList.remove("active");
loginForm.classList.add("active");
};

// LOGIN
loginForm.addEventListener("submit", e => {
e.preventDefault();
localStorage.setItem("onlycoders_logged_in", "1");
window.location.href = "home.html";
});
});

