'use strict';

const navLinks = document.querySelector('.nav__links');
const barToggle = document.getElementById('bar');
const navClose = document.querySelector('.nav--close');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContainer2 = document.querySelector('.operations__tab-container2');
const tabsContainer3 = document.querySelector('.operations__tab-container3');
const tabs = document.querySelectorAll('.operations__tab');
const tabs2 = document.querySelectorAll('.operations__tab2');
const tabs3 = document.querySelectorAll('.operations__tab3');
const tabsContent = document.querySelectorAll('.operations__content');
const tabsContent2 = document.querySelectorAll('.operations__content2');
const tabsContent3 = document.querySelectorAll('.operations__content3');
const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnCloseModal2 = document.querySelector('.btn--close-modal2');
const btnCloseModal3 = document.querySelector('.btn--close-modal3');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnsOpenModal2 = document.querySelectorAll('.btn--show-modal2');
const btnsOpenModal3 = document.querySelectorAll('.btn--show-modal3');


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


// Modal window


const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal2 = function (e) {
    e.preventDefault();
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal2 = function () {
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal3 = function (e) {
    e.preventDefault();
    modal3.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal3 = function () {
    modal3.classList.add('hidden');
    overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnsOpenModal2.forEach(btn => btn.addEventListener('click', openModal2));
btnsOpenModal3.forEach(btn => btn.addEventListener('click', openModal3));

btnCloseModal.addEventListener('click', closeModal);
btnCloseModal2.addEventListener('click', closeModal2);
btnCloseModal3.addEventListener('click', closeModal3);

overlay.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal2);
overlay.addEventListener('click', closeModal3);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden') || !modal2.classList.contains('hidden') || !modal3.classList.contains('hidden')) {
        closeModal();
        closeModal2();
    }
});



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

// Tabbed component 2
tabsContainer2.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab2');
    console.log(clicked);


    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs2.forEach(t => t.classList.remove('operations__tab--active2'));

    tabsContent2.forEach(c => c.classList.remove('operations__content--active2'));
    // Activate tab
    clicked.classList.add('operations__tab--active2');

    // Activate content area
    // console.log(clicked.dataset.tab);
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active2');

});

// Tabbed component 3
tabsContainer3.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab3');
    console.log(clicked);


    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs3.forEach(t => t.classList.remove('operations__tab--active3'));

    tabsContent3.forEach(c => c.classList.remove('operations__content--active3'));
    // Activate tab
    clicked.classList.add('operations__tab--active3');

    // Activate content area
    // console.log(clicked.dataset.tab);
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active3');

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



///////////////////////////////////////////// Slider2

const slides2 = document.querySelectorAll('.slide2');
const slider2 = document.querySelector('.slider2');

const goToSlide2 = function (slide2) {
    slides2.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`));
}

goToSlide2(0);

const nextSlide2 = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    };
    goToSlide(curSlide)
};

const prevSlide2 = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    };
    goToSlide2(curSlide)
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
});