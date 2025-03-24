// Smooth scroll to menu
function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formResponse").textContent = "Thank you! We'll get back to you soon.";
});

// Scroll animations for sections
document.addEventListener("DOMContentLoaded", function () {
    let elementsToReveal = document.querySelectorAll(".reveal");

    function revealElements() {
        let windowHeight = window.innerHeight;
        elementsToReveal.forEach((element) => {
            let elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements(); // Run once to show elements already in view
});