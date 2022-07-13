'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const ycombCard = document.querySelectorAll('.y-comb-card');
const ewCard = document.querySelectorAll('.ew-card');
const body = document.body;

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

// navMenuBtn.addEventListener('click', navToggleFunc);
// navCloseBtn.addEventListener('click', navToggleFunc);

// theme toggle variables
// const themeBtn = document.querySelectorAll('.theme-btn');

//toggle btns
const yBtnNav = document.querySelector('.y-comb');
const ewBtnNav = document.querySelector('.ew');
const yBtnTopics = document.querySelector('.y-comb-topic');
const ewBtnTopics = document.querySelector('.ew-topic');
const removeTopics = document.querySelector('.remove-topic');
const removeBtnNav = document.querySelector('.remove-topic-nav');

//toggle implementation
// yBtnNav.addEventListener('click', catToggleY);
// yBtnTopics.addEventListener('click', catToggleY);

// ewBtnNav.addEventListener('click', catToggleE);
// ewBtnTopics.addEventListener('click', catToggleE);

// removeTopics.addEventListener('click', removeTopic);
// removeBtnNav.addEventListener('click', removeTopic);

// for (let i = 0; i < themeBtn.length; i++) {
//     themeBtn[i].addEventListener('click', themeToggle);
// }

// gsap animation ========================================================================================
// const blogCards = document.querySelectorAll('.blog-card');

// gsap.registerPlugin(ScrollTrigger);

// blogCards.forEach(element => {
//     gsap.from(`.${element.className.split(' ')[2]}`, {
//         scrollTrigger: {
//             trigger: `.${element.className.split(' ')[2]}`,
//             toggleActions: 'restart none restart none',
//         },
//         opacity: 0,
//         duration: 1,
//         x: -300,
//     });
// });
