(function() {
    let ticking = false;
    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('.page');
    const sectionCount = sections.length;

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

    function scrollToSection(index) {
        if (index >= 0 && index < sectionCount) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
            currentSectionIndex = index;
        }
    }

    function onKeyDown(event) {
        switch(event.key) {
            case 'ArrowDown':
                if (currentSectionIndex < sectionCount - 1) {
                    scrollToSection(currentSectionIndex + 1);
                }
                break;
            case 'ArrowUp':
                if (currentSectionIndex > 0) {
                    scrollToSection(currentSectionIndex - 1);
                }
                break;
            default:
                break;
        }
    }

    // Add scroll event listener
    document.addEventListener('scroll', onScroll);
    document.addEventListener('keydown', onKeyDown);

    // Disable parallax effect on mobile devices with small screens
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
        document.removeEventListener('scroll', onScroll);
    }
})();
