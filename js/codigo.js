//Boton scroll up/volver arriba
let mybutton = document.getElementById("btn-back-to-top");

// Cuando el usuario baja 20px desde el top, mostrar el boton
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 10 ||
document.documentElement.scrollTop > 10
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// Cuando el usuario clickea en el boton, volver al principio de la pagina
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
