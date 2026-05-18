// Smooth navigation active state
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});

// Animate elements on scroll with staggered effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
        }
    });
}, observerOptions);

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state styling to nav links
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: #00ff88;
        font-weight: bold;
        border-bottom: 2px solid #00ff88;
        padding-bottom: 2px;
        text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
    }
`;
document.head.appendChild(style);

// Add glow effect to buttons on hover
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.8)';
    });
    btn.addEventListener('mouseleave', function() {
        if (this.classList.contains('btn-primary')) {
            this.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.3)';
        } else {
            this.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.2)';
        }
    });
});

// Add scroll-triggered glow effect for CV section
const cvSection = document.querySelector('.cv-download-section');
if (cvSection) {
    const cvObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    cvObserver.observe(cvSection);
}

// Add pulse animation (already in CSS, but can enhance with JS)
const pulseStyle = document.createElement('style');
// Animation defined in CSS now
