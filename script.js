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
    
    const chatWidget = document.getElementById('aureonChatbot');
    const chatToggle = document.getElementById('chatToggle');
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    
    const sectorModal = document.getElementById('sectorModal');

    let chatInitialized = false;
    let chatHistory = [];
    const knowledgeEntries = [];
    const idfMap = new Map();

    const sectorData = {
        it: {
            title: 'Information Technology & Digital Solutions',
            description: 'Developing cutting-edge software, AI, cloud infrastructure, and digital platforms to drive innovation and empower the digital economy.',
            focusAreas: ['Sovereign Cloud Infrastructure', 'AI & Machine Learning', 'Enterprise SaaS Platforms', 'Cybersecurity & Data Sovereignty'],
            impact: "Empowering India's digital future with secure, scalable, and intelligent technology ecosystems that foster sovereign capability."
        },
        energy: {
            title: 'Renewable Energy & Sustainable Development',
            description: 'Investing in solar, wind, and green hydrogen technologies to foster a sustainable future and strengthen national energy independence.',
            focusAreas: ['Utility-Scale Solar & Wind Farms', 'Green Hydrogen Production', 'Smart Grid & Energy Storage', 'Sustainable Development Policies'],
            impact: "Accelerating India's transition to a clean energy economy while ensuring reliable and affordable power for industrial and public use."
        },
        logistics: {
            title: 'Logistics & Infrastructure Ecosystems',
            description: 'Building robust supply chains, advanced multi-modal transportation networks, and smart city infrastructure to connect communities and facilitate economic growth.',
            focusAreas: ['Smart Ports & Terminals', 'Integrated Supply Chain Solutions', 'High-Speed Rail & Transport Corridors', 'Urban Infrastructure Development'],
            impact: "Creating a seamless, efficient, and resilient national infrastructure backbone that enhances trade and improves quality of life."
        },
        healthcare: {
            title: 'Healthcare & Human-Centered Innovation',
            description: 'Pioneering advancements in medical technology, biotechnology, and patient-centric healthcare solutions to improve global health and well-being.',
            focusAreas: ['Biotechnology & Pharmaceutical R&D', 'Advanced Medical Devices', 'Digital Health Platforms', 'Preventive Care Solutions'],
            impact: "Building a future-ready healthcare ecosystem that delivers accessible, high-quality, and innovative solutions to address critical health challenges."
        }
    };

    // ==========================================================================
    // 1. SCROLL PHYSICS ENGINE & METRICS INTERPOLATION
    // ==========================================================================
    const applyScrollPhysics = () => {
        const targetDevice = document.querySelector('.device-shell');
        const heroBlock = document.querySelector('.hero-content');
        
        window.addEventListener('scroll', () => {
            const currentTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const maxScrollableHeight = document.documentElement.scrollHeight - viewportHeight;
            
            if (scrollProgress && maxScrollableHeight > 0) {
                scrollProgress.style.width = `${(currentTop / maxScrollableHeight) * 100}%`;
            }
            
            if (siteHeader) {
                siteHeader.classList.toggle('scrolled', currentTop > 20);
            }

            if (heroBlock) {
                const opacityFactor = Math.max(1 - (currentTop / (viewportHeight * 0.55)), 0);
                heroBlock.style.opacity = opacityFactor;
                heroBlock.style.transform = `translateY(${currentTop * 0.12}px)`;
            }

            if (targetDevice) {
                const boundaryRect = targetDevice.getBoundingClientRect();
                const centerOffset = boundaryRect.top + (boundaryRect.height / 2);
                const screenCenter = viewportHeight / 2;
                const standardDistance = Math.abs(screenCenter - centerOffset);
                
                if (boundaryRect.top < viewportHeight && boundaryRect.bottom > 0) {
                    const dynamicScale = Math.max(1.04 - (standardDistance / viewportHeight) * 0.12, 0.96);
                    targetDevice.style.transform = `rotateX(14deg) rotateY(-10deg) scale(${dynamicScale})`;
                }
            }
        }, { passive: true });
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
                baseVal += stepValue;
                if (baseVal >= targetVal) {
                    node.textContent = targetVal.toLocaleString();
                } else {
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
        const cards = document.querySelectorAll('.biz-card');
        const textContainer = document.getElementById('activeSectorDetails');
        const dynTitle = document.getElementById('dynTitle');
        const dynDesc = document.getElementById('dynDesc');
        const dynBtn = document.getElementById('dynBtn');
        
        const prevBtn = document.getElementById('prevBizBtn');
        const nextBtn = document.getElementById('nextBizBtn');
        
        if (!carousel || cards.length === 0) return;

        let currentIndex = 0;
        let autoPlayInterval;

        const updateActiveState = (index) => {
            document.querySelectorAll('.sector-bg').forEach(bg => bg.classList.remove('active'));

            cards.forEach((card, idx) => {
                card.classList.remove('active');
                
                // Calculate position relative to currentIndex
                let diff = (idx - index + cards.length) % cards.length;
                
                if (diff === 0) {
                    card.style.transform = `translateX(0) scale(1)`;
                    card.style.zIndex = 10;
                    card.style.opacity = 1;
                    card.classList.add('active');
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
                    if(dynBtn) dynBtn.dataset.sector = sectorKey;
                    
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

        // ----------------------------------------------------------------------
        // Glass "Know More" Button & Modal Logic Integration
        // ----------------------------------------------------------------------
        const openModal = (sectorKey) => {
            const sector = sectorData[sectorKey];
            if (!sector || !sectorModal) return;
            
            const targetTitleNode = document.getElementById('sectorTitle');
            const targetDescNode = document.getElementById('sectorDescription');
            const focusAreasList = document.getElementById('sectorFocusAreas');
            const targetImpactNode = document.getElementById('sectorImpact');
            
            if(targetTitleNode) targetTitleNode.textContent = sector.title;
            if(targetDescNode) targetDescNode.textContent = sector.description;
            if(targetImpactNode) targetImpactNode.textContent = sector.impact;
            
            if (focusAreasList) {
                focusAreasList.innerHTML = '';
                sector.focusAreas.forEach(area => {
                    const li = document.createElement('li');
                    li.textContent = area;
                    focusAreasList.appendChild(li);
                });
            }

            sectorModal.classList.add('open');
            document.body.style.overflow = 'hidden';
            clearInterval(autoPlayInterval);
        };

        const closeModal = () => {
            sectorModal.classList.remove('open');
            document.body.style.overflow = '';
            startAutoPlay();
        };

        dynBtn?.addEventListener('click', () => { openModal(dynBtn.dataset.sector); });
        
        document.getElementById('sectorModalClose')?.addEventListener('click', closeModal);
        document.getElementById('sectorModalOverlay')?.addEventListener('click', closeModal);
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    };
    initDynamicBusinessSection();

    // ==========================================================================
    // 5. OBSERVER DRIVEN LAYOUT ENTRANCE REVEALS
    // ==========================================================================
    const runLayoutSectionReveals = () => {
        const layoutContainers = document.querySelectorAll(
            '.section-split, .floating-media-section, .cards-section, .values-section, .ecosystem-section, .showcase-section, .growth-strategy-section, .csr-section, .roadmap-section, .news-section, .join-section, #leadership, .interactive-business-section'
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
    // 6. IN-MEMORY TOKEN SEARCH LOCAL ENGINE (TF-IDF Chatbot)
    // ==========================================================================
    function initializeChatbot() {
        if (chatInitialized) return;
        chatInitialized = true;
        buildKnowledgeBase();
        if (!sessionStorage.getItem('aureonChatHistory')) {
            appendMessage('bot', "Welcome to Aureon. I am Eon, your automated corporate assistant. Ask me anything regarding our foundational utility businesses or portfolio matrix systems.");
        } else {
            restoreChatHistory();
        }
    }

    function buildKnowledgeBase() {
        knowledgeEntries.length = 0; idfMap.clear();
        const mainSections = Array.from(document.querySelectorAll('main section, main .hero-section'));
        const internalDocs = [];

        mainSections.forEach((section, index) => {
            const h = section.querySelector('h1, h2, h3')?.textContent.trim() || `Block-${index}`;
            const strings = Array.from(section.querySelectorAll('p, li')).map(el => el.textContent.trim()).filter(Boolean).join(' ');
            if (!strings) return;
            const docText = `${h}. ${strings}`;
            const words = docText.toLowerCase().match(/[a-z0-9]+/g) || [];
            Array.from(new Set(words)).forEach(w => idfMap.set(w, (idfMap.get(w) || 0) + 1));
            internalDocs.push({ id: index, title: h, content: docText, tokens: words });
        });

        // Inject corporate profile knowledge explicitly
        const strategyDoc = "Aureon’s expansion philosophy is grounded in disciplined capital deployment, structural integration, and long-horizon value creation. We prioritize the development of foundational infrastructures in digital, industrial, and energy before pursuing rapid consumer-facing expansion. Er Ashish B C CEO, Er Arun Kumar R S COO, Er Gokul S Pillai CTO, Er Meghna M Rajeev Director, Dr Akhil R Dev Director";
        const strategyWords = strategyDoc.toLowerCase().match(/[a-z0-9]+/g) || [];
        Array.from(new Set(strategyWords)).forEach(w => idfMap.set(w, (idfMap.get(w) || 0) + 1));
        internalDocs.push({ id: 99, title: "Growth Strategy & Expansion Model", content: strategyDoc, tokens: strategyWords });

        internalDocs.forEach(doc => {
            const tfMap = new Map(); doc.tokens.forEach(t => tfMap.set(t, (tfMap.get(t) || 0) + 1));
            const queryVector = new Map(); let weightSum = 0;
            doc.tokens.forEach(t => {
                const valueWeight = (tfMap.get(t) / doc.tokens.length) * Math.log((internalDocs.length + 1) / (1 + (idfMap.get(t) || 0)));
                queryVector.set(t, valueWeight); weightSum += valueWeight * valueWeight;
            });
            const rootNorm = Math.sqrt(weightSum) || 1;
            queryVector.forEach((v, k) => queryVector.set(k, v / rootNorm));
            knowledgeEntries.push({ title: doc.title, content: doc.content, vector: queryVector });
        });
    }

    function appendMessage(role, text) {
        if (!chatBody) return;
        const msgNode = document.createElement('div'); msgNode.className = `chat-message ${role}`;
        msgNode.innerHTML = `<div class="chat-bubble">${text}</div>`;
        chatBody.appendChild(msgNode);
        chatBody.scrollTop = chatBody.scrollHeight;
        if (role !== 'typing') {
            chatHistory.push({ role, text });
            sessionStorage.setItem('aureonChatHistory', JSON.stringify(chatHistory));
        }
    }

    function restoreChatHistory() {
        try {
            chatHistory = JSON.parse(sessionStorage.getItem('aureonChatHistory')) || [];
            chatHistory.forEach(h => appendMessage(h.role, h.text));
        } catch { chatHistory = []; }
    }

    const executeInputQueryMessage = () => {
        if (!chatInput) return;
        const stringVal = chatInput.value.trim(); if (!stringVal) return;
        appendMessage('user', stringVal); chatInput.value = '';

        const loaderIndicator = document.createElement('div'); loaderIndicator.className = 'chat-message bot';
        loaderIndicator.innerHTML = '<div class="chat-bubble typing-indicator"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>';
        chatBody.appendChild(loaderIndicator); chatBody.scrollTop = chatBody.scrollHeight;

        setTimeout(() => {
            loaderIndicator.remove();
            const terms = stringVal.toLowerCase().match(/[a-z0-9]+/g) || [];
            const termTf = new Map(); terms.forEach(t => termTf.set(t, (termTf.get(t) || 0) + 1));
            const vectorSet = new Map(); let squareAcc = 0;
            terms.forEach(t => {
                const dynamicWeight = (termTf.get(t) / terms.length) * Math.log((knowledgeEntries.length + 1) / (1 + (idfMap.get(t) || 0)));
                vectorSet.set(t, dynamicWeight); squareAcc += dynamicWeight * dynamicWeight;
            });
            const calculationNorm = Math.sqrt(squareAcc) || 1;
            vectorSet.forEach((v, k) => vectorSet.set(k, v / calculationNorm));

            let optimizedMatch = { score: 0, entry: null };
            knowledgeEntries.forEach(entry => {
                let dotAccumulator = 0; vectorSet.forEach((v, k) => { if (entry.vector.has(k)) dotAccumulator += v * entry.vector.get(k); });
                if (dotAccumulator > optimizedMatch.score) optimizedMatch = { score: dotAccumulator, entry };
            });

            if (optimizedMatch.score >= 0.05) {
                const contentSentences = optimizedMatch.entry.content.match(/[^.!?]+[.!?]+/g) || [optimizedMatch.entry.content];
                appendMessage('bot', `**${optimizedMatch.entry.title}**: ${contentSentences.slice(0, 2).join(' ').trim()}`);
            } else {
                appendMessage('bot', "I couldn't locate precise matching parameters inside our public knowledge documentation matrices.");
            }
        }, 1200);
    };

    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            const isOpen = chatWidget?.classList.toggle('open');
            if (chatToggle) {
                chatToggle.setAttribute('aria-expanded', chatWidget?.classList.contains('open') ? 'true' : 'false');
            }
            if (chatWidget?.classList.contains('open')) {
                chatWidget.setAttribute('aria-hidden', 'false');
                initializeChatbot();
                chatInput?.focus();
            } else {
                chatWidget?.setAttribute('aria-hidden', 'true');
            }
        });
        document.getElementById('chatClose')?.addEventListener('click', () => {
            chatWidget?.classList.remove('open');
            chatWidget?.setAttribute('aria-hidden', 'true');
            chatToggle.setAttribute('aria-expanded', 'false');
        });
        document.getElementById('chatSend')?.addEventListener('click', executeInputQueryMessage);
        chatInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') executeInputQueryMessage(); });
    }

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