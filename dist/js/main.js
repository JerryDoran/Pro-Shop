const openMenu = document.querySelector('.open-menu-icon');
const outerNav = document.querySelector('.main-nav-outer');
const closeMenu = document.querySelector('.menu-close-icon');

openMenu.addEventListener('click', () => {
  outerNav.classList.add('open-menu');
});

closeMenu.addEventListener('click', () => {
  outerNav.classList.remove('open-menu');
});
