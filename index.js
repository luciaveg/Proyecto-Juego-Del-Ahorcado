const palabras = [
  "ordenador",
  "codigo",
  "flor",
  "delfin",
  "television",
  "carpeta",
  "ciudad",
  "reloj",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const numeroRandom = getRandomInt(0, 7);
console.log(numeroRandom);
const palabraAleatoria = palabras[numeroRandom];
console.log(palabraAleatoria);

let adivinaPalabra = [];

let divide = palabraAleatoria.split("");
console.log(divide);

const letraUsuario = document.getElementById("respuestaInput");

for (let i = 0; i <= 7; i++) {
  if (letraUsuario === divide[i]) {
  }
}
