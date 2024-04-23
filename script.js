'use strict';

const navLinks = document.querySelector('.nav__links');
const barToggle = document.getElementById('bar');
const navClose = document.querySelector('.nav--close');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');




//////////////////////////////////////////

// Burger Menu

const toggleBar = function (e) {
    e.preventDefault();

    if (navLinks.style.right === '-300px') {
        navLinks.style.right = '0';
    } else {
        navLinks.style.right = '-300px';
    }
};
barToggle.addEventListener('click', toggleBar);
navClose.addEventListener('click', toggleBar);


// Menu fade animation

const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
        });

        logo.style.opacity = this;
    }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));


// -- Sticky navigation

const navHeight = nav.getBoundingClientRect().height;


const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);



// // Reveal sections

// const revealSection = function (entries, observer) {
//     const [entry] = entries;

//     if (!entry.isIntersecting) return;

//     entry.target.classList.remove('section--hidden');
// }

// const sectionObserver = new IntersectionObserver(revealSection, {
//     root: null,
//     threshold: 0.15,
// });

// allSections.forEach(function (section) {
//     sectionObserver.observe(section);
//     section.classList.add('section--hidden');
// });




// Tabbed component
tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);


    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));

    tabsContent.forEach(c => c.classList.remove('operations__content--active'));
    // Activate tab
    clicked.classList.add('operations__tab--active');

    // Activate content area
    // console.log(clicked.dataset.tab);
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});


///////////////////////////////////////////// Slider

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`));
}

goToSlide(0);

const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    };
    goToSlide(curSlide)
};

const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    };
    goToSlide(curSlide)
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
});