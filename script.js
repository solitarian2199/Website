const pageLoader = document.getElementById('pageLoader');
const scrollProgress = document.getElementById('scrollProgress');
const valueButtons = document.querySelectorAll('.value-pill');
const valueDetail = document.getElementById('valueDetail');
const sectorCards = document.querySelectorAll('.sector-card');
const sectorDetail = document.getElementById('sectorDetail');
const counters = document.querySelectorAll('.metric-number');

const values = {
    'Innovation Leadership': 'Aureon champions innovation through scalable technology platforms, research, and premium digital ecosystems.',
    'Strategic Self-Reliance': 'We invest in sovereign capabilities that strengthen India’s long-term independence and strategic resilience.',
    'Sustainable Stewardship': 'Every project is designed for environmental responsibility, economic durability, and community trust.',
    'Governance with Integrity': 'Transparent governance, ethical execution, and disciplined performance are core to our culture.',
    'National Alignment': 'Our actions are aligned with India’s growth priorities and national development objectives.'
};

const sectors = {
    'IT & Digital Media': 'Aureon builds future-ready digital platforms, media ecosystems and enterprise-grade technology products.',
    'Oil & Gas': 'Focused upstream and infrastructure investments that strengthen energy security and optimized supply chains.',
    'Renewable Energy': 'High-impact renewables projects drive cleaner power and help India meet long-term sustainability goals.',
    'Research & Innovation': 'A dedicated innovation engine translating advanced research into commercially viable solutions.'
};

function removeLoader() {
    if (!pageLoader) return;
    pageLoader.classList.add('loaded');
}

window.addEventListener('load', () => {
    setTimeout(removeLoader, 900);
    animateCounters();
});

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
});

valueButtons.forEach(button => {
    button.addEventListener('click', () => {
        valueButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        valueDetail.textContent = values[button.dataset.value] || 'Select a pillar to see the core value.';
    });
});

sectorCards.forEach(button => {
    button.addEventListener('click', () => {
        sectorCards.forEach(card => card.classList.remove('active'));
        button.classList.add('active');
        sectorDetail.innerHTML = `
            <p class="detail-title">${button.dataset.detail}</p>
            <p class="detail-copy">${sectors[button.dataset.detail]}</p>
        `;
    });
});

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let current = 0;
        const duration = 1800;
        const stepTime = Math.max(Math.floor(duration / target), 20);

        const increment = () => {
            current += Math.ceil(target / (duration / stepTime));
            if (current >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = current;
                requestAnimationFrame(increment);
            }
        };

        increment();
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0px)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section, .showcase-card, .leadership-grid, .timeline-track, .roadmap-grid').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(24px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});
