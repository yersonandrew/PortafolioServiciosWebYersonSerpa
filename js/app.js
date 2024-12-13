document.querySelector(".header__btn-hamburguesa ").addEventListener("click", animateBars);

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