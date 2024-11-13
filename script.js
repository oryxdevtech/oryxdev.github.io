// Scroll animation trigger
const scrollTriggers = document.querySelectorAll('.scroll-trigger');

window.addEventListener('scroll', () => {
    scrollTriggers.forEach(trigger => {
        const triggerTop = trigger.offsetTop;
        const triggerHeight = trigger.offsetHeight;
        const viewportTop = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (viewportTop + viewportHeight > triggerTop && viewportTop < triggerTop + triggerHeight) {
            trigger.classList.add('animate');
        } else {
            trigger.classList.remove('animate');
        }
    });
});

// Animation on click from navigation
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            targetSection.classList.add('animate');
        }
    });
});

// Learn More button functionality
const learnMoreBtn = document.getElementById('learnMoreBtn');
const aboutSection = document.getElementById('about');

learnMoreBtn.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    aboutSection.classList.add('animate');
});

// Navigate to a website
const navigateBtn = document.getElementById('navigateBtn');

navigateBtn.addEventListener('click', () => {
    window.open('https://www.smokadem.com', "_blank");
});