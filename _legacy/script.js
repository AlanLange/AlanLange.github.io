 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#0a0b0e',
                        secondary: '#151821',
                        tertiary: '#1e2532',
                        accent: '#00d4ff',
                        'accent-hover': '#00b8e6',
                        muted: '#6b7280',
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.6s ease-out',
                        'slide-up': 'slideUp 0.8s ease-out',
                        'float': 'float 6s ease-in-out infinite',
                    }
                }
            },
            darkMode: 'class',
        }
 
 // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-blur');
            } else {
                navbar.classList.remove('nav-blur');
            }
        });

        // Enhanced carousel function
        function setupCarousel(slideSelector, prevButtonId, nextButtonId, dotSelector) {
            const slides = Array.from(document.querySelectorAll(slideSelector));
            const dots = Array.from(document.querySelectorAll(dotSelector));
            let current = 0;

            const showSlide = (index) => {
                slides.forEach((slide, i) => {
                    slide.classList.remove('active', 'inactive');
                    if (i === index) {
                        slide.classList.add('active');
                    } else {
                        slide.classList.add('inactive');
                    }
                });

                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.remove('bg-white/30');
                        dot.classList.add('bg-accent');
                    } else {
                        dot.classList.remove('bg-accent');
                        dot.classList.add('bg-white/30');
                    }
                });
            };

            const nextSlide = () => {
                current = (current + 1) % slides.length;
                showSlide(current);
            };

            const prevSlide = () => {
                current = (current - 1 + slides.length) % slides.length;
                showSlide(current);
            };

            document.getElementById(prevButtonId)?.addEventListener('click', prevSlide);
            document.getElementById(nextButtonId)?.addEventListener('click', nextSlide);

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    current = index;
                    showSlide(current);
                });
            });

            // Auto-play carousel
            setInterval(nextSlide, 5000);

            showSlide(current);
        }

        // Initialize carousels
        setupCarousel('.gp-slide', 'gpPrev', 'gpNext', '.gp-dot');
        setupCarousel('.barber-slide', 'barberPrev', 'barberNext', '.barber-dot');

        // Contact form handling
        const contactForm = document.getElementById('contactForm');
        const formStatus = document.getElementById('formStatus');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    formStatus.textContent = `Thanks for your message, ${name}! I'll get back to you soon.`;
                    formStatus.classList.remove('hidden', 'bg-red-500/10', 'text-red-400');
                    formStatus.classList.add('bg-green-500/10', 'text-green-400');
                    contactForm.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                formStatus.textContent = 'Something went wrong. Please try again or contact me directly.';
                formStatus.classList.remove('hidden', 'bg-green-500/10', 'text-green-400');
                formStatus.classList.add('bg-red-500/10', 'text-red-400');
            })
            .finally(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                }, 5000);
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.skill-card, .project-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        