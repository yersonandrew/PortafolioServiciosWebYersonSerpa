document.querySelector(".header__btn-hamburguesa").addEventListener("click", animateBars);

let line1__bars = document.querySelector(".header__btn-hamburguesa-uno");
let line2__bars = document.querySelector(".header__btn-hamburguesa-dos");
let line3__bars = document.querySelector(".header__btn-hamburguesa-tres");

let container__menu = document.querySelector('.header__menu-oculto');

function animateBars(){
  line1__bars.classList.toggle("header__btn-hamburguesa-uno-activa");
  line2__bars.classList.toggle("header__btn-hamburguesa-dos-activa");
  line3__bars.classList.toggle("header__btn-hamburguesa-tres-activa");
  
  container__menu.classList.toggle("header__menu-oculto-activo");
  
}

// remover clase 

document.querySelector(".item-nav-1").addEventListener("click", closeMenu);
document.querySelector(".item-nav-2").addEventListener("click", closeMenu);
document.querySelector(".item-nav-3").addEventListener("click", closeMenu);
document.querySelector(".item-nav-4").addEventListener("click", closeMenu);

function closeMenu() {
  container__menu.classList.remove("header__menu-oculto-activo");
  line1__bars.classList.remove("header__btn-hamburguesa-uno-activa");
  line2__bars.classList.remove("header__btn-hamburguesa-dos-activa");
  line3__bars.classList.remove("header__btn-hamburguesa-tres-activa");
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



////////validaciones
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('.inputs');

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	mensaje: /^[a-zA-ZÀ-ÿ\s]{1,100}$/ 
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false,
	mensaje: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.querySelector(`.formulario__${campo} .formulario__parrafo-error`).classList.remove('formulario__parrafo-error--activo');
		campos[campo] = true;
	} else {
		document.querySelector(`.formulario__${campo} .formulario__parrafo-error`).classList.add('formulario__parrafo-error--activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.correo && campos.telefono && campos.mensaje ){
		formulario.reset();

		document.getElementById('formulario__exito').classList.add('formulario__mensaje-enviado--activo');
		setTimeout(() => {
			document.getElementById('formulario__exito').classList.remove('formulario__mensaje-enviado--activo');
		}, 5000);

		
	} else {
		document.getElementById('formulario__error').classList.add('formulario__mensaje-error--activo');

		setTimeout(() => {
			document.getElementById('formulario__error').classList.remove('formulario__mensaje-error--activo');
		}, 3000);


	}
});







