const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const contactForm = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

// Set current year in the footer
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.innerHTML = `&copy; ${currentYear} Butho Mthethwa. All rights reserved.`;

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            thankYouMessage.style.display = 'block';
            setTimeout(() => {
                thankYouMessage.style.display = 'none';
            }, 120000); // 120000 milliseconds = 2 minutes
        } else {
            alert('There was an issue with your submission. Please try again.');
        }
    }).catch(error => {
        alert('There was an error. Please try again.');
    });
    contactForm.reset();
});


// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


