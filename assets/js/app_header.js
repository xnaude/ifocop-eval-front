'use strict;'

window.addEventListener('DOMContentLoaded', () => {
    
    let btn_burger = document.querySelector('#burger-toggle');

    btn_burger.addEventListener('change', function () {

        if (btn_burger.checked) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = '';
        }
    });

    window.addEventListener('scroll', function () {

        if(window.pageYOffset) {
            document.querySelector('.nav-item-2').classList.add('d-none')
            document.querySelector('.div-logo').maxHeight = "5vh";

        }else{
            document.querySelector('.nav-item-2').classList.remove('d-none')
            document.querySelector('.div-logo').maxHeight = "10vh";
        }
    });

});
