const hamburger = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const mobileToggle = () => {
    hamburger.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

hamburger.addEventListener('click', mobileToggle)