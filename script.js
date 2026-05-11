document.addEventListener('mousemove', (e) => {
    const bg = document.querySelector('.background-container');
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    
    bg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Baby Earth Landing Page Ready');
});
