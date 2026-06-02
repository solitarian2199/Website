const ctaButton = document.getElementById('ctaButton');
const demoButton = document.getElementById('demoButton');

ctaButton.addEventListener('click', () => {
    window.location.href = '#features';
});

demoButton.addEventListener('click', () => {
    alert('Aureon is ready to bring your brand to life with immersive web design.');
});