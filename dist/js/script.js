// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } 
    else {
        header.classList.remove('navbar-fixed');
    }
}



//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


//Carrousels
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.carousel-wrapper');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemsPerView = 3; // Number of items per view
    let index = 0;

    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    nextButton.addEventListener('click', function() {
        if (index < totalItems - itemsPerView) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', function() {
        if (index > 0) {
            index--;
        } else {
            index = totalItems - itemsPerView;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -index * (100 / itemsPerView);
        wrapper.style.transform = `translateX(${offset}%)`;
    }

    // Function to start the automatic carousel
    function startAutoSlide() {
        setInterval(() => {
            if (index < totalItems - itemsPerView) {
                index++;
            } else {
                index = 0;
            }
            updateCarousel();
        }, 5000); // Change slide every 3 seconds
    }

    // Start the automatic carousel when the DOM is loaded
    startAutoSlide();
});


//Animation
document.addEventListener('DOMContentLoaded', function() {
    const biodata = document.getElementById('Biodata');
    const gambar = document.getElementById('Gambar');
    const quotes = document.getElementById('quotes');
    const about = document.getElementById('about');

    // Function to check if an element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation classes when elements are in viewport
    function addAnimation() {
        if (isElementInViewport(gambar)) {
            gambar.classList.add('animate-from-left');
        }
        if (isElementInViewport(biodata)) {
            biodata.classList.add('animate-from-right');
        }
        if (isElementInViewport(quotes)) {
            quotes.classList.add('animate-from-top');
        }
        if (isElementInViewport(about)) {
            about.classList.add('animate-from-left');
        }
    }

    // Add animation on scroll and on load
    window.addEventListener('scroll', addAnimation);
    addAnimation();
});


//Scroll Navbar
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});