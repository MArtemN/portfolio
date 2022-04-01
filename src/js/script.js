document.addEventListener("DOMContentLoaded", function(e) {
    
    /* hamburger menu */
    const hamburgerButton = document.querySelector('.hamburger'),
        closeMenuButton = document.querySelector('.menu__close');
        menuHamburger = document.querySelector('.menu');

    hamburgerButton.addEventListener('click', () => {
        menuHamburger.classList.toggle('active');
    });

    closeMenuButton.addEventListener('click', () => {
        menuHamburger.classList.toggle('active');
    });

});