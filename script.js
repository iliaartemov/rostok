// script.js

document.addEventListener('scroll', function () {
    const rostockElement = document.querySelector('.rostok');
    const scrollPosition = window.scrollY;

    // Adjust this value to control the parallax effect
    const parallaxEffect = scrollPosition * 0.5; 

    rostockElement.style.transform = `translateY(${parallaxEffect}px)`;
});

