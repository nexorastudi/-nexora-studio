// Gestion du défilement de la Navbar
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        nav.style.padding = '10px 0';
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        nav.style.padding = '20px 0';
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        nav.style.boxShadow = 'none';
    }
});

// Animation d'apparition au scroll (simple)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.expertise-card, .portfolio-item, .about-info').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});