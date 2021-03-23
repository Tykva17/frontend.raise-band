// MENU TOGGLE ANIMATION //
let menuToggler = document.querySelectorAll('.header-mob-menu-toggler')[0];
let menuMob = document.querySelectorAll('.header-mob-menu-list');


menuToggler.addEventListener('click', function () {
    menuToggler.classList.toggle('active');
    document.querySelectorAll('.header-mob-menu-list').classList.toggle('active');

});

//END MENU TOGGLE ANIMATION //