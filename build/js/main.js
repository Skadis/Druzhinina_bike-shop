'use strict';

const menu = document.querySelector('.main-nav');
const menuButton = menu.querySelector('.main-nav__toggle');
const body = document.querySelector('.page__body');

menuButton.addEventListener('click', (event) => {
  if (menu.classList.contains('main-nav--close')) {
    menu.classList.remove('main-nav--close');
    menu.classList.add('main-nav--open');
    body.classList.remove('lock');
    focusManager.release(menuButton);
  } else {
    menu.classList.add('main-nav--close');
    menu.classList.remove('main-nav--opene');
    body.classList.add('lock');
    focusManager.capture(menu);
  }
});
