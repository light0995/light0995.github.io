window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  const menuItem = document.querySelectorAll(".menu_item");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });


  menu.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
  })





















});
