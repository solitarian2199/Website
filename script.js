const pageLoader = document.getElementById('pageLoader');
const scrollProgress = document.getElementById('scrollProgress');
const counters = document.querySelectorAll('.metric-number');

function hideLoader() {
    if (!pageLoader) return;
    pageLoader.classList.add('loaded');
}

window.addEventListener('load', () => {
    setTimeout(hideLoader, 800);
    animateCounters();
});

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
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
