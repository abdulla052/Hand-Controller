const menuBtn = document.querySelector('.menu-btn');
const menuBtnLinks = document.querySelector('.dropdown-menu a');
const dropDownMenu = document.querySelector('.dropdown-menu');

menuBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
}
