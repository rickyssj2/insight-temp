const template = document.createElement('template');
template.innerHTML = `
<style>
/*-----------------------------------*\ 
  #RESET
\*-----------------------------------*/
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

img,
button {
    display: block;
}

a,
span {
    display: inline-block;
}

button {
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
}

html {
    font-family: 'Inter', sans-serif;
    font-size: var(--fs-base); /* base font-size (0.85rem = 13.6px) */
    line-height: 1.8;
}

:focus {
    outline-offset: 4px;
}

/*-----------------------------------*\ 
  #BASE STYLE
\*-----------------------------------*/


.h3 {
    display: block;
    color: var(--foreground-primary);
    font-size: var(--fs-3);
    font-weight: 700;
}

/*-----------------------------------*\ 
  #REUSED STYLE
\*-----------------------------------*/

.hidden {
    display: none;
}

.container {
    margin-inline: auto;
    margin: auto; /* fallback for margin-inline */
    padding: 0 15px;
}

/*-----------------------------------*\ 
  #HEADER
\*-----------------------------------*/

.header {
    background: var(--background-primary);
    z-index: 1000;
}

header .flex-wrapper {
    display: none;
}
.sticky {
    position: sticky;
    top: 0;
}

.navbar {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 15px 0;
}


.logo-light {
    filter: brightness(0) invert(42%) sepia(57%) saturate(825%)
        hue-rotate(196deg) brightness(108%) contrast(84%);
}

.logo-dark {
    filter: brightness(0) invert(1);
}

header .btn-group {
    display: flex;
    align-items: center;
    gap: 15px;
}

.theme-btn-mobile,
.nav-menu-btn,
.nav-close-btn {
    background: var(--action-secondary);
    color: var(--foreground-tertiary);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 25px;
}

:is(.theme-btn-mobile, .nav-menu-btn, .nav-close-btn):hover {
    background: var(--accent);
    color: var(--white);
}

.theme-btn-mobile ion-icon {
    display: none;
}

.theme-btn-mobile.light .sun,
.theme-btn-mobile.dark .moon {
    display: block;
}

.mobile-nav {
    position: fixed;
    inset: 0;
    background: var(--background-primary);
    padding: 70px 20px;
    overflow: auto;
    overscroll-behavior: contain;
    transform: translateX(100%);
    visibility: hidden;
    transition: 0.5s cubic-bezier(1, 0, 0.3, 0.7);
    z-index: 10;
}

.mobile-nav.active {
    transform: translateX(0);
    visibility: visible;
}

.nav-close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
}

.mobile-nav .wrapper {
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--action-primary);
}

.mobile-nav .nav-title {
    margin-bottom: 1rem;
}

.mobile-nav .nav-item {
    margin-bottom: 0.5rem;
}

.mobile-nav .nav-link {
    font-size: var(--fs-3);
    color: var(--foreground-secondary);
}

.mobile-nav .nav-link:hover {
    color: var(--accent);
}

/*-----------------------------------*\ 
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 650px) {
    .container {
        padding: 0 30px;
    }

    .navbar {
        padding: 30px 0;
    }
}

@media (min-width: 768px) {
    /**
   * REUSED STYLE 
   */

    .container {
        max-width: 800px;
    }
}

@media (min-width: 1024px) {

    .container {
        max-width: 1150px;
    }

    header .btn-group {
        display: none;
    }

    header .flex-wrapper {
        display: flex;
        gap: 30px;
    }

    .desktop-nav {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .desktop-nav .nav-link {
        color: var(--foreground-secondary);
        font-weight: 700;
    }

    .desktop-nav .nav-link:hover {
        color: var(--accent);
    }

    .theme-btn-desktop {
        position: relative;
        background: var(--background-secondary);
        color: var(--white);
        width: 52px;
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 100px;
    }

    .theme-btn-desktop.light {
        background: linear-gradient(
            45deg,
            hsl(7, 100%, 71%),
            hsl(46, 100%, 65%)
        );
    }

    .theme-btn-desktop.dark {
        background: linear-gradient(
            45deg,
            hsl(225, 100%, 60%),
            hsl(296, 80%, 40%)
        );
    }

    .theme-btn-desktop::before {
        content: '';
        position: absolute;
        background: var(--white);
        width: 21px;
        height: 21px;
        border-radius: 30px;
        top: 50%;
        left: 3px;
        transform: translateY(-50%);
        box-shadow: 0 2px 10px -2px hsla(0, 0%, 0%, 0.05);
        z-index: 2;
    }

    .theme-btn-desktop.dark::before {
        left: calc(100% - 24px);
    }
}
</style>
<header class="header sticky">
<div class="container nav-container">
    <nav class="navbar sticky-top fixed-nav">
        <a href="#" class = "insight-logo">
            <img src="../../assets/images/insight-iitb-logo.png" alt="insight logo" width="150"
                class="logo-light" />
            <img src="../../assets/images/insight-iitb-logo.png" alt="insight logo" width="150" class="logo-dark" />
        </a>

        <div class="btn-group">
            <button class="theme-btn theme-btn-mobile light">
                <ion-icon name="moon" class="moon"></ion-icon>
                <ion-icon name="sunny" class="sun"></ion-icon>
            </button>

            <button class="nav-menu-btn">
                <ion-icon name="menu-outline"></ion-icon>
            </button>
        </div>

        <div class="flex-wrapper">
            <ul class="desktop-nav">
                <li>
                    <a href="https://insightiitb.netlify.app/" class="nav-link">Home</a>
                </li>

                <li>
                    <a href="./summerblog.html" class="nav-link">Summer Blog</a>
                </li>

                <li>
                    <a href="https://www.insightiitb.org/ourteam/" class="nav-link">Our Team</a>
                </li>
            </ul>

            <button class="theme-btn theme-btn-desktop light">
                <ion-icon name="moon" class="moon"></ion-icon>
                <ion-icon name="sunny" class="sun"></ion-icon>
            </button>
        </div>

        <div class="mobile-nav">
            <button class="nav-close-btn">
                <ion-icon name="close-outline"></ion-icon>
            </button>

            <div class="wrapper">
                <p class="h3 nav-title">Main Menu</p>

                <ul>
                    <li class="nav-item">
                        <a href="https://insightiitb.netlify.app/" class="nav-link">Home</a>
                    </li>

                    <li class="nav-item">
                        <a href= "./summerblog.html" class="nav-link">Summer Blog</a>
                    </li>

                    <li class="nav-item">
                        <a href="https://www.insightiitb.org/ourteam/" class="nav-link">Our Team</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</header>
`;

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const themeBtn = this.shadowRoot.querySelectorAll('.theme-btn');
        const navMenuBtn = this.shadowRoot.querySelector('.nav-menu-btn');
        const navCloseBtn = this.shadowRoot.querySelector('.nav-close-btn');
        const logoLight = this.shadowRoot.querySelector('.logo-light');
        const logoDark = this.shadowRoot.querySelector('.logo-dark');
        const nav = this.shadowRoot.querySelector('.mobile-nav');

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
                logoLight.classList.add('hidden');
                logoDark.classList.remove('hidden');

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
                logoLight.classList.remove('hidden');
                logoDark.classList.add('hidden');

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
        //Toggle mobile sidebar nav class active
        const navToggleFunc = function () {
            nav.classList.toggle('active');
        };
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
                logoLight.classList.add('hidden');
                logoDark.classList.remove('hidden');

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
                logoLight.classList.remove('hidden');
                logoDark.classList.add('hidden');

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

        navMenuBtn.addEventListener('click', navToggleFunc);
        navCloseBtn.addEventListener('click', navToggleFunc);
        for (let i = 0; i < themeBtn.length; i++) {
            themeBtn[i].addEventListener('click', themeToggle);
        }
    }
}

window.customElements.define('app-navbar', NavBar);
