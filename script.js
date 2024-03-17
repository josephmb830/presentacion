// alert("Hola este es mi Javascript");

let name = "Joseph";

console.log(name);

let acercacontenido = "Sobre mí";
let acerca1 = (document.getElementById("acerca-de"));
acerca1.innerHTML = "holxs"
console.log(acerca1);

document.title.innerHTML = "hola";

let acerca2 = document.querySelector(".acerca-titulo")
if (acerca2.innerHTML == "holos") {
    acerca2.innerHTML = acercacontenido;
} else if (acerca1.innerHTML == "holus") {
    acerca1.innerHTML = "Acerca de mí"
} else {
    acerca1.innerHTML = "Acerca de Joseph"
}


let menu_responsive = document.querySelector(".hammenu");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

// validación del formulario;

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

// fin de validación del formulario

const imprimir = (texto) => {
  console.log(texto);
}

imprimir("Hola Mundo");