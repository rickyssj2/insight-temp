'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
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
    } else {
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

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click', themeToggle);
}
