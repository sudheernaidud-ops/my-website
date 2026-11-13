const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function toggleTheme() {
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

if (localStorage.getItem('theme') === 'dark') {
    html.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navbar = document.querySelector('.navbar');
                const offset = navbar ? navbar.offsetHeight : 70;
                const topPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: topPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

function updateActiveNav() {
    const scrollPosition = window.scrollY + 120;
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === '#' + sectionId) {
                    item.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

const filterButtons = document.querySelectorAll('.filter-btn');
const experienceCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const selectedFilter = this.getAttribute('data-filter');

        experienceCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (selectedFilter === 'all' || cardCategory === selectedFilter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const contactForm = document.getElementById('contact-form');

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
    clearError(input);
    const errorEl = document.createElement('small');
    errorEl.className = 'error-message';
    errorEl.style.color = '#ef4444';
    errorEl.style.display = 'block';
    errorEl.style.marginTop = '0.25rem';
    errorEl.textContent = message;
    input.parentElement.appendChild(errorEl);
}

function clearError(input) {
    const existing = input.parentElement.querySelector('.error-message');
    if (existing) existing.remove();
}

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        let isValid = true;

        [name, email, subject, message].forEach(el => {
            if (el) clearError(el);
        });

        if (name && !name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        }

        if (email && !email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (email && !isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }

        if (subject && !subject.value.trim()) {
            showError(subject, 'Subject is required');
            isValid = false;
        }

        if (message && !message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        }

        if (isValid) {
            alert('Thank you for your message! Sudheernaidu will get back to you soon.');
            contactForm.reset();
        }
    });
}
