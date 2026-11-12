// Portfolio Website JavaScript
// Updated with Sudheernaidu Doppalapudi's resume information

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

// Download Resume functionality
function setupResumeDownload() {
    // Create download button
    const resumeBtn = document.createElement('a');
    resumeBtn.href = 'resume.docx';
    resumeBtn.download = 'Sudheernaidu_Doppalapudi_Resume.docx';
    resumeBtn.className = 'btn btn-primary resume-download';
    resumeBtn.innerHTML = '<i class="fas fa-download"></i> Download Resume';
    resumeBtn.style.marginLeft = '1rem';

    // Add to hero buttons
    const heroButtons = document.querySelector('.hero-buttons');
    heroButtons.appendChild(resumeBtn);
}

// Add sample projects for demo
const projectsGrid = document.querySelector('.projects-grid');
const sampleProjects = [
    {
        title: 'Oracle Database Migration',
        description: 'Migrated complex legacy systems from Oracle 11g to Oracle 12c, implementing data validation procedures and optimizing query performance for 500+ concurrent users.',
        category: 'web',
        image: 'https://images.unsplash.com/photo-1560622013-1423b2c23b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        link: '#'
    },
    {
        title: 'AWS Cloud Infrastructure',
        description: 'Designed and implemented scalable cloud infrastructure using AWS services including EC2, RDS, S3, and CloudWatch. Set up automated deployments and monitoring systems for 24/7 operations.',
        category: 'mobile',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        link: '#'
    },
    {
        title: 'ITIL Support System',
        description: 'Implemented comprehensive ITIL-based incident management system with automated workflows, SLA monitoring, and ticket routing. Reduced response times by 40% and improved customer satisfaction.',
        category: 'design',
        image: 'https://images.unsplash.com/photo-1516321318789-4a6b3e2b5b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        link: '#'
    },
    {
        title: 'ServiceNow Integration',
        description: 'Developed custom ServiceNow workflows for incident management, KB article creation, and SOP implementation. Integrated with existing BMC Remedy systems for seamless operations.',
        category: 'web',
        image: 'https://images.unsplash.com/photo-1555066931-5ae4dc1c7f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        link: '#'
    },
    {
        title: 'Virtualization Platform',
        description: 'Managed virtualization platforms including OpenStack, XCP-NG, and VMware for 1000+ virtual machines. Implemented monitoring, backup, and disaster recovery procedures.',
        category: 'mobile',
        image: 'https://images.unsplash.com/photo-1581091014194-9e993c18634f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        link: '#'
    },
    {
        title: 'Monitoring & Alert System',
        description: 'Built comprehensive monitoring system using Grafana, Datadog, and Prometheus for real-time performance tracking. Implemented automated alerting and reporting for operations teams.',
        category: 'design',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
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
                        <i class="fas fa-external-link-alt"></i> View Details
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
        console.log('Name:', name.value);
        console.log('Email:', email.value);
        console.log('Subject:', subject.value);
        console.log('Message:', message.value);
        alert('Thank you for your message! I will get back to you soon.');
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
                card.classList.add('fade-in');
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

// Initialize everything when page loads
window.addEventListener('load', function() {
    setupResumeDownload();
    console.log('Sudheernaidu Portfolio initialized successfully!');
});