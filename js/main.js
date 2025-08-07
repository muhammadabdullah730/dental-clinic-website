document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky navigation on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
        scrollTopBtn.classList.toggle('active', window.scrollY > 500);
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Before/After slider
    const beforeAfter = document.querySelector('.before-after');
    if (beforeAfter) {
        const sliderHandle = beforeAfter.querySelector('.slider-handle');
        const before = beforeAfter.querySelector('.before');
        let isDragging = false;
        
        function updateSliderPosition(clientX) {
            const rect = beforeAfter.getBoundingClientRect();
            let position = (clientX - rect.left) / rect.width;
            
            // Constrain between 0 and 1
            position = Math.max(0, Math.min(1, position));
            
            const percent = position * 100;
            before.style.width = `${percent}%`;
            sliderHandle.style.left = `${percent}%`;
        }
        
        sliderHandle.addEventListener('mousedown', function(e) {
            isDragging = true;
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            updateSliderPosition(e.clientX);
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        // Touch support
        sliderHandle.addEventListener('touchstart', function(e) {
            isDragging = true;
            e.preventDefault();
        });
        
        document.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            updateSliderPosition(e.touches[0].clientX);
        });
        
        document.addEventListener('touchend', function() {
            isDragging = false;
        });
    }
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    function nextTestimonial() {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }
    
    function prevTestimonial() {
        let prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(prevIndex);
    }
    
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextTestimonial);
        prevBtn.addEventListener('click', prevTestimonial);
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
    
    // Auto-rotate testimonials
    let testimonialInterval = setInterval(nextTestimonial, 5000);
    
    // Pause on hover
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        
        testimonialSlider.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(nextTestimonial, 5000);
        });
    }
    
    // Form validation
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = this.querySelector('#name');
            const email = this.querySelector('#email');
            const phone = this.querySelector('#phone');
            const service = this.querySelector('#service');
            const date = this.querySelector('#date');
            
            let isValid = true;
            
            if (!name.value.trim()) {
                name.classList.add('error');
                isValid = false;
            } else {
                name.classList.remove('error');
            }
            
            if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                email.classList.add('error');
                isValid = false;
            } else {
                email.classList.remove('error');
            }
            
            if (!phone.value.trim()) {
                phone.classList.add('error');
                isValid = false;
            } else {
                phone.classList.remove('error');
            }
            
            if (!service.value) {
                service.classList.add('error');
                isValid = false;
            } else {
                service.classList.remove('error');
            }
            
            if (!date.value) {
                date.classList.add('error');
                isValid = false;
            } else {
                date.classList.remove('error');
            }
            
            if (isValid) {
                // Form is valid - you would typically send to server here
                alert('Appointment booked successfully! We will contact you shortly to confirm.');
                this.reset();
            } else {
                // Add shake animation to form
                this.classList.add('shake');
                setTimeout(() => {
                    this.classList.remove('shake');
                }, 500);
            }
        });
    }
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .about-container, .gallery-container, .testimonial-slider, .booking-container, .contact-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});