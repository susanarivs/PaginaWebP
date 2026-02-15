// Navegación móvil
const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        
        // Animación del botón hamburguesa
        const bars = navToggle.querySelectorAll(".bar");
        bars[0].style.transform = navMenu.classList.contains("active") ? "rotate(-45deg) translate(-5px, 6px)" : "none";
        bars[1].style.opacity = navMenu.classList.contains("active") ? "0" : "1";
        bars[2].style.transform = navMenu.classList.contains("active") ? "rotate(45deg) translate(-5px, -6px)" : "none";
    });

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            const bars = navToggle.querySelectorAll(".bar");
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        });
    });
}

// Validación de formulario
const botonEnviarMensaje = document.querySelector(".form-submit");
const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#e-mail");
const inputAsunto = document.querySelector("#asunto");
const inputMensaje = document.querySelector("#mensaje");
const formErrorNombre = document.querySelector(".form-error-nombre");
const formErrorEmail = document.querySelector(".form-error-email");
const formErrorAsunto = document.querySelector(".form-error-asunto");
const formErrorMensaje = document.querySelector(".form-error-mensaje");
const formulario = document.querySelector(".form");

function validarEmail(valor) {
    if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(valor)){
     return true;
    } else {
     return false;
    }
  }

botonEnviarMensaje.addEventListener('click', function(event) {
    event.preventDefault();
    let enviar = true;
    if( inputNombre.value == "") {
        formErrorNombre.textContent = "Dime tu nombre (max.50 caracteres)";
        if ( enviar == true )
            inputNombre.focus();
        enviar = false;
    } else {
        formErrorNombre.textContent = "";
    }
    
    if(inputEmail.value == "") {
        formErrorEmail.textContent = "Cuál es tu correo";
        if ( enviar == true )
            inputEmail.focus();
        enviar = false;
    } else {
        formErrorEmail.textContent = "";
        if (validarEmail(inputEmail.value) == false ) {
            formErrorEmail.textContent = "Formato de correo incorrecto ( ejemplo: nombre@dominio.com )";
            enviar = false;
        }
    }
   
    if(inputAsunto.value == "") {
        formErrorAsunto.textContent = "Cuál es el asunto";
        if (  enviar == true )
            inputAsunto.focus();
        enviar = false;
    } else {
        formErrorAsunto.textContent = "";
    }
    
    if(inputMensaje.value == "") {
        formErrorMensaje.textContent = "Escribe un mensaje";
        if (  enviar == true )
            inputMensaje.focus();
        enviar = false;
    } else {
        formErrorMensaje.textContent = "";
    }

    if( enviar == true ){
        formulario.submit();
        inputNombre.value="";
        inputEmail.value="";
        inputAsunto.value="";
        inputMensaje.value="";
    }
});
