// Greet the user when the page loads
window.onload = function() {
    alert("Welcome to Go Mile! 🌟 Ready to explore?");
};

// Highlight nav links on hover
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "turquoise";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "#fff";
    });
});

// Add click event to "Join Our Community" button
const joinButton = document.querySelector("button[onclick*='Register First']");
joinButton.addEventListener("click", () => {
    console.log("User clicked Join Our Community");
    alert("Thanks for your interest! Please register first 🌱");
});

// Add a cozy footer dynamically
const footer = document.createElement("footer");
footer.innerHTML = "<p style='text-align:center; padding:20px; color:turquoise;'>© 2025 Go Mile Services — Serving with Gratitude 💖</p>";
document.body.appendChild(footer);