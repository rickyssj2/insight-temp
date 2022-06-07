'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
const ycombCard = document.querySelectorAll('.y-comb-card');
const ewCard = document.querySelectorAll('.ew-card');
const body = document.body;

//Theme toggle function
const themeToggle = function () {
    if (localStorage.getItem('theme') == 'light') {
        console.log('switched to dark');
        // change localStorage value
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'dark');

        // toggle `light-theme` & `dark-theme` class from `body`
        // when clicked `theme-btn`
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');

        for (let i = 0; i < themeBtn.length; i++) {
            // When the `theme-btn` is clicked,
            // it toggles classes between `light` & `dark` for all `theme-btn`.
            themeBtn[i].classList.remove('light');
            themeBtn[i].classList.add('dark');
        }
    } else if (localStorage.getItem('theme') == 'dark') {
        console.log('switched to light');
        // change localStorage value
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'light');
        // toggle `light-theme` & `dark-theme` class from `body`
        // when clicked `theme-btn`
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');

        for (let i = 0; i < themeBtn.length; i++) {
            // When the `theme-btn` is clicked,
            // it toggles classes between `light` & `dark` for all `theme-btn`.
            themeBtn[i].classList.add('light');
            themeBtn[i].classList.remove('dark');
        }
    } else {
        localStorage.setItem('theme', 'light');
    }
};

body.onload = function () {
    if (localStorage.getItem('theme') == 'dark') {
        console.log('switched to dark');
        // change localStorage value
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'dark');

        // toggle `light-theme` & `dark-theme` class from `body`
        // when clicked `theme-btn`
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');

        for (let i = 0; i < themeBtn.length; i++) {
            // When the `theme-btn` is clicked,
            // it toggles classes between `light` & `dark` for all `theme-btn`.
            themeBtn[i].classList.remove('light');
            themeBtn[i].classList.add('dark');
        }
    } else if (localStorage.getItem('theme') == 'light') {
        console.log('switched to light');
        // change localStorage value
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'light');
        // toggle `light-theme` & `dark-theme` class from `body`
        // when clicked `theme-btn`
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');

        for (let i = 0; i < themeBtn.length; i++) {
            // When the `theme-btn` is clicked,
            // it toggles classes between `light` & `dark` for all `theme-btn`.
            themeBtn[i].classList.add('light');
            themeBtn[i].classList.remove('dark');
        }
    } else {
        localStorage.setItem('theme', 'light');
    }
};

// navToggle function
const navToggleFunc = function () {
    nav.classList.toggle('active');
};

// category toggle function
const catToggleY = function () {
    for (let i = 0; i < ycombCard.length; i++) {
        ycombCard[i].classList.remove('hidden');
        ewCard[i].classList.add('hidden');
    }
};

const catToggleE = function () {
    for (let i = 0; i < ewCard.length; i++) {
        ycombCard[i].classList.add('hidden');
        ewCard[i].classList.remove('hidden');
    }
};

const removeTopic = function () {
    for (let i = 0; i < ewCard.length; i++) {
        ycombCard[i].classList.remove('hidden');
        ewCard[i].classList.remove('hidden');
    }
};

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

//toggle btns
const yBtnNav = document.querySelector('.y-comb');
const ewBtnNav = document.querySelector('.ew');
const yBtnTopics = document.querySelector('.y-comb-topic');
const ewBtnTopics = document.querySelector('.ew-topic');
const removeTopics = document.querySelector('.remove-topic');
const removeBtnNav = document.querySelector('.remove-topic-nav');

//toggle implementation
yBtnNav.addEventListener('click', catToggleY);
yBtnTopics.addEventListener('click', catToggleY);

ewBtnNav.addEventListener('click', catToggleE);
ewBtnTopics.addEventListener('click', catToggleE);

removeTopics.addEventListener('click', removeTopic);
removeBtnNav.addEventListener('click', removeTopic);

for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click', themeToggle);
}

// gsap animation ========================================================================================
const blogCards = document.querySelectorAll('.blog-card');

gsap.registerPlugin(ScrollTrigger);

blogCards.forEach(element => {
    gsap.from(`.${element.className.split(' ')[2]}`, {
        scrollTrigger: {
            trigger: `.${element.className.split(' ')[2]}`,
            toggleActions: 'restart none restart none',
        },
        opacity: 0,
        duration: 1,
        x: -300,
    });
});
