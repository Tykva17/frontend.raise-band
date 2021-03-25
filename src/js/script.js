///COUNTER /////
const quantity = document.querySelector('#num');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');



plus.addEventListener('click',function () {
    quantity.value++;
});
minus.addEventListener('click',function () {

    if(quantity.value < 1){
        console.log('m1');
    }else {
        quantity.value--;
    }
});

///// END COUNTER /////

// MENU TOGGLE ANIMATION //
let menuToggler = document.querySelectorAll('.header-mob-menu-toggler')[0];
let menuMob = document.querySelectorAll('.header-mob-menu-list')[0];


menuToggler.addEventListener('click', function () {
    menuToggler.classList.toggle('active');
    menuMob.classList.toggle('active');

});

//END MENU TOGGLE ANIMATION //


$('form.submit_form').on('submit', function (e) {
    e.preventDefault();
    var obj = {};
    var arr = $(this).serializeArray();
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i].name] = arr[i].value
        // console.log(arr[i].name, arr[i].value)
    }
    console.log("OBJ:" ,obj)
});