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

    /* auto percent */
    const percentMeans = document.querySelectorAll('.percent-item__mean'),
        percentLines = document.querySelectorAll('.percent-item__filled-line');

    percentMeans.forEach((item, i) => {
        percentLines[i].style.width = item.innerHTML;
    });
    
    /* mobile skills slider */
    const swiper = new Swiper('.skills__slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

});