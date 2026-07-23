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
            description: 'Developing cutting-edge software, AI, cloud infrastructure, and digital platforms to drive innovation and empower the digital economy.',
            image: 'ITsolutions_Sector.png',
            focusAreas: ['Sovereign Cloud Infrastructure', 'AI & Machine Learning', 'Enterprise SaaS Platforms', 'Cybersecurity & Data Sovereignty'],
            impact: "Empowering India's digital future with secure, scalable, and intelligent technology ecosystems that foster sovereign capability."
        },
        energy: {
            title: 'Powering Bharat’s Net Zero Future',
            contentHtml: `
                <p class="energy-intro">India’s transition toward renewable energy represents one of the most important economic and environmental transformations of this century.</p>
                <p>With ambitious national goals including 500 GW of non-fossil fuel energy capacity by 2030 and Net Zero emissions by 2070, the country is accelerating investments in clean, scalable, and future-ready infrastructure.</p>
                
                <div class="investment-focus">
                    <h4>Aureon supports this national vision through strategic investments in:</h4>
                    <ul>
                        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Utility-scale solar & wind energy</li>
                        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Green hydrogen ecosystems</li>
                        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Smart grid & energy storage systems</li>
                        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Sustainable industrial infrastructure</li>
                    </ul>
                </div>

                <div class="energy-stats-grid">
                    <div class="stat-card">
                        <div class="stat-value" data-target="500">0</div>
                        <div class="stat-label">Non-Fossil Energy Target by 2030</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">Net Zero</div>
                        <div class="stat-label">India’s 2070 Commitment</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value" data-target="50">0</div>
                        <div class="stat-label">Installed Capacity Goal</div>
                    </div>
                </div>
                
                <p class="energy-outro">By aligning with Bharat’s renewable energy mission, Aureon aims to strengthen energy independence, reduce carbon emissions, and help build a resilient clean energy economy for future generations.</p>
            `
        },
        logistics: {
            title: 'Logistics & Infrastructure Ecosystems',
            description: 'Building robust supply chains, advanced multi-modal transportation networks, and smart city infrastructure to connect communities and facilitate economic growth.',
            image: 'Logistics_Sector.png',
            focusAreas: ['Smart Ports & Terminals', 'Integrated Supply Chain Solutions', 'High-Speed Rail & Transport Corridors', 'Urban Infrastructure Development'],
            impact: "Creating a seamless, efficient, and resilient national infrastructure backbone that enhances trade and improves quality of life."
        },
        healthcare: {
            title: 'Healthcare & Human-Centered Innovation',
            description: 'Pioneering advancements in medical technology, biotechnology, and patient-centric healthcare solutions to improve global health and well-being.',
            image: 'HealthCare_Sector.png',
            focusAreas: ['Biotechnology & Pharmaceutical R&D', 'Advanced Medical Devices', 'Digital Health Platforms', 'Preventive Care Solutions'],
            impact: "Building a future-ready healthcare ecosystem that delivers accessible, high-quality, and innovative solutions to address critical health challenges."
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
        
        const prevBtn = document.getElementById('prevBizBtn');
        const nextBtn = document.getElementById('nextBizBtn');
        
        if (!carousel) return;

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

        let currentIndex = 0;
        let autoPlayInterval;
        const isMobile = window.matchMedia("(max-width: 992px)").matches;

        // --- Modal Accessibility Enhancements ---
        let lastFocusedElement;

        const updateActiveState = (index) => {
            document.querySelectorAll('.sector-bg').forEach(bg => bg.classList.remove('active'));

            cards.forEach((card, idx) => {
                const isActive = idx === index;
                card.classList.toggle('active', isActive);
                card.setAttribute('aria-selected', String(isActive));
                card.setAttribute('tabindex', isActive ? '0' : '-1');
                
                if (isMobile) {
                    // On mobile, just toggle the class. CSS handles the rest.
                    // The class is toggled above.
                } else {
                    // Desktop fan-out animation
                    // Calculate position relative to currentIndex
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
                }
            });

            const activeCard = cards[index];

            if (isMobile && activeCard) {
                // Smoothly scroll the active card to the center on mobile
                activeCard.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }

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

        cards.forEach((card, idx) => {
            card.addEventListener('click', () => {
                currentIndex = idx;
                updateActiveState(currentIndex);
                resetAutoPlay();
            });
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                updateActiveState(currentIndex);
                resetAutoPlay();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % cards.length;
                updateActiveState(currentIndex);
                resetAutoPlay();
            });
        }

        const startAutoPlay = () => {
            autoPlayInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % cards.length;
                updateActiveState(currentIndex);
            }, 5000);
        };

        const resetAutoPlay = () => {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        };
        
        // Initialize carousel
        updateActiveState(currentIndex);
        startAutoPlay();

        // Add keyboard navigation for accessibility
        carousel.addEventListener('keydown', (e) => {
            let newIndex = currentIndex;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                newIndex = (currentIndex + 1) % cards.length;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                newIndex = (currentIndex - 1 + cards.length) % cards.length;
            } else {
                return; // Not a relevant key
            }

            e.preventDefault(); // Prevent page scroll
            currentIndex = newIndex;
            updateActiveState(currentIndex);
            cards[currentIndex].focus(); // Move focus to the new active tab
            resetAutoPlay();
        });

        // ----------------------------------------------------------------------
        // Glass "Know More" Button & Modal Logic Integration
        // ----------------------------------------------------------------------
        const modalCloseBtn = document.getElementById('sectorModalClose');
        const modalOverlay = document.getElementById('sectorModalOverlay');
        const modalPanel = document.querySelector('.sector-modal-panel');
        const imageContainer = document.getElementById('sectorModalImageContainer'); // Ensure this ID is on the HTML element
        let energySlideshowInterval;
        
        const openModal = (sectorKey) => {
            const sector = sectorData[sectorKey];
            if (!sector || !sectorModal) return;
            
            // Add/remove theme class for special styling
            sectorModal.classList.toggle('energy-theme', sectorKey === 'energy'); 

            const targetTitleNode = document.getElementById('sectorTitle');
            const modalBody = document.getElementById('sectorModalBody');
            
            if(targetTitleNode) targetTitleNode.textContent = sector.modalTitle || sector.title;

            if (modalBody) {
                if (sector.contentHtml) {
                    modalBody.innerHTML = sector.contentHtml;
                } else {
                    // Rebuild the old structure for other sectors
                    let content = `<p>${sector.description}</p>`;
                    if (sector.focusAreas && sector.focusAreas.length > 0) {
                        content += `
                            <div class="sector-highlights">
                                <h4>Key Strategic Focus</h4>
                                <ul>
                                    ${sector.focusAreas.map(area => `<li>${area}</li>`).join('')}
                                </ul>
                            </div>
                        `;
                    }
                    if (sector.impact) {
                        content += `
                            <div class="sector-impact">
                                <h4>National Impact</h4>
                                <p>${sector.impact}</p>
                            </div>
                        `;
                    }
                    modalBody.innerHTML = content;
                }
            }

            if (imageContainer) {
                imageContainer.innerHTML = ''; // Clear previous content
                imageContainer.style.backgroundImage = ''; // Clear previous background image style

                if (sectorKey === 'energy') { 
                    imageContainer.innerHTML = `
                        <div class="energy-image-showcase">
                            <div class="showcase-image-wrapper">
                                <!-- IMPORTANT: Verify these image paths are correct relative to index.html -->
                                <img src="assets/E_Sec/E_Sec_01.png" class="showcase-image" alt="Solar Panel Installation">
                                <img src="assets/E_Sec/E_Sec_02.png" class="showcase-image" alt="Wind Turbines at Sunset">
                                <img src="assets/E_Sec/E_Sec_03.png" class="showcase-image" alt="Green Hydrogen Facility">
                                <img src="assets/E_Sec/E_Sec_04.png" class="showcase-image" alt="Modern Energy Substation">
                                <img src="assets/E_Sec/E_Sec_05.png" class="showcase-image" alt="Offshore Wind Farm">
                                <img src="assets/E_Sec/E_Sec_06.png" class="showcase-image" alt="Sustainable Infrastructure">
                            </div>
                            <div class="showcase-overlay"></div>
                            <div class="showcase-grain"></div>
                            <div class="showcase-stats-overlay">
                                <div class="showcase-stat-card">
                                    <h3>500 GW</h3>
                                    <p>Renewable Target</p>
                                </div>
                                <div class="showcase-stat-card">
                                    <h3>Net Zero</h3>
                                    <p>by 2070</p>
                                </div>
                            </div>
                        </div>
                    `;
                    // Start the energy slideshow
                    const startEnergySlideshow = () => {
                        const images = document.querySelectorAll('.energy-image-showcase .showcase-image');
                        if (images.length === 0) return;
                        
                        let currentIndex = 0;
                        images[currentIndex].classList.add('active');

                        clearInterval(energySlideshowInterval);
                        energySlideshowInterval = setInterval(() => {
                            images[currentIndex].classList.remove('active');
                            currentIndex = (currentIndex + 1) % images.length; 
                            images[currentIndex].classList.add('active');
                        }, 7000); // Cinematic transition every 7 seconds
                    };

                    // Use requestAnimationFrame to ensure the DOM is ready before starting animations
                    requestAnimationFrame(() => {
                        startEnergySlideshow();
                        animateModalCounters(); // Animate counters after modal content is rendered
                    });
                } else if (sector.image) {
                    imageContainer.style.backgroundImage = `url('assets/${sector.image}')`;
                }
            }

            sectorModal.classList.add('open');
            sectorModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            clearInterval(autoPlayInterval);

            // Accessibility: Store last focused element and move focus into the modal
            lastFocusedElement = document.activeElement;
            modalCloseBtn?.focus();
        };

        const closeModal = () => {
            if (!sectorModal.classList.contains('open')) return;

            sectorModal.classList.remove('open');
            sectorModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            clearInterval(energySlideshowInterval); // Clear the slideshow interval
            startAutoPlay();

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
    // 5. OBSERVER DRIVEN LAYOUT ENTRANCE REVEALS
    // ==========================================================================
    const runLayoutSectionReveals = () => {
        const layoutContainers = document.querySelectorAll(
            '.scroll-animated-section, .genesis-section, .section-split, .floating-media-section, .cards-section, .values-section, .ecosystem-section, .showcase-section, .growth-strategy-section, .csr-section, .news-section, .join-section, #leadership, .interactive-business-section, .vision-mission-content'
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