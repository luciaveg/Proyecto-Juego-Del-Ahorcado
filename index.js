const pregunta = document.getElementById("pregunta");
const siBoton = document.getElementById("siBotn");
const noBoton = document.getElementById("noBoton");
const respuesta = document.getElementById("respuesta");

siBoton.addEventListener("click", () => {
  respuesta.style.display = "block";
});

noBoton.addEventListener("click", () => {
  alert("¡Vuelve cuando estés preparado/a!");
});
