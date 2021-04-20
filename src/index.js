const menuBtn = document.querySelector('.menu-btn');
const drawer = document.querySelector('.drawer');
const backDrop = document.querySelector('.backdrop');
const openDrawer = () => {
  drawer.classList.toggle('active');
  menuBtn.classList.toggle('open');
  backDrop.classList.toggle('open');
};

menuBtn.addEventListener('click', openDrawer);
backDrop.addEventListener('click', openDrawer);
