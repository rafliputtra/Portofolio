// main.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Toggle active class for navigation links based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100; // Offset for better accuracy

    sections.forEach((section, index) => {
        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach(link => link.classList.remove('text-yellow-400'));
            navLinks[index].classList.add('text-yellow-400');
        }
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = form.querySelector('input[placeholder="Your Name"]');
    const email = form.querySelector('input[placeholder="Your Email"]');
    const subject = form.querySelector('input[placeholder="Subject"]');
    const message = form.querySelector('textarea[placeholder="Message"]');

    if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email.value.trim())) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Message sent successfully!');
    form.reset();
});

// Email validation helper function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
