// Portfolio Website JavaScript

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function toggleTheme() {
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

themeToggle.addEventListener('click', toggleTheme);

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
});

// Active navigation state indicator
function updateActiveNav() {
    let scrollPosition = window.scrollY + 100;
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').substring(1) === sectionId) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Add sample projects for demo
const projectsGrid = document.querySelector('.projects-grid');
const sampleProjects = [
    {
        title: 'E-commerce Website',
        description: 'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
        category: 'web',
        image: 'https://images.unsplash.com/photo-1556742049-0c6b599c8a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        link: '#'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team assignments, and progress tracking.',
        category: 'mobile',
        image: 'https://images.unsplash.com/photo-1611224923853-80b654b08484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        link: '#'
    },
    {
        title: 'Dashboard UI Kit',
        description: 'A comprehensive dashboard UI kit with charts, tables, and interactive components for data visualization.',
        category: 'design',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        link: '#'
    },
    {
        title: 'Weather App',
        description: 'A clean and intuitive weather application with location-based forecasts, current conditions, and 7-day outlook.',
        category: 'mobile',
        image: 'https://images.unsplash.com/photo-1504608524841-612d07931b90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        link: '#'
    },
    {
        title: 'Portfolio Template',
        description: 'A modern portfolio template with smooth animations, dark mode support, and responsive design.',
        category: 'design',
        image: 'https://images.unsplash.com/photo-1498049560571-3b5ce832e686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        link: '#'
    },
    {
        title: 'API Service Backend',
        description: 'A robust REST API service with authentication, data validation, and comprehensive error handling for scalable applications.',
        category: 'web',
        image: 'https://images.unsplash.com/photo-1555066931-5ae4dc1c7f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        link: '#'
    }
];

function createProjectCard(project) {
    return `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.link}" class="project-link">
                        <i class="fas fa-external-link-alt"></i> View Project
                    </a>
                </div>
            </div>
        </div>
    `;
}

projectsGrid.innerHTML = sampleProjects.map(createProjectCard).join('');

// Form validation for contact form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    let isValid = true;

    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    }

    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }

    if (!subject.value.trim()) {
        showError(subject, 'Subject is required');
        isValid = false;
    }

    if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
    }

    if (isValid) {
        console.log('Form submitted successfully');
        contactForm.reset();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    const errorSpan = input.parentNode.querySelector('.error-message');
    errorSpan.textContent = message;
    errorSpan.classList.add('show');
    input.focus();
    setTimeout(() => {
        errorSpan.classList.remove('show');
    }, 3000);
}

// Filter projects functionality
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Window scroll event listener for active navigation
window.addEventListener('scroll', updateActiveNav);

// Initialize animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-category, .about-content, .contact-content').forEach(el => {
    observer.observe(el);
});

console.log('Portfolio app initialized successfully!');