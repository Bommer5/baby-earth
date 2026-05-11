document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.main-image-container');
    if (!container) return;
    
    const x = (window.innerWidth / 2 - e.pageX) / 80;
    const y = (window.innerHeight / 2 - e.pageY) / 80;
    
    container.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Baby Earth Site - Pro Background Ready');
});
