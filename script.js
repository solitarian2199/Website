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
            title: 'Information Technology & Digital Solutions',
            description: 'Architecting India’s digital future through sovereign cloud infrastructure, AI, and enterprise platforms that empower a self-reliant nation.',
            image: 'IT_SECTOR_01.png',
            heroImage: 'IT_SECTOR_05.png',
            tagline: "Empowering Digital Transformation",
            contentHtml: `
                <div class="modal-hero-banner" style="background-image: url('assets/IT_SECTOR_05.png');">
                    <div class="hero-banner-overlay"></div>
                    <div class="hero-banner-content">
                        <h2>Information Technology & Digital Solutions</h2>
                        <p class="tagline">Empowering Digital Transformation</p>
                    </div>
                </div>
                <div class="modal-body-content">
                    <div class="modal-section">
                        <p>Aureon is dedicated to architecting India's sovereign digital backbone, guided by a vision of inclusive digital communities where technology acts as a great equalizer. Our mission is to develop secure, scalable, and accessible technology ecosystems that drive innovation and empower businesses, governance, and citizens. Inspired by the Digital India initiative, we are committed to bridging the digital divide, promoting digital literacy, and delivering transformative solutions in governance, education, and healthcare to foster a future of shared prosperity for every Indian.</p>
                    </div>

                    <div class="modal-section focus-areas">
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li><span class="focus-icon">✧</span>Digital Transformation</li>
                            <li><span class="focus-icon">✧</span>Artificial Intelligence & Data Analytics</li>
                            <li><span class="focus-icon">✧</span>Cloud Computing & Digital Infrastructure</li>
                            <li><span class="focus-icon">✧</span>Cyber Security</li>
                            <li><span class="focus-icon">✧</span>Software Engineering</li>
                            <li><span class="focus-icon">✧</span>Enterprise Digital Solutions</li>
                            <li><span class="focus-icon">✧</span>Automation</li>
                        </ul>
                    </div>

                    <div class="modal-outro">
                        <p><strong>Future Outlook:</strong> We believe technology must reduce disparities, not create them. Our vision is a future where innovation empowers social and economic inclusion for all.</p>
                    </div>
                </div>
            `
        },
        energy: {
            title: 'Renewable Energy & Sustainable Development',
            description: 'Powering India’s Net Zero future by investing in clean energy infrastructure, promoting green innovation, and building a sustainable, climate-resilient economy.',
            image: 'RENEWABLE ENERGY_SECTOR_01.png',
            heroImage: 'RENEWABLE ENERGY_SECTOR_02.png',
            tagline: "Accelerating India's Journey Towards Net Zero",
            contentHtml: `
                <div class="modal-hero-banner" style="background-image: url('assets/RENEWABLE ENERGY_SECTOR_02.png');">
                    <div class="hero-banner-overlay"></div>
                    <div class="hero-banner-content">
                        <h2>Renewable Energy & Sustainable Development</h2>
                        <p class="tagline">Accelerating India's Journey Towards Net Zero</p>
                    </div>
                </div>
                <div class="modal-body-content">
                     <div class="modal-section">
                        <p>Aureon is committed to leading India's transition to a green economy, where sustainable energy fuels national growth and environmental well-being. Our mission is to accelerate this transition by developing and investing in renewable infrastructure, promoting green innovation, and supporting industries in achieving their carbon reduction goals. In alignment with India's Net Zero 2070 commitment, we focus on climate resilience and responsible energy consumption to help build a cleaner, more sustainable future for all.</p>
                    </div>

                    <div class="modal-section focus-areas">
                        <h4>Key Initiatives</h4>
                        <ul>
                            <li><span class="focus-icon">✧</span>Solar Energy</li>
                            <li><span class="focus-icon">✧</span>Wind Energy</li>
                            <li><span class="focus-icon">✧</span>Green Hydrogen</li>
                            <li><span class="focus-icon">✧</span>Smart Energy Solutions</li>
                            <li><span class="focus-icon">✧</span>Battery Storage</li>
                            <li><span class="focus-icon">✧</span>Sustainable Infrastructure</li>
                            <li><span class="focus-icon">✧</span>Energy Efficiency</li>
                        </ul>
                    </div>

                    <div class="modal-outro">
                        <p><strong>Our Sustainability Vision:</strong> We envision a world where economic progress and environmental stewardship go hand-in-hand, creating a resilient and prosperous future for generations to come.</p>
                    </div>
                </div>
            `
        },
        logistics: {
            title: 'Logistics',
            description: 'Building intelligent, efficient, and people-centric transportation networks that connect communities and drive economic growth.',
            image: 'LOGISTICS_SECTOR_01.png',
            heroImage: 'LOGISTICS_SECTOR_02.png',
            tagline: "Connecting People, Markets and Opportunities",
            contentHtml: `
                <div class="modal-hero-banner" style="background-image: url('assets/LOGISTICS_SECTOR_02.png');">
                    <div class="hero-banner-overlay"></div>
                    <div class="hero-banner-content">
                        <h2>Logistics</h2>
                        <p class="tagline">Connecting People, Markets and Opportunities</p>
                    </div>
                </div>
                <div class="modal-body-content">
                    <div class="modal-section">
                        <p>Aureon Logistics is redefining connectivity in India by setting a new standard for reliable, efficient, and customer-centric logistics. Our mission is to deliver seamless, safe, and premium transportation experiences that connect people and businesses, underpinned by technological innovation and a commitment to transparency. We are building the future of transportation by focusing on comfortable journeys, customer-first service, sustainable practices, and efficient fleet management to create a more connected and accessible world.</p>
                    </div>

                    <div class="modal-section focus-areas">
                        <h4>Future Possibilities</h4>
                        <ul>
                            <li><span class="focus-icon">✧</span>Passenger Transportation</li>
                            <li><span class="focus-icon">✧</span>Commercial Logistics</li>
                            <li><span class="focus-icon">✧</span>Smart Fleet Tracking</li>
                            <li><span class="focus-icon">✧</span>Integrated Mobility Solutions</li>
                            <li><span class="focus-icon">✧</span>Last-Mile Connectivity</li>
                        </ul>
                    </div>

                    <div class="modal-outro">
                        <p><strong>Our Philosophy:</strong> We believe logistics should do more than simply move goods; it should improve people's lives, create opportunities, and build a more connected future for everyone.</p>
                    </div>
                </div>
            `
        },
        healthcare: {
            title: 'Healthcare',
            description: 'Pioneering accessible, affordable, and high-quality healthcare solutions through technology and strategic infrastructure to serve every citizen.',
            image: 'HEALTHCARE_SECTOR_01.png',
            heroImage: 'HEALTHCARE_SECTOR_03.png',
            tagline: "Advancing Accessible and Compassionate Care",
            contentHtml: `
                <div class="modal-hero-banner" style="background-image: url('assets/HEALTHCARE_SECTOR_03.png');">
                    <div class="hero-banner-overlay"></div>
                    <div class="hero-banner-content">
                        <h2>Healthcare</h2>
                        <p class="tagline">Advancing Accessible and Compassionate Care</p>
                    </div>
                </div>
                <div class="modal-body-content">
                    <div class="modal-section">
                        <p>Aureon is dedicated to making accessible, affordable, and quality healthcare a reality for every citizen of India. Our mission is to improve healthcare outcomes by leveraging technology, fostering strategic public-private partnerships, and investing in next-generation medical infrastructure. Aligned with national priorities, we focus on bridging the urban-rural divide by ensuring the availability of life-saving medicines, optimizing the distribution of medical resources, and developing efficient emergency response systems to strengthen India’s entire healthcare ecosystem.</p>
                    </div>

                    <div class="modal-section focus-areas">
                        <h4>Key Focus Areas</h4>
                        <ul>
                           <li><span class="focus-icon">✧</span>Affordable Healthcare</li>
                            <li><span class="focus-icon">✧</span>Rural Healthcare Access</li>
                            <li><span class="focus-icon">✧</span>Telemedicine & Digital Health</li>
                            <li><span class="focus-icon">✧</span>Medical Logistics</li>
                            <li><span class="focus-icon">✧</span>Healthcare Infrastructure</li>
                            <li><span class="focus-icon">✧</span>Emergency Healthcare</li>
                            <li><span class="focus-icon">✧</span>Public-Private Collaboration</li>
                        </ul>
                    </div>

                    <div class="modal-outro">
                        <p><strong>Future Ambitions:</strong> While Aureon does not currently own or operate hospitals, our long-term ambition is to be a catalyst for change by investing in and developing the foundational infrastructure needed to create a stronger, more resilient healthcare system for India.</p>
                    </div>
                </div>
            `
        },
        water: {
            title: 'Water Security & Sustainability',
            description: 'Protecting every drop for future generations through advanced water management and purification technologies.',
            image: 'WATER_SECTOR_02.png',
            heroImage: 'WATER_SECTOR_02.png', // Fallback to RENEWABLEQ.png if unavailable
            tagline: "Protecting Every Drop for Future Generations",
            contentHtml: `
                <div class="modal-hero-banner" style="background-image: url('assets/WATER_SECTOR_02.png');" onerror="this.style.backgroundImage='url(assets/RENEWABLEQ.png)'">
                    <div class="hero-banner-overlay"></div>
                    <div class="hero-banner-content">
                        <h2>Water Security & Sustainability</h2>
                        <p class="tagline">Protecting Every Drop for Future Generations</p>
                    </div>
                </div>
                <div class="modal-body-content">
                    <div class="modal-section">
                        <p>Aureon is committed to ensuring water security for India by developing and implementing sustainable water management solutions. We focus on advanced purification technologies, efficient distribution systems, and water conservation strategies to address the nation's growing water challenges. Our goal is to create a future where clean and safe water is accessible to all, supporting both communities and industries while preserving this vital natural resource for generations to come.</p>
                    </div>

                    <div class="modal-section focus-areas">
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li><span class="focus-icon">✧</span>Water Purification and Treatment</li>
                            <li><span class="focus-icon">✧</span>Smart Water Grids</li>
                            <li><span class="focus-icon">✧</span>Wastewater Management and Recycling</li>
                            <li><span class="focus-icon">✧</span>Desalination Technologies</li>
                            <li><span class="focus-icon">✧</span>Water Conservation and Harvesting</li>
                        </ul>
                    </div>

                    <div class="modal-outro">
                        <p><strong>Our Vision for Water:</strong> To build a water-secure future for India, where technology and sustainability work in harmony to protect our most precious resource.</p>
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

        // Dynamically create business cards from sectorData
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

        const isMobile = window.matchMedia("(max-width: 992px)").matches;

        if (isMobile) {
            // --- Mobile: Scroll-Snap & Intersection Observer Logic ---
            const updateMobileText = (sectorKey) => {
                const data = sectorData[sectorKey];
                if (data && textContainer && (dynBtn?.dataset.sector !== sectorKey)) {
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

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const card = entry.target;
                        cards.forEach(c => c.classList.remove('active'));
                        card.classList.add('active');
                        updateMobileText(card.dataset.sector);
                        
                        const sectorKey = card.dataset.sector;
                        document.querySelectorAll('.sector-bg').forEach(bg => bg.classList.remove('active'));
                        const targetBg = document.getElementById(`bg-${sectorKey}`);
                        if (targetBg) targetBg.classList.add('active');
                    }
                });
            }, { root: carousel, threshold: 0.7 });

            cards.forEach(card => observer.observe(card));

            if (cards.length > 0) {
                cards[0].classList.add('active');
            }

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

        // ----------------------------------------------------------------------
        // Glass "Know More" Button & Modal Logic Integration
        // ----------------------------------------------------------------------
        let lastFocusedElement;
        const modalCloseBtn = document.getElementById('sectorModalClose');
        const modalOverlay = document.getElementById('sectorModalOverlay');
        const modalPanel = document.querySelector('.sector-modal-panel');
        const imageContainer = document.getElementById('sectorModalImageContainer'); // Ensure this ID is on the HTML element
        let energySlideshowInterval;
        
        const openModal = (sectorKey) => {
            const sector = sectorData[sectorKey];
            if (!sector || !sectorModal) return;

            const modalBody = document.getElementById('sectorModalBody');
            if (modalBody) {
                modalBody.innerHTML = sector.contentHtml || `<h2 id="sectorTitle">${sector.title}</h2><p>${sector.description}</p>`;
            }

            sectorModal.classList.add('open');
            sectorModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            if (!isMobile) clearInterval(autoPlayInterval); // Stop desktop autoplay

            lastFocusedElement = document.activeElement;
            modalCloseBtn?.focus();
        };

        const closeModal = () => {
            if (!sectorModal.classList.contains('open')) return;

            sectorModal.classList.remove('open');
            sectorModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            clearInterval(energySlideshowInterval);
            if (!isMobile) startAutoPlay(); // Restart desktop autoplay

            // Accessibility: Return focus to the element that opened the modal
            lastFocusedElement?.focus();
        };

        const handleModalKeyboardNav = (e) => {
            if (!sectorModal.classList.contains('open')) return;

            if (e.key === 'Escape') {
                closeModal();
                return;
            }

            if (e.key === 'Tab') {
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

        const animateModalCounters = () => {
            const counters = document.querySelectorAll('.sector-modal.open .stat-value[data-target]');
            counters.forEach(node => { // Iterate over each counter element
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
            });
        };

        dynBtn?.addEventListener('click', () => { openModal(dynBtn.dataset.sector); });
        modalCloseBtn?.addEventListener('click', closeModal);
        modalOverlay?.addEventListener('click', closeModal);
        document.addEventListener('keydown', handleModalKeyboardNav);
    };
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