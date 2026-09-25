const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

const year = document.querySelector('#year');

if (year) {
    year.textContent = new Date().getFullYear();
}

const contactForm = document.querySelector('#contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const message = document.querySelector('#formMessage');

        message.textContent = `Dziękujemy, ${name}! Wiadomość została przygotowana do wysłania.`;

        contactForm.reset();
    });
}