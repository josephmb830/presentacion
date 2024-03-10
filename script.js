// alert("Hola este es mi Javascript");

let nombre = "Joseph";

console.log(nombre);

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