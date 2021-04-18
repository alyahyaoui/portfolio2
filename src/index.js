const menuBtn = document.querySelector('.menu-btn');
const drawer = document.querySelector('.drawer');

menuBtn.addEventListener('click', () => {
  drawer.classList.toggle('active');
  menuBtn.classList.toggle('open');
});
