// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav ul li a');
    const themeToggle = document.querySelector('.theme-toggle');
    const skillBars = document.querySelectorAll('.skill-progress');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const backToTop = document.querySelector('.back-to-top');
    const typingText = document.querySelector('.typing-text');
    const contactForm = document.getElementById('contactForm');
    
    // Typing effect for hero section
    if (typingText) {
        const roles = ['Web Developer', 'UI/UX Designer', 'Frontend Developer', 'Freelancer'];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 200;
        
        function typeEffect() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                // Remove a character
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = 100;
            } else {
                // Add a character
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 200;
            }
            
            // If word is complete, start deleting after delay
            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typingDelay = 1000; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length; // Move to next word
                typingDelay = 500; // Pause before typing next word
            }
            
            setTimeout(typeEffect, typingDelay);
        }
        
        // Start the typing effect
        setTimeout(typeEffect, 1000);
    }
    
    // Sticky header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
            backToTop.classList.add('active');
        } else {
            header.classList.remove('sticky');
            backToTop.classList.remove('active');
        }
        
        // Animate skill bars when in viewport
        animateSkillBars();
        
        // Highlight active section in navigation
        highlightActiveSection();
    });
    
    // Mobile navigation toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Close mobile nav when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
            
            // Save theme preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
        });
        
        // Check for saved theme preference
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        if (savedDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        }
    }
    
    // Tab functionality
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const tabContent = this.closest('section').querySelector('.tab-pane#' + target) || 
                               document.querySelector('.tab-pane#' + target);
            
            // Remove active class from all buttons and panes
            tabBtns.forEach(btn => {
                if (btn.getAttribute('data-target') === target || 
                    btn.closest('section') === this.closest('section')) {
                    btn.classList.remove('active');
                }
            });
            
            const tabPanes = tabContent.parentElement.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            tabContent.classList.add('active');
        });
    });
    
    // Project filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all filter buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter projects
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || filter === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Animate skill bars when in viewport
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const progress = bar.getAttribute('data-progress');
            
            if (barTop < window.innerHeight - 100) {
                bar.style.width = progress + '%';
            }
        });
    }
    
    // Initialize skill bars animation
    setTimeout(animateSkillBars, 500);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active section in navigation
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.desktop-nav ul li a, .mobile-nav ul li a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Testimonial slider
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const testimonialDots = document.querySelector('.testimonial-dots');
    let currentSlide = 0;
    
    // Create dots for testimonial slider
    if (testimonialItems.length > 0 && testimonialDots) {
        testimonialItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            
            testimonialDots.appendChild(dot);
        });
    }
    
    // Function to show a specific slide
    function goToSlide(index) {
        testimonialItems.forEach((item, i) => {
            item.style.transform = `translateX(${100 * (i - index)}%)`;
            
            // Update active dot
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        });
        
        currentSlide = index;
    }
    
    // Initialize testimonial slider
    if (testimonialItems.length > 0) {
        testimonialItems.forEach((item, index) => {
            item.style.transform = `translateX(${100 * index}%)`;
        });
        
        // Auto slide
        setInterval(() => {
            if (testimonialItems.length > 1) {
                currentSlide = (currentSlide + 1) % testimonialItems.length;
                goToSlide(currentSlide);
            }
        }, 5000);
    }
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // AOS (Animate On Scroll) initialization
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // Smooth parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        const heroText = document.querySelector('.hero-text');
        
        if (heroImage && heroText) {
            heroImage.style.transform = `translateY(${scrolled * 0.4}px)`;
            heroText.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });

    // Enhanced skill bars animation
    const animateSkills = () => {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        skillBars.forEach(bar => {
            const progress = bar.querySelector('.skill-progress');
            const percentage = progress.getAttribute('data-progress');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        progress.style.width = `${percentage}%`;
                        progress.style.background = `linear-gradient(90deg, 
                            var(--primary-color) 0%, 
                            var(--secondary-color) 50%, 
                            var(--primary-color) 100%)`;
                        progress.style.backgroundSize = '200% 100%';
                        observer.unobserve(bar);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(bar);
        });
    };

    // Smooth scroll with progress indicator
    const initSmoothScroll = () => {
        const progressIndicator = document.createElement('div');
        progressIndicator.className = 'scroll-progress';
        document.body.appendChild(progressIndicator);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressIndicator.style.width = `${scrolled}%`;
        });
    };

    // Enhanced project cards with tilt effect
    const initTiltEffect = () => {
        const cards = document.querySelectorAll('.project-item');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    };

    // Enhanced testimonial slider with touch support
    const enhanceTestimonialSlider = () => {
        const slider = document.querySelector('.testimonial-slider');
        let startX, isDragging = false;
        
        if (slider) {
            slider.addEventListener('touchstart', (e) => {
                startX = e.touches[0].pageX;
                isDragging = true;
            });
            
            slider.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                const currentX = e.touches[0].pageX;
                const diff = startX - currentX;
                
                if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                    isDragging = false;
                }
            });
            
            slider.addEventListener('touchend', () => {
                isDragging = false;
            });
        }
    };

    // Animated counter for statistics
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    };

    // Initialize enhanced features
    initSmoothScroll();
    animateSkills();
    initTiltEffect();
    enhanceTestimonialSlider();
    animateCounters();

    // Add smooth transitions between sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(30px)';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(section);
    });

    // Background Image Rotation
    function initBackgroundRotation() {
        const backgrounds = document.querySelectorAll('.bg-image');
        let currentBg = 0;
        
        // Make sure the first background is active immediately
        backgrounds[0].classList.add('active');
        
        function rotateBackground() {
            backgrounds[currentBg].classList.remove('active');
            currentBg = (currentBg + 1) % backgrounds.length;
            backgrounds[currentBg].classList.add('active');
        }

        // Change background every 5 seconds
        setInterval(rotateBackground, 5000);
    }

    // Initialize when DOM is loaded
    initBackgroundRotation();
}); 