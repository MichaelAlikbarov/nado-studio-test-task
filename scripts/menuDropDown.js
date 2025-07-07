const menu = document.querySelector('.menu-drop-down__list');
const button = document.querySelector('.menu-drop-down__button');
const menuLinks = document.querySelectorAll('.menu-drop-down__link');

button.addEventListener('click', () => {
  const isOpen = button.classList.toggle('active');

  button.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-hidden', String(!isOpen));
  menu.classList.toggle('active', isOpen);

  menuLinks.forEach(link => link.setAttribute('tabindex', isOpen ? '0' : '-1'));
});