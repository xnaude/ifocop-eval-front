'use strict;'

let btn_burger = document.querySelector('#burger-toggle');

btn_burger.addEventListener('change', function () {

    if (btn_burger.checked) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflow = '';
    }
})