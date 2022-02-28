'use strict';

const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.header__burger');
const menuCloseBtn = document.querySelector('.menu__close');

burgerBtn.addEventListener('click', () => {
    menu.classList.add('menu_active');
    document.body.classList.add('lock');
});

menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    document.body.classList.remove('lock');
});