document.addEventListener('mousemove', (e) => {
    const img = document.getElementById('main-image');
    if (!img) return;
    
    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;
    
    img.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Baby Earth Site Ready');
});
