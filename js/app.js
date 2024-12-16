document.querySelector(".header__btn-hamburguesa").addEventListener("click", animateBars);

let line1__bars = document.querySelector(".header__linea-uno");
let line2__bars = document.querySelector(".header__linea-dos");
let line3__bars = document.querySelector(".header__linea-tres");

let container__menu = document.querySelector('.lista-menu');

function animateBars(){
  line1__bars.classList.toggle("header__linea-activa-uno");
  line2__bars.classList.toggle("header__linea-activa-dos");
  line3__bars.classList.toggle("header__linea-activa-tres");
  
  container__menu.classList.toggle("header__menu-activo");
  
}

// remover clase 

document.querySelector(".item-nav-1").addEventListener("click", closeMenu);
document.querySelector(".item-nav-2").addEventListener("click", closeMenu);
document.querySelector(".item-nav-3").addEventListener("click", closeMenu);
document.querySelector(".item-nav-4").addEventListener("click", closeMenu);

function closeMenu() {
  container__menu.classList.remove("header__menu-activo");
  line1__bars.classList.remove("header__linea-activa-uno");
  line2__bars.classList.remove("header__linea-activa-dos");
  line3__bars.classList.remove("header__linea-activa-tres");
}









/* const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
}); */