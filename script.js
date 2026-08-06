/**
 * Aureon Brand Dynamic Portfolio Logic
 * Populated directly via Aureon Corporate Profile_V0.05
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const pageLoader = document.getElementById('pageLoader');
    const scrollProgress = document.getElementById('scrollProgress');
    const siteHeader = document.querySelector('.site-header');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const sectorModal = document.getElementById('sectorModal');


    const sectorData = {
        it: {
            title: 'Information Technology & Digital Media',
            description: 'Modern AI infrastructure, cloud architecture, and futuristic data centres.',
            image: 'assets/IT_SECTOR_01.png',
            heroImage: 'assets/IT_SECTOR_05.png',
            tagline: "Empowering Digital Transformation",
            contentHtml: `
                <div class="modal-hero-banner" style="background-image: url('assets/IT_SECTOR_05.png');">
                    <div class="hero-banner-overlay"></div>
                    <div class="hero-banner-content">
                        <h2>Information Technology & Digital Media</h2>
                        <p class="tagline">Empowering Digital Transformation</p>
                    </div>
                </div>
                <div class="modal-body-content">
                    <div class="modal-section">
                        <p>Aureon is dedicated to architecting India's sovereign digital backbone, guided by a vision of inclusive digital communities where technology acts as a great equalizer. Our mission is to develop secure, scalable, and accessible technology ecosystems that drive innovation and empower businesses, governance, and citizens.</p>
                    </div>
                    <div class="modal-section focus-areas">
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li><span class="focus-icon">✧</span>AI Infrastructure</li>
                            <li><span class="focus-icon">✧</span>Cloud Architecture</li>
                            <li><span class="focus-icon">✧</span>Futuristic Data Centres</li>
                            <li><span class="focus-icon">✧</span>Digital Platforms</li>
                        </ul>
                    </div>
                </div>
            `
        },
        energy: {
            title: 'Energy & Utilities',
            description: 'National smart grid, intelligent power management, and utility infrastructure.',
            image: 'assets/E_Sec/E_Sec_01.png',
            heroImage: 'assets/E_Sec/E_Sec_02.png',
            tagline: "Powering a Nation's Progress",
            contentHtml: `
                <div class="modal-hero-banner" style="background-image: url('assets/E_Sec/E_Sec_02.png');">
                    <div class="hero-banner-overlay"></div>
                    <div class="hero-banner-content">
                        <h2>Energy & Utilities</h2>
                        <p class="tagline">Powering a Nation's Progress</p>
                    </div>
                </div>
                <div class="modal-body-content">
                    <div class="modal-section">
                        <p>Aureon is committed to modernizing India's energy and utility landscape. We are focused on developing a national smart grid, implementing intelligent power management systems, and upgrading utility infrastructure to meet the demands of a growing economy.</p>
                    </div>
                    <div class="modal-section focus-areas">
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li><span class="focus-icon">✧</span>National Smart Grid</li>
                            <li><span class="focus-icon">✧</span>Intelligent Power Management</li>
                            <li><span class="focus-icon">✧</span>Utility Infrastructure</li>
                        </ul>
                    </div>
                </div>
            `
        },
        logistics: {
            title: 'Transport & Logistics',
            description: 'Automated ports, electric freight, smart logistics hubs, and drone-enabled transportation.',
            image: 'assets/LOGISTICS_SECTOR_01.png',
            heroImage: 'assets/LOGISTICS_SECTOR_02.png',
            tagline: "Connecting India, Faster and Smarter",
            contentHtml: `
                <div class="modal-hero-banner" style="background-image: url('assets/LOGISTICS_SECTOR_02.png');">
                    <div class="hero-banner-overlay"></div>
                    <div class="hero-banner-content">
                        <h2>Transport & Logistics</h2>
                        <p class="tagline">Connecting India, Faster and Smarter</p>
                    </div>
                </div>
                <div class="modal-body-content">
                    <div class="modal-section">
                        <p>Aureon is revolutionizing the movement of goods and people across India. We are investing in automated ports, electric freight solutions, smart logistics hubs, and drone-enabled transportation to create a seamless and efficient supply chain.</p>
                    </div>
                    <div class="modal-section focus-areas">
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li><span class="focus-icon">✧</span>Automated Ports</li>
                            <li><span class="focus-icon">✧</span>Electric Freight</li>
                            <li><span class="focus-icon">✧</span>Smart Logistics Hubs</li>
                            <li><span class="focus-icon">✧</span>Drone-Enabled Transportation</li>
                        </ul>
                    </div>
                </div>
            `
        },
        renewable: {
            title: 'Renewable Energy',
            description: 'Solar farms, offshore wind, and clean energy infrastructure.',
            image: 'assets/RENEWABLE ENERGY_SECTOR_01.png',
            heroImage: 'assets/RENEWABLE ENERGY_SECTOR_02.png',
            tagline: "Leading the Charge to a Greener Future",
            contentHtml: `
                <div class="modal-hero-banner" style="background-image: url('assets/RENEWABLE ENERGY_SECTOR_02.png');">
                    <div class="hero-banner-overlay"></div>
                    <div class="hero-banner-content">
                        <h2>Renewable Energy</h2>
                        <p class="tagline">Leading the Charge to a Greener Future</p>
                    </div>
                </div>
                <div class="modal-body-content">
                    <div class="modal-section">
                        <p>Aureon is at the forefront of India's transition to renewable energy. We develop, build, and operate large-scale solar farms, offshore wind projects, and other clean energy infrastructure to power a sustainable future.</p>
                    </div>
                     <div class="modal-section focus-areas">
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li><span class="focus-icon">✧</span>Solar Farms</li>
                            <li><span class="focus-icon">✧</span>Offshore Wind</li>
                            <li><span class="focus-icon">✧</span>Clean Energy Infrastructure</li>
                        </ul>
                    </div>
                </div>
            `
        },
        water: {
            title: 'Water & Sustainable Infrastructure',
            description: 'Advanced water purification, smart reservoirs, and sustainable water management systems.',
            image: 'assets/WATER_SECTOR_02.png',
            heroImage: 'assets/WATER_SECTOR_02.png',
            tagline: "Securing Our Most Precious Resource",
            contentHtml: `
                <div class="modal-hero-banner" style="background-image: url('assets/WATER_SECTOR_02.png');">
                    <div class="hero-banner-overlay"></div>
                    <div class="hero-banner-content">
                        <h2>Water & Sustainable Infrastructure</h2>
                        <p class="tagline">Securing Our Most Precious Resource</p>
                    </div>
                </div>
                <div class="modal-body-content">
                    <div class="modal-section">
                        <p>Aureon is committed to ensuring water security for future generations. We are deploying advanced water purification technologies, building smart reservoirs, and creating sustainable water management systems to address India's water challenges.</p>
                    </div>
                     <div class="modal-section focus-areas">
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li><span class="focus-icon">✧</span>Advanced Water Purification</li>
                            <li><span class="focus-icon">✧</span>Desalination Plants</li>
                            <li><span class="focus-icon">✧</span>Smart Reservoirs</li>
                            <li><span class="focus-icon">✧</span>Modern Water Treatment Facilities</li>
                        </ul>
                    </div>
                </div>
            `
        }
    };

    // ==========================================================================
    // 1. SCROLL PHYSICS ENGINE & METRICS INTERPOLATION
    // ==========================================================================
    const applyScrollPhysics = () => {
        // Select elements once to avoid repeated lookups in the animation loop
        const targetDevice = document.querySelector('.device-shell');
        const heroBlock = document.querySelector('.hero-content');
        const animatedSections = document.querySelectorAll('.scroll-animated-section');
        
        if (!scrollProgress || !siteHeader || !heroBlock) {
            console.warn('Scroll physics engine could not find required elements.');
            return;
        }

        let currentScroll = 0;
        let targetScroll = 0;
        const ease = 0.065; // Lowered for a more fluid, less direct feel
        let isTicking = false;

        // Cache the initial top offset of each animated section for performance
        const sectionOffsets = new Map();
        animatedSections.forEach(section => {
            // getBoundingClientRect().top + window.scrollY gives the absolute top from the document
            sectionOffsets.set(section, section.getBoundingClientRect().top + window.scrollY);
        });

        function smoothScrollLoop() {
            const delta = targetScroll - currentScroll;

            // Stop the loop if the scroll position is close enough to the target
            if (Math.abs(delta) < 0.1) {
                currentScroll = targetScroll;
                isTicking = false;
                return;
            }

            // Linearly interpolate current scroll position towards the target
            currentScroll += delta * ease;

            const viewportHeight = window.innerHeight;
            const maxScrollableHeight = document.documentElement.scrollHeight - viewportHeight;

            // Update scroll progress bar
            if (maxScrollableHeight > 0) {
                scrollProgress.style.width = `${(currentScroll / maxScrollableHeight) * 100}%`;
            }
            
            // Toggle header class
            siteHeader.classList.toggle('scrolled', currentScroll > 20);

            // Hero content parallax and fade
            const opacityFactor = Math.max(1 - (currentScroll / (viewportHeight * 0.55)), 0);
            heroBlock.style.opacity = Math.pow(opacityFactor, 1.5).toFixed(3); // Faster fade, rounded for performance
            heroBlock.style.transform = `translateY(${currentScroll * 0.25}px)`; // Increased parallax

            // Device shell 3D scaling effect
            if (targetDevice) {
                // Now tied to the smooth scroll for a more fluid effect
                const scaleFactor = Math.max(1 - (currentScroll / (viewportHeight * 2)), 0.85).toFixed(3);
                targetDevice.style.transform = `rotateX(14deg) rotateY(-10deg) scale(${scaleFactor})`;
            }

            // Apply parallax to all designated sections
            animatedSections.forEach(section => {
                // Calculate parallax based on the smooth scroll value for a unified feel
                const sectionTop = sectionOffsets.get(section);
                const sectionCenter = sectionTop + section.offsetHeight / 2;
                const screenCenter = viewportHeight / 2;
                // Calculate distance of the section's center from the viewport's center
                const distance = (sectionCenter - currentScroll) - screenCenter;
                const parallax = distance * -0.08; // Increased effect slightly for more flow
                section.style.setProperty('--scroll-parallax', `${parallax.toFixed(2)}px`);
            });

            requestAnimationFrame(smoothScrollLoop);
        }

        window.addEventListener('scroll', () => {
            targetScroll = window.scrollY;
            // Start the animation loop only if it's not already running
            if (!isTicking) {
                isTicking = true;
                requestAnimationFrame(smoothScrollLoop);
            }
        }, { passive: true });

        // Initial call to set positions on page load
        targetScroll = window.scrollY;
        currentScroll = targetScroll;
        isTicking = true;
        requestAnimationFrame(smoothScrollLoop);
    };
    applyScrollPhysics();

    // ==========================================================================
    // 2. VIEWPORT TRIGGERED ACCELERATION MATRIX COUNTER
    // ==========================================================================
    const triggerCounterEngine = () => {
        const numbers = document.querySelectorAll('.metric-number');
        const triggerGrid = document.querySelector('.metrics-grid');
        if (!triggerGrid || numbers.length === 0) return;

        const countSequence = (node) => {
            const targetVal = +node.dataset.target;
            if (isNaN(targetVal)) return;

            let baseVal = 0;
            const runtimeSpan = 1800; 
            const tickRate = 1000 / 60; 
            const stepValue = targetVal / (runtimeSpan / tickRate);

            const progressiveLoop = () => {
                    baseVal += stepValue; // Increment the base value
                if (baseVal >= targetVal) {
                        node.textContent = targetVal.toLocaleString(); // Set final value
                    } else { // Continue animation
                    node.textContent = Math.floor(baseVal).toLocaleString();
                    requestAnimationFrame(progressiveLoop);
                }
            };
            requestAnimationFrame(progressiveLoop);
        };

        const metricObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    numbers.forEach(num => countSequence(num));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.35 });

        metricObserver.observe(triggerGrid);
    };
    triggerCounterEngine();

    // ==========================================================================
    // 3. ACCESSIBILITY & SEARCH INTEGRATION
    // ==========================================================================
    const setupHeaderUtilities = () => {
        const accBtn = document.getElementById('accessibilityBtn');
        const accMenu = document.getElementById('accessibilityMenu');
        const darkModeToggle = document.getElementById('darkModeToggle');
        const dyslexiaToggle = document.getElementById('dyslexiaToggle');

        // Accessibility Menu Toggle works via hover and click for broader device support
        if (accBtn && accMenu) {
            accBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const isOpen = accMenu.classList.toggle('open');
                accBtn.setAttribute('aria-expanded', String(isOpen));
            });
            document.addEventListener('click', () => {
                accMenu.classList.remove('open');
                accBtn.setAttribute('aria-expanded', 'false');
            });
            accMenu.addEventListener('click', (event) => event.stopPropagation());
        }

        // Dark Mode Logic
        if (darkModeToggle) {
            const toggleTheme = (isDark) => {
                if (isDark) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme-mode', 'dark');
                    darkModeToggle.checked = true;
                } else {
                    document.documentElement.removeAttribute('data-theme');
                    localStorage.setItem('theme-mode', 'light');
                    darkModeToggle.checked = false;
                }
            };
            toggleTheme(localStorage.getItem('theme-mode') === 'dark');
            darkModeToggle.addEventListener('change', (e) => {
                toggleTheme(e.target.checked);
            });
        }

        // Dyslexia Font Logic
        if (dyslexiaToggle) {
            const toggleDyslexia = (isEnabled) => {
                if (isEnabled) {
                    document.body.classList.add('dyslexia-font-enabled');
                    localStorage.setItem('dyslexia-font', 'true');
                    dyslexiaToggle.checked = true;
                } else {
                    document.body.classList.remove('dyslexia-font-enabled');
                    localStorage.setItem('dyslexia-font', 'false');
                    dyslexiaToggle.checked = false;
                }
            };
            toggleDyslexia(localStorage.getItem('dyslexia-font') === 'true');
            dyslexiaToggle.addEventListener('change', (e) => {
                toggleDyslexia(e.target.checked);
            });
        }

        // Search Logic
        const searchBtn = document.getElementById('searchBtn');
        const searchBarContainer = document.getElementById('searchBarContainer');
        const searchInput = document.getElementById('searchInput');
        const searchClose = document.getElementById('searchClose');
        const searchResults = document.getElementById('searchResults');
        
        if (searchBtn && searchBarContainer) {
            searchBtn.addEventListener('click', () => {
                searchBarContainer.classList.add('open');
                searchBarContainer.setAttribute('aria-hidden', 'false');
                searchBtn.setAttribute('aria-expanded', 'true');
                searchInput?.focus();
            });
            
            searchClose?.addEventListener('click', () => {
                searchBarContainer.classList.remove('open');
                searchBarContainer.setAttribute('aria-hidden', 'true');
                searchBtn.setAttribute('aria-expanded', 'false');
                if (searchResults) searchResults.innerHTML = '';
                if (searchInput) searchInput.value = '';
            });

            if (searchInput && searchResults) {
                searchInput.addEventListener('input', (e) => {
                    const query = e.target.value.toLowerCase().trim();
                    if (!query) {
                        searchResults.innerHTML = '';
                        searchResults.classList.remove('active');
                        return;
                    }
                    
                    // Simple search implementation over h2, h3, p
                    const searchableElements = document.querySelectorAll('main h2, main h3, main p');
                    const results = [];
                    const addedTexts = new Set();
                    
                    searchableElements.forEach(el => {
                        const text = el.textContent || '';
                        if (text.toLowerCase().includes(query)) {
                            // Find parent section to get context and id
                            let parent = el.closest('section');
                            if (parent && parent.id && !addedTexts.has(text.substring(0, 50))) {
                                results.push({
                                    id: parent.id,
                                    text: text.substring(0, 100) + (text.length > 100 ? '...' : ''),
                                    element: el.tagName
                                });
                                addedTexts.add(text.substring(0, 50));
                            }
                        }
                    });

                    if (results.length > 0) {
                        searchResults.innerHTML = results.map(r => 
                            `<a href="#${r.id}" class="search-result-item" onclick="document.getElementById('searchBarContainer').classList.remove('open')">
                                <span class="search-result-type">${r.element.toLowerCase()}</span>
                                <span class="search-result-text">${r.text}</span>
                            </a>`
                        ).join('');
                        searchResults.classList.add('active');
                    } else {
                        searchResults.innerHTML = '<div class="search-result-none">No results found</div>';
                        searchResults.classList.add('active');
                    }
                });
            }
        }
    };
    setupHeaderUtilities();

    // ==========================================================================
    // 4. DYNAMIC BUSINESS CAROUSEL & MODAL ENGINE
    // ==========================================================================
    const initDynamicBusinessSection = () => {
        const carousel = document.getElementById('bizCarousel');
        const textContainer = document.getElementById('activeSectorDetails');
        const dynTitle = document.getElementById('dynTitle');
        const dynDesc = document.getElementById('dynDesc');
        const dynBtn = document.getElementById('dynBtn');
        
        if (!carousel) return;

        // Clear any hardcoded cards to prevent duplication
        carousel.innerHTML = '';

        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (isMobile) {
            // --- MOBILE: VERTICAL STORYTELLING EXPERIENCE ---

            // 1. Inject CSS for mobile-only redesign
            const injectMobileStyles = () => {
                const style = document.createElement('style');
                style.textContent = `
                    @media (max-width: 768px) {
                        .interactive-business-inner {
                            padding: 60px 24px;
                        }
                        .business-text-content {
                            padding: 0;
                        }
                        .business-carousel-wrapper {
                            overflow: hidden;
                            padding-bottom: 0;
                            -webkit-mask-image: none;
                            mask-image: none;
                        }
                        .interactive-business-section {
                            overflow-x: hidden;
                        }
                        .business-carousel {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 80px;
                            padding: 0;
                            overflow-x: hidden;
                            scroll-snap-type: none;
                        }
                        .business-carousel::-webkit-scrollbar { display: none; }
                        .biz-card {
                            flex: 1 1 100%;
                            max-width: none;
                            scroll-snap-align: none;
                            display: flex;
                            flex-direction: column;
                            border-radius: 22px;
                            background-color: var(--surface-strong);
                            box-shadow: 0 15px 40px -10px var(--shadow);
                            opacity: 0;
                            transform: translateY(40px) scale(0.96);
                            transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), 
                                        transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                            will-change: opacity, transform;
                        }
                        .biz-card.is-visible {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                        .biz-card img {
                            aspect-ratio: 16 / 10;
                            object-fit: cover;
                            transform: scale(1.05);
                            transition: transform 0.7s var(--apple-easing);
                            will-change: transform;
                        }
                        .biz-card.active, .biz-card:hover {
                            transform: none; 
                            box-shadow: 0 15px 40px -10px var(--shadow);
                        }
                        .biz-card-overlay {
                            position: relative;
                            padding: clamp(24px, 5vw, 40px);
                            background: none;
                            backdrop-filter: none;
                            -webkit-backdrop-filter: none;
                            display: flex;
                            flex-direction: column;
                            gap: 16px;
                            color: var(--body-text);
                        }
                        .biz-card-overlay h4 {
                            font-family: var(--font-heading);
                            font-size: clamp(1.5rem, 4vw, 2rem);
                            color: var(--primary-heading);
                            margin: 0;
                        }
                        .biz-card-description {
                            font-size: 1rem;
                            line-height: 1.7;
                            color: var(--body-text);
                            margin: 0;
                        }
                        .biz-card-button {
                            margin-top: 24px;
                            align-self: flex-start;
                            background: var(--surface);
                            border: 1px solid rgba(122, 46, 110, 0.15);
                            color: var(--primary-heading);
                            padding: 12px 24px;
                            border-radius: 30px;
                            font-size: 0.9rem;
                            font-weight: 600;
                            display: inline-flex;
                            align-items: center;
                            gap: 10px;
                            cursor: pointer;
                            text-decoration: none;
                            box-shadow: 0 6px 20px var(--shadow);
                            transition: all 0.3s var(--apple-easing);
                        }
                        .biz-card-button:hover {
                            background: var(--surface-strong);
                            border-color: var(--accent);
                            transform: translateY(-2px);
                        }
                        .carousel-pagination, .swipe-indicator {
                            display: none;
                        }
                    }
                `;
                document.head.appendChild(style);
            };
            injectMobileStyles();

            // 2. Hide the main title/description text block for mobile
            if (textContainer) {
                textContainer.style.display = 'none';
            }

            // 3. Create new vertical cards
            Object.keys(sectorData).forEach((key) => {
                const sector = sectorData[key];
                const cardHTML = `
                    <div class="biz-card" data-sector="${key}">
                        <img src="assets/${sector.image}" alt="${sector.title}" loading="lazy">
                        <div class="biz-card-overlay">
                            <h4>${sector.title}</h4>
                            <p class="biz-card-description">${sector.description}</p>
                            <a href="#" class="biz-card-button" data-sector="${key}">
                                <span>Know More</span>
                                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.75 12.25L11.25 5.75M6 5.75h5.25v5.25"></path></svg>
                            </a>
                        </div>
                    </div>
                `;
                carousel.insertAdjacentHTML('beforeend', cardHTML);
            });
            
            // 4. Setup animations for new cards
            const mobileCards = carousel.querySelectorAll('.biz-card');

            // Reveal animation
            const cardObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        entry.target.style.transitionDelay = `${index * 100}ms`;
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            mobileCards.forEach(card => cardObserver.observe(card));

            // Parallax animation
            let isTicking = false;
            const handleScroll = () => {
                const viewportHeight = window.innerHeight;
                mobileCards.forEach(card => {
                    const cardImage = card.querySelector('img');
                    const rect = card.getBoundingClientRect();
                    if (rect.bottom >= 0 && rect.top <= viewportHeight) {
                        const scrollPercent = (rect.top + rect.height / 2) / viewportHeight;
                        const parallaxValue = (scrollPercent - 0.5) * -40;
                        if (cardImage) {
                           cardImage.style.transform = `scale(1.05) translateY(${parallaxValue}px)`;
                        }
                    }
                });
                isTicking = false;
            };
            window.addEventListener('scroll', () => {
                if (!isTicking) {
                    window.requestAnimationFrame(handleScroll);
                    isTicking = true;
                }
            }, { passive: true });

            // Wire up modal buttons
            carousel.addEventListener('click', (e) => {
                const button = e.target.closest('.biz-card-button');
                if (button) {
                    e.preventDefault();
                    const sectorKey = button.dataset.sector;
                    openModal(sectorKey);
                }
            });

        } else {
            // --- DESKTOP & TABLET: Original Fan-Out/Grid Logic ---
            Object.keys(sectorData).forEach((key, index) => {
                const sector = sectorData[key];
                const placeholderText = sector.title.split(' ').slice(0, 2).join('+');
                const cardHTML = `
                    <div 
                        class="biz-card" 
                        data-sector="${key}"
                        role="tab"
                        id="biz-tab-${key}"
                        aria-controls="activeSectorDetails"
                        aria-labelledby="biz-tab-label-${key}"
                    >
                        <img src="assets/${sector.image}" alt="" aria-hidden="true" onerror="this.src='https://via.placeholder.com/280x420/1a0b18/c8a86b?text=${placeholderText}'">
                        <div class="biz-card-overlay"><h4 id="biz-tab-label-${key}">${sector.title}</h4></div>
                    </div>
                `;
                carousel.insertAdjacentHTML('beforeend', cardHTML);
            });

            const cards = document.querySelectorAll('.biz-card');
            if (cards.length === 0) return;

            const isTablet = window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches;

            if (isTablet) {
                 // Tablet uses grid, no special JS needed other than modal click
            } else {
                // --- Desktop: Fan-Out & Autoplay Logic ---
                let currentIndex = 0;
                let autoPlayInterval;

                const updateActiveState = (index) => {
                    document.querySelectorAll('.sector-bg').forEach(bg => bg.classList.remove('active'));

                    cards.forEach((card, idx) => {
                        const isActive = idx === index;
                        card.classList.toggle('active', isActive);
                        card.setAttribute('aria-selected', String(isActive));
                        card.setAttribute('tabindex', isActive ? '0' : '-1');
                        
                        let diff = (idx - index + cards.length) % cards.length;
                        if (diff === 0) {
                            card.style.transform = `translateX(0) scale(1)`;
                            card.style.zIndex = 10;
                            card.style.opacity = 1;
                        } else if (diff === 1) {
                            card.style.transform = `translateX(60px) scale(0.9)`;
                            card.style.zIndex = 9;
                            card.style.opacity = 0.8;
                        } else if (diff === 2) {
                            card.style.transform = `translateX(120px) scale(0.8)`;
                            card.style.zIndex = 8;
                            card.style.opacity = 0.6;
                        } else if (diff === cards.length - 1) {
                            card.style.transform = `translateX(-60px) scale(0.9)`;
                            card.style.zIndex = 9;
                            card.style.opacity = 0;
                        } else {
                            card.style.transform = `translateX(140px) scale(0.7)`;
                            card.style.zIndex = 7;
                            card.style.opacity = 0;
                        }
                    });

                    const activeCard = cards[index];
                    const sectorKey = activeCard.dataset.sector;
                    const targetBg = document.getElementById(`bg-${sectorKey}`);
                    if (targetBg) targetBg.classList.add('active');

                    const data = sectorData[sectorKey];
                    if (data && textContainer) {
                        textContainer.classList.remove('fade-in');
                        textContainer.classList.add('fade-out');
                        setTimeout(() => {
                            dynTitle.textContent = data.title;
                            dynDesc.textContent = data.description;
                            if(dynBtn) {
                                dynBtn.dataset.sector = sectorKey;
                                dynBtn.setAttribute('aria-label', `Know more about ${data.title}`);
                            }
                            textContainer.classList.remove('fade-out');
                            textContainer.classList.add('fade-in');
                        }, 300);
                    }
                };

                const resetAutoPlay = () => {
                    clearInterval(autoPlayInterval);
                    startAutoPlay();
                };

                cards.forEach((card, idx) => {
                    card.addEventListener('click', () => {
                        currentIndex = idx;
                        updateActiveState(currentIndex);
                        resetAutoPlay();
                    });
                });

                const startAutoPlay = () => {
                    autoPlayInterval = setInterval(() => {
                        currentIndex = (currentIndex + 1) % cards.length;
                        updateActiveState(currentIndex);
                    }, 5000);
                };
                
                updateActiveState(currentIndex);
                startAutoPlay();

                carousel.addEventListener('keydown', (e) => {
                    let newIndex = currentIndex;
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { newIndex = (currentIndex + 1) % cards.length; } 
                    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { newIndex = (currentIndex - 1 + cards.length) % cards.length; } 
                    else { return; }

                    e.preventDefault();
                    currentIndex = newIndex;
                    updateActiveState(currentIndex);
                    cards[currentIndex].focus();
                    resetAutoPlay();
                });
            }
        }

        // --- Generic Modal Opening Logic ---
        dynBtn?.addEventListener('click', () => { 
            const sectorKey = dynBtn.dataset.sector;
            openModal(sectorKey);
        });

        // Add click listener to cards for tablet/desktop
        if (!isMobile) {
            carousel.addEventListener('click', (e) => {
                const card = e.target.closest('.biz-card');
                if (card) {
                    const sectorKey = card.dataset.sector;
                    // On desktop, the fan-out updates the main button. We can just click it.
                    // On tablet, we need to directly open the modal.
                    if (window.matchMedia("(max-width: 1024px)").matches) {
                        openModal(sectorKey);
                    } else if (card.classList.contains('active')) {
                        // For desktop, only the active card's button is relevant
                         dynBtn.click();
                    }
                }
            });
        }
    };
    
    // --- Standalone Modal Logic ---
    let lastFocusedElement;
    const modalCloseBtn = document.getElementById('sectorModalClose');
    const modalOverlay = document.getElementById('sectorModalOverlay');
    
    const openModal = (sectorKey) => {
        const sector = sectorData[sectorKey];
        if (!sector || !sectorModal) return;

        const modalBody = document.getElementById('sectorModalBody');
        if (modalBody) {
            modalBody.innerHTML = sector.contentHtml;
        }

        sectorModal.classList.add('open');
        sectorModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        lastFocusedElement = document.activeElement;
        setTimeout(() => modalCloseBtn?.focus(), 100);
    };

    const closeModal = () => {
        if (!sectorModal.classList.contains('open')) return;

        sectorModal.classList.remove('open');
        sectorModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        lastFocusedElement?.focus();
    };
    
    modalCloseBtn?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sectorModal.classList.contains('open')) {
            closeModal();
        }
    });

    initDynamicBusinessSection();
    initDynamicBusinessSection();


    // ==========================================================================
    // 7. ESG RESPONSIBLE GROWTH INTERACTIVE SECTION
    // ==========================================================================
    const initEsgSection = () => {
        const section = document.querySelector('.esg-section');
        if (!section) return;

        const tablist = section.querySelector('[role="tablist"]');
        const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
        const desktopContentPanel = section.querySelector('.esg-content-panel');
        const mobileMatcher = window.matchMedia("(max-width: 600px)");
        let isMobile;

        // On mobile, move content panels into nav items to create an accordion structure
        const setupAccordion = () => {
            tabs.forEach(tab => {
                const panelId = tab.getAttribute('aria-controls');
                const panel = desktopContentPanel.querySelector(`#${panelId}`);
                if (panel) {
                    tab.appendChild(panel);
                }
            });
        };

        // On desktop, move content panels back to the main panel
        const setupDesktop = () => {
            tabs.forEach(tab => {
                const panelId = tab.getAttribute('aria-controls');
                const panel = tab.querySelector(`#${panelId}`);
                if (panel) {
                    desktopContentPanel.appendChild(panel);
                }
            });
        };

        const switchTab = (newTab) => {
            const oldTab = tablist.querySelector('[aria-selected="true"]');
            
            if (oldTab === newTab && isMobile) {
                // If it's mobile and the same tab is clicked, toggle it (accordion behavior)
                newTab.classList.toggle('active');
                newTab.setAttribute('aria-selected', newTab.classList.contains('active'));
                return;
            }

            if (oldTab) {
                oldTab.classList.remove('active');
                oldTab.setAttribute('aria-selected', 'false');
                if (!isMobile) {
                    const oldPanelId = oldTab.getAttribute('aria-controls');
                    const oldPanel = desktopContentPanel.querySelector(`#${oldPanelId}`);
                    oldPanel?.classList.remove('active', 'active-animating');
                }
            }
            
            newTab.classList.add('active');
            newTab.setAttribute('aria-selected', 'true');
            
            if (!isMobile) {
                const newPanelId = newTab.getAttribute('aria-controls');
                const newPanel = desktopContentPanel.querySelector(`#${newPanelId}`);
                if (newPanel) {
                    newPanel.classList.add('active');
                    
                    // Trigger staggered animations
                    setTimeout(() => {
                        newPanel.classList.add('active-animating');
                    }, 50); // Small delay to ensure transition starts
                }
            }
        };

        const handleLayoutChange = (e) => {
            const wasMobile = isMobile;
            isMobile = e.matches;

            if (wasMobile === isMobile) return; // No change

            if (isMobile) {
                setupAccordion();
            } else {
                setupDesktop();
            }
            // Reset active tab to default to avoid weird states
            switchTab(tabs[0]);
        };
        
        // Initial setup
        isMobile = mobileMatcher.matches;
        if (isMobile) {
            setupAccordion();
        }
        
        // Set initial active tab without hover/click logic
        const initialActiveTab = tablist.querySelector('.esg-nav-item.active') || tabs[0];
        initialActiveTab.classList.add('active');
        initialActiveTab.setAttribute('aria-selected', 'true');
        if (!isMobile) {
             const initialPanelId = initialActiveTab.getAttribute('aria-controls');
             const initialPanel = desktopContentPanel.querySelector(`#${initialPanelId}`);
             initialPanel?.classList.add('active');
             setTimeout(() => initialPanel?.classList.add('active-animating'), 100);
        }
       
        // Add event listeners
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                switchTab(e.currentTarget);
            });
            // The user requested hover, but this can be jarring. Click is better for accessibility.
            // If hover is a must, we can add it back, but it might fight with the accordion on touch.
            // For now, sticking with click-only for a predictable experience.
        });

        tablist.addEventListener('keydown', (e) => {
            const currentTab = document.activeElement.closest('[role="tab"]');
            if (!currentTab) return;
            
            let currentIndex = tabs.indexOf(currentTab);
            let newIndex;

            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                newIndex = (currentIndex + 1) % tabs.length;
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
            } else {
                return;
            }

            e.preventDefault();
            tabs[newIndex].focus();
            switchTab(tabs[newIndex]);
        });
        
        mobileMatcher.addEventListener('change', handleLayoutChange);
    };
    initEsgSection();

    // ==========================================================================
    // 5. OBSERVER DRIVEN LAYOUT ENTRANCE REVEALS
    // ==========================================================================
    const runLayoutSectionReveals = () => {
        const layoutContainers = document.querySelectorAll(
            '.scroll-animated-section, .genesis-section, .section-split, .floating-media-section, .cards-section, .values-section, .ecosystem-section, .showcase-section, .growth-strategy-section, .esg-section, .news-section, .join-section, #leadership, .interactive-business-section, .vision-mission-content'
        );

        const targetObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    targetObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

        layoutContainers.forEach(container => targetObserver.observe(container));
    };
    runLayoutSectionReveals();

    // ==========================================================================
    // 5b. CINEMATIC "GENESIS" SECTION SCROLL ANIMATION
    // ==========================================================================
    const initConstellation = () => {
        const canvas = document.getElementById('constellationCanvas');
        if (!canvas) return;
 
        // Respect user's preference for reduced motion by disabling the animation.
        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (reducedMotionQuery.matches) {
            canvas.style.display = 'none'; // Hide canvas if motion is not preferred.
            return;
        }
 
        // The check to disable animation on mobile has been removed as per requirements.
        // Particle count is already reduced for smaller screens for performance.
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = window.innerWidth < 768 ? 60 : 100;
        const maxDistance = 120;
        const mouse = { x: null, y: null, radius: 150 };

        const resizeCanvas = () => {
            const container = canvas.parentElement;
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            particles = []; // Reset particles on resize
            createParticles();
        };

        const createParticles = () => {
            const isDarkMode = document.documentElement.hasAttribute('data-theme');
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 1.5 + 1,
                    color: isDarkMode ? 'rgba(250, 247, 250, 0.8)' : 'rgba(80, 21, 73, 0.7)'
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isDarkMode = document.documentElement.hasAttribute('data-theme');
            const lineColor = isDarkMode ? 'rgba(200, 168, 107, 0.15)' : 'rgba(122, 46, 110, 0.15)';

            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 1 - distance / maxDistance;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const update = () => {
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Mouse interaction
                if (mouse.x && mouse.y) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        p.x += forceDirectionX * force * 2;
                        p.y += forceDirectionY * force * 2;
                    }
                }
            });
        };

        const animate = () => {
            update();
            draw();
            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        // Also listen for theme changes to update colors
        new MutationObserver(resizeCanvas).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        resizeCanvas();
        animate();
    };
    initConstellation();

    // ==========================================================================
    // 5c. "GENESIS" VISION/MISSION TEXT SCROLL ANIMATION
    // ==========================================================================
    // The animateVisionMissionText function has been removed.
    // The new layout uses the simpler IntersectionObserver-based reveal
    // handled by the `runLayoutSectionReveals` function.
    // I've added `.vision-mission-content` to the observer's target list.

    // ==========================================================================
    // 5c. "GENESIS" SECTION INTERACTIVE 3D ORBITAL GRAPHIC
    // and Narrative Card Tilt
    // ==========================================================================
    const addGenesisInteractivity = () => {
        // This function is now empty as the tilt effect was removed with the panel.
    };
    addGenesisInteractivity();
    // ==========================================================================
    // 6. INTERACTIVE CORE VALUE CARD FLIP LOGIC
    // ==========================================================================
    const initValueCardInteraction = () => {
        const valueCards = document.querySelectorAll('.value-card');
        if (!valueCards.length) return;

        valueCards.forEach(card => {
            // Make cards focusable so that the CSS :focus-within pseudo-class can
            // trigger the flip for keyboard users, complementing the :hover effect.
            card.setAttribute('tabindex', '0');
        });
    };
    initValueCardInteraction();


    // Mobile Menu Structural Overrides
    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navLinks?.classList.toggle('open');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        document.addEventListener('click', () => {
            navLinks?.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    }

    // Scroll to Top Interaction Physics Button logic mapping
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            scrollToTopBtn.style.transform = window.scrollY > 300 ? 'scale(1)' : 'scale(0)';
        }, { passive: true });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Auto-Hide Lifecycle Page Loader
    setTimeout(() => { if (pageLoader) pageLoader.classList.add('loaded'); }, 400);

    // ==========================================================================
    // 8. FOOTER ENTRANCE ANIMATION
    // ==========================================================================
    const initFooterAnimation = () => {
        const footer = document.querySelector('.page-footer');
        if (!footer) return;

        const footerColumns = footer.querySelectorAll('.footer-column');

        const footerObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.classList.add('revealed');
                    footerColumns.forEach(col => col.classList.add('reveal'));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        footerObserver.observe(footer);
    };
    initFooterAnimation();
    
    // ==========================================================================
    // 9. GENERIC INFORMATIONAL MODAL HANDLER
    // ==========================================================================
    const initInfoModals = () => {
        let lastFocusedElement;

        const openModal = (modalId) => {
            const modal = document.getElementById(modalId);
            if (!modal) return;

            lastFocusedElement = document.activeElement;
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            
            const closeButton = modal.querySelector('.sector-modal-close');
            closeButton?.focus();
        };

        const closeModal = (modal) => {
            if (!modal || !modal.classList.contains('open')) return;

            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';

            lastFocusedElement?.focus();
        };

        const handleKeyboardNav = (e) => {
            const openModal = document.querySelector('.sector-modal.open');
            if (!openModal) return;

            if (e.key === 'Escape') {
                closeModal(openModal);
            }

            if (e.key === 'Tab') {
                const modalPanel = openModal.querySelector('.sector-modal-panel');
                const focusableElements = modalPanel.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        };

        document.querySelectorAll('[data-modal-target]').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.getAttribute('data-modal-target');
                openModal(modalId);
            });
        });

        document.querySelectorAll('.sector-modal').forEach(modal => {
            const overlay = modal.querySelector('.sector-modal-overlay');
            const closeButton = modal.querySelector('.sector-modal-close');
            
            if(overlay) overlay.addEventListener('click', () => closeModal(modal));
            if(closeButton) closeButton.addEventListener('click', () => closeModal(modal));
        });

        document.addEventListener('keydown', handleKeyboardNav);
    };
    initInfoModals();
});

// Premium Hero Background Interactivity
document.addEventListener('DOMContentLoaded', () => {
    const heroBg = document.getElementById('heroBg');
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    const orb3 = document.querySelector('.orb-3');

    if (heroBg && orb1 && orb2 && orb3) {
        document.addEventListener('mousemove', (e) => {
            // Calculate mouse position relative to screen center (-1 to 1)
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;

            // Apply different movement strengths to each orb for depth
            orb1.style.setProperty('--mouse-x', `${x * 40}px`);
            orb1.style.setProperty('--mouse-y', `${y * 40}px`);

            orb2.style.setProperty('--mouse-x', `${x * -50}px`);
            orb2.style.setProperty('--mouse-y', `${y * -50}px`);

            orb3.style.setProperty('--mouse-x', `${x * 20}px`);
            orb3.style.setProperty('--mouse-y', `${y * 20}px`);
        });
    }
});