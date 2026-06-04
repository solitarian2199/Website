const pageLoader = document.getElementById('pageLoader');
const scrollProgress = document.getElementById('scrollProgress');
const counters = document.querySelectorAll('.metric-number');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

function hideLoader() {
    if (!pageLoader) return;
    pageLoader.classList.add('loaded');
}

function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function getScrollHeight() {
    const docEl = document.documentElement;
    const body = document.body;
    return Math.max(docEl.scrollHeight, body.scrollHeight) - window.innerHeight;
}

function updateScrollProgress() {
    if (!scrollProgress) return;
    const scrollTop = getScrollTop();
    const scrollHeight = getScrollHeight();
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
}

window.addEventListener('load', () => {
    setTimeout(hideLoader, 800);
    animateCounters();
    updateScrollProgress();
});

window.addEventListener('scroll', updateScrollProgress);
window.addEventListener('resize', () => {
    updateScrollProgress();
    if (window.innerWidth > 680 && navLinks) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
    }
});

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let current = 0;
        const duration = 1700;
        const step = Math.max(Math.floor(duration / target), 20);

        const update = () => {
            current += Math.ceil(target / (duration / step));
            if (current >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = current;
                requestAnimationFrame(update);
            }
        };
        update();
    });
}

const animatedSections = document.querySelectorAll('.section-split, .cards-section, .ecosystem-section, .showcase-section, .news-section, .join-section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

animatedSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});
