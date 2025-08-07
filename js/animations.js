// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('slide-up');
    }
    
    // Service cards animations
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
    });
    
    // About section animation
    const aboutSection = document.querySelector('.about-container');
    if (aboutSection) {
        aboutSection.classList.add('slide-left');
    }
    
    // Gallery animation
    const gallery = document.querySelector('.gallery-container');
    if (gallery) {
        gallery.classList.add('slide-right');
    }
    
    // Testimonial animation
    const testimonials = document.querySelector('.testimonial-slider');
    if (testimonials) {
        testimonials.classList.add('scale-in');
    }
    
    // Booking section animation
    const booking = document.querySelector('.booking-container');
    if (booking) {
        booking.classList.add('fade-in');
    }
    
    // Contact cards animations
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('bounce-in');
    });
    
    // Floating elements animation
    const floatingElements = document.querySelectorAll('.service-icon, .contact-card i');
    floatingElements.forEach(element => {
        element.classList.add('float');
    });
    
    // Hover animations for buttons
    const buttons = document.querySelectorAll('.btn, .nav-cta, .about-cta, .service-link, .submit-btn');
    buttons.forEach(button => {
        button.classList.add('hover-grow');
    });
    
    // Hover animations for cards
    const cards = document.querySelectorAll('.service-card, .contact-card');
    cards.forEach(card => {
        card.classList.add('hover-shadow');
    });
    
    // Hover animations for links
    const links = document.querySelectorAll('a:not(.btn)');
    links.forEach(link => {
        link.classList.add('hover-underline');
    });
    
    // Pulse animation for CTA buttons
    const ctas = document.querySelectorAll('.hero-cta, .nav-cta');
    ctas.forEach(cta => {
        cta.classList.add('pulse');
    });
});