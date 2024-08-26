document.addEventListener('DOMContentLoaded', function () {
    const rostockElement = document.querySelector('.rostok');

    if (!rostockElement) return; // Exit if the element is not found

    let lastScrollTop = 0;
    const parallaxFactor = window.innerWidth <= 768 ? 0.3 : 0.5; // Reduce parallax effect on smaller screens

    function updateParallax() {
        const scrollPosition = window.scrollY;
        const parallaxEffect = scrollPosition * parallaxFactor;

        // Use requestAnimationFrame for smoother animation
        requestAnimationFrame(() => {
            rostockElement.style.transform = `translateY(${parallaxEffect}px)`;
        });
    }

    // Throttle function to limit the frequency of scroll event handling
    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function() {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function () {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }

    // Attach the throttled updateParallax function to the scroll event
    window.addEventListener('scroll', throttle(updateParallax, 30)); // Adjust throttle limit as needed
});
