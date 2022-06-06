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

    /* close menu after click */
    const menuList = document.querySelector('.menu__list');
    
    menuList.addEventListener('click', (e) => {
        menuList.querySelectorAll('a').forEach(item => {
            if (e.target === item) {
                menuHamburger.classList.remove('active');
            }
        });
    });
    
    /* mobile skills slider */
    const swiper = new Swiper('.skills__slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 2500,
            stopOnLastSlide: false,
            disableOnInteraction: true
        },
        effect: 'flip',
        flipEffect: {
            slideShadows: true,
            limitRotation: true
        }
    });

    /* mobile portfolio slider */
    const swiper2 = new Swiper('.portfolio__slider', {
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        autoplay: {
            delay: 2500,
            stopOnLastSlide: false,
            disableOnInteraction: true
        },
        effect: 'cube',
            cubeEffect: {
            slideShadows: true,
        },
    });

    /* check available skills */
    const skills = document.querySelectorAll('.skills__item');

    function checkSkills() {
        skills.forEach(item => {
            if (item.classList.contains('skills__item_unavailable')) {
                item.insertAdjacentHTML('afterbegin', '<div class="unavailable-overlay"><div>Пока не работает, но скоро откроется!</div></div>');
            }
        });
    }
    
    checkSkills();
    
    /* blog modal */
    $('.blog').on('click', function(e) {
        e.preventDefault();
        $('.overlay, #development').fadeIn();
    });

    /* send feedback form */
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #development').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            setTimeout(function(){
                $('.overlay, #thanks').fadeOut();
            }, 5000);
            $('form').trigger('reset');
        });
        return false;
    });

    /* close modal */
    $('.modal__close, .overlay').on('click', function(e) {
        if ($(e.target).hasClass('overlay') || $(e.target).hasClass('modal__close')) {
            $('.overlay').fadeOut();
        };
    });
    
    /* wow init */
    new WOW().init();
    
});