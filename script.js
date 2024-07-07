        // Carousel functionality
        const carousel = document.getElementById('features-carousel');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        let currentSlide = 0;

        function showSlide(index) {
            const slides = carousel.children;
            if (index >= slides.length) index = 0;
            if (index < 0) index = slides.length - 1;
            carousel.style.transform = `translateX(-${index * 100}%)`;
            currentSlide = index;
        }

        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

        // Image hover effect
        const images = document.querySelectorAll('.image-container img');
        images.forEach(img => {
            img.addEventListener('mouseover', () => {
                img.style.transform = 'scale(1.05)';
                img.style.transition = 'transform 0.3s ease';
            });
            img.addEventListener('mouseout', () => {
                img.style.transform = 'scale(1)';
            });
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Demo button interaction
        const demoButton = document.getElementById('demo-button');
        demoButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Thank you for your interest! A representative will contact you shortly to schedule a demo.');
        });

        // Lazy loading for images
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        }, observerOptions);

        document.querySelectorAll('img[data-src]').forEach(img => {
            observer.observe(img);
        });
    