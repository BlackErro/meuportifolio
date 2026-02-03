document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    mobileMenu.addEventListener('click', () => {
        // Toggle Nav
        navList.classList.toggle('active');
        
        // Burger Animation
        mobileMenu.classList.toggle('toggle');
    });

    // Close Mobile Menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                mobileMenu.classList.remove('toggle');
            }
        });
    });

    // Form Submission Handling (Demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Enviando...';
            
            // Simulate sending
            setTimeout(() => {
                alert('Obrigado pela sua mensagem! Entrarei em contato em breve.');
                contactForm.reset();
                btn.innerText = originalText;
            }, 1500);
        });
    }

    // Scroll Effect for Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });
});
