document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    // Intersection Observer for scroll-triggered reveal animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Unobserve to animate only once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Smooth scrolling for anchor links (fallback/enhancement to CSS scroll-behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
