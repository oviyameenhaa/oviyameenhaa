// Typing Animation
const texts = ["an editor", " a learner", " a designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-animation span").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
})();

// Highlight the active page in the navigation
const currentPath = window.location.pathname.split("/").pop(); // Get current file name
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
    }
});
2

// Interactive animations for future extensions
document.addEventListener("DOMContentLoaded", () => {
    const profilePhoto = document.querySelector(".profile-photo");

    // Hover animation for profile picture
    profilePhoto.addEventListener("mouseenter", () => {
        profilePhoto.style.transform = "scale(1.1)";
        profilePhoto.style.transition = "transform 0.3s";
    });

    profilePhoto.addEventListener("mouseleave", () => {
        profilePhoto.style.transform = "scale(1)";
    });
});



