'use strict';
<<<<<<< HEAD

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
=======
>>>>>>> 391d10f1f6efd005da4cb666fd7545faf40e126b
