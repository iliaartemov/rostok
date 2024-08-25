(function() {
    let ticking = false;

    function updateParallax() {
        const rostockElement = document.querySelector('.rostok');
        if (rostockElement) {
            const scrollPosition = window.scrollY;
            const parallaxEffect = scrollPosition * 0.5; 
            rostockElement.style.transform = `translateY(${parallaxEffect}px)`;
        }
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // Add scroll event listener
    document.addEventListener('scroll', onScroll);

    // Disable parallax effect on mobile devices with small screens
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
        document.removeEventListener('scroll', onScroll);
    }
})();
