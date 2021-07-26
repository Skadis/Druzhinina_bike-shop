'use strict';

const menu = document.querySelector('.main-nav');
const menuButton = menu.querySelector('.main-nav__toggle');
const body = document.querySelector('.page-body');
const menuLinks = menu.querySelectorAll('.main-nav__link');

menu.classList.remove('main-nav--no-js');
menu.classList.add('main-nav--open');

const switchMenu = () => {
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
}

menuButton.addEventListener('click', (event) => {
  switchMenu();
});

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const linkID = document.querySelector(link.getAttribute('href'));
    event.preventDefault();
    switchMenu();
    if (body.classList.contains('lock')) {
      body.classList.remove('lock');
    };
    linkID.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
