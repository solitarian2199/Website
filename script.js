const pageLoader = document.getElementById('pageLoader');
const scrollProgress = document.getElementById('scrollProgress');
const counters = document.querySelectorAll('.metric-number');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const siteHeader = document.querySelector('.site-header');
const chatWidget = document.getElementById('aureonChatbot');
const chatToggle = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

let chatInitialized = false;
let chatHistory = [];
const chatWelcome = "Welcome to Aureon. I'm Eon, your AI assistant. I can help you learn about our vision, sectors, leadership, growth strategy, and ventures.";
const chatNotFound = "I could not find that information within Aureon's published content.";
const knowledgeEntries = [];
const idfMap = new Map();

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
        });
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

function updateHeaderState() {
    if (!siteHeader) return;
    siteHeader.classList.toggle('scrolled', getScrollTop() > 18);
}

function initializeChatbot() {
    if (chatInitialized) return;
    chatInitialized = true;
    buildKnowledgeBase();
    restoreChatHistory();
    if (!chatHistory.length) {
        appendMessage('bot', chatWelcome);
    }
    observeContentChanges();
}

function buildKnowledgeBase() {
    knowledgeEntries.length = 0;
    idfMap.clear();
    const sectionNodes = Array.from(document.querySelectorAll('main section, main article, main .hero-section'));
    const documents = [];

    sectionNodes.forEach((section, index) => {
        const heading = section.querySelector('h1, h2, h3, .eyebrow')?.textContent.trim() || section.id || `Section ${index + 1}`;
        const paragraphText = Array.from(section.querySelectorAll('p, li'))
            .map(el => el.textContent.trim())
            .filter(Boolean)
            .join(' ');

        if (!paragraphText) return;

        const content = `${heading}. ${paragraphText}`;
        const tokens = tokenize(content);
        const terms = Array.from(new Set(tokens));
        terms.forEach(term => idfMap.set(term, (idfMap.get(term) || 0) + 1));

        documents.push({id: index, title: heading, content, tokens});
    });

    const docCount = documents.length || 1;
    documents.forEach(doc => {
        const tf = new Map();
        doc.tokens.forEach(term => tf.set(term, (tf.get(term) || 0) + 1));
        const vector = new Map();
        let norm = 0;

        doc.tokens.forEach(term => {
            const tfValue = tf.get(term) / doc.tokens.length;
            const idfValue = Math.log((docCount + 1) / (1 + (idfMap.get(term) || 0)));
            const weight = tfValue * idfValue;
            vector.set(term, weight);
            norm += weight * weight;
        });

        norm = Math.sqrt(norm) || 1;
        vector.forEach((value, key) => vector.set(key, value / norm));
        knowledgeEntries.push({title: doc.title, content: doc.content, vector});
    });
}

function tokenize(text) {
    return text.toLowerCase().match(/[a-z0-9]+/g) || [];
}

function buildQueryVector(query) {
    const tokens = tokenize(query);
    const tf = new Map();
    tokens.forEach(term => tf.set(term, (tf.get(term) || 0) + 1));
    const vector = new Map();
    let norm = 0;

    tokens.forEach(term => {
        const tfValue = tf.get(term) / tokens.length;
        const idfValue = Math.log((knowledgeEntries.length + 1) / (1 + (idfMap.get(term) || 0)));
        const weight = tfValue * idfValue;
        vector.set(term, weight);
        norm += weight * weight;
    });

    norm = Math.sqrt(norm) || 1;
    vector.forEach((value, key) => vector.set(key, value / norm));
    return vector;
}

function scoreDocument(queryVector, docVector) {
    let score = 0;
    queryVector.forEach((value, key) => {
        if (docVector.has(key)) {
            score += value * docVector.get(key);
        }
    });
    return score;
}

function findBestMatch(query) {
    if (!knowledgeEntries.length) return null;
    const queryVector = buildQueryVector(query);
    let best = {score: 0, entry: null};

    knowledgeEntries.forEach(entry => {
        const score = scoreDocument(queryVector, entry.vector);
        if (score > best.score) {
            best = {score, entry};
        }
    });

    return best.score >= 0.06 ? best.entry : null;
}

function summarizeContent(text, maxLength = 240) {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    let summary = sentences.slice(0, 2).join(' ').trim();
    if (summary.length > maxLength) {
        summary = summary.slice(0, maxLength).trim();
        if (!summary.endsWith('.')) summary += '...';
    }
    return summary;
}

function processChatQuery(query) {
    initializeChatbot();
    const match = findBestMatch(query);
    if (!match) {
        appendMessage('bot', chatNotFound);
        return;
    }
    appendMessage('bot', `${match.title}: ${summarizeContent(match.content)}`);
}

function appendMessage(role, text) {
    const message = document.createElement('div');
    message.className = `chat-message ${role}`;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = text;
    message.appendChild(bubble);
    chatBody.appendChild(message);
    chatBody.scrollTop = chatBody.scrollHeight;
    if (role === 'user' || role === 'bot') {
        saveChatHistory(role, text);
    }
}

function saveChatHistory(role, text) {
    chatHistory.push({role, text, time: Date.now()});
    sessionStorage.setItem('aureonChatHistory', JSON.stringify(chatHistory));
}

function restoreChatHistory() {
    const stored = sessionStorage.getItem('aureonChatHistory');
    if (!stored) return;
    try {
        chatHistory = JSON.parse(stored);
        chatHistory.forEach(entry => {
            appendMessage(entry.role, entry.text);
        });
    } catch {
        chatHistory = [];
    }
}

function handleSendMessage() {
    const value = chatInput.value.trim();
    if (!value) return;
    appendMessage('user', value);
    chatInput.value = '';
    const typingDots = createTypingIndicator();
    chatBody.appendChild(typingDots);
    chatBody.scrollTop = chatBody.scrollHeight;
    setTimeout(() => {
        typingDots.remove();
        processChatQuery(value);
    }, 700);
}

function createTypingIndicator() {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-message bot';
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble typing-indicator';
    bubble.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
    wrapper.appendChild(bubble);
    return wrapper;
}

function openChat() {
    if (!chatWidget) return;
    chatWidget.classList.add('open');
    chatToggle?.setAttribute('aria-expanded', 'true');
    chatWidget.setAttribute('aria-hidden', 'false');
    chatInput?.focus();
    initializeChatbot();
}

function closeChat() {
    if (!chatWidget) return;
    chatWidget.classList.remove('open');
    chatToggle?.setAttribute('aria-expanded', 'false');
    chatWidget.setAttribute('aria-hidden', 'true');
}

function observeContentChanges() {
    const target = document.querySelector('main');
    if (!target) return;
    const observer = new MutationObserver(() => {
        buildKnowledgeBase();
    });
    observer.observe(target, {childList: true, subtree: true, characterData: true});
}

if (chatToggle && chatPanel && chatClose && chatInput && chatSend) {
    chatToggle.addEventListener('click', () => {
        if (chatWidget?.classList.contains('open')) {
            closeChat();
        } else {
            openChat();
        }
    });

    chatClose.addEventListener('click', closeChat);
    chatSend.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keydown', event => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && chatWidget?.classList.contains('open')) {
            closeChat();
        }
    });
}

window.addEventListener('load', () => {
    setTimeout(hideLoader, 800);
    animateCounters();
    updateScrollProgress();
    updateHeaderState();
});

window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateHeaderState();
});

window.addEventListener('resize', () => {
    updateScrollProgress();
    updateHeaderState();
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
