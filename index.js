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

String.prototype.replaceAt = function (index, character) {
  return (
    this.substring(0, index) +
    character +
    this.substring(index + character.length)
  );
};

const numeroRandom = getRandomInt(0, palabras.length);
console.log(numeroRandom);
const palabraAleatoria = palabras[numeroRandom];
console.log(palabraAleatoria);

let adivinaPalabra = [];

let divide = palabraAleatoria.split("");
console.log(divide);

let palabraConGuiones = palabraAleatoria.replace(/./g, "_ ");
let cont = 0;
document.querySelector("#palabraoculta").innerHTML = palabraConGuiones;
document.querySelector("#enviarBoton").addEventListener("click", () => {
  let letra = document.querySelector("#respuestaInput").value;
  document.querySelector("#respuestaInput").value = "";
  let encontrado = false;
  for (const i in divide) {
    if (letra == divide[i]) {
      palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
      encontrado = true;
    }
  }

  if (!encontrado) {
    cont++;

if (cont == 1) {
  var ahorcadoimagen = document.getElementById("imagenahorcado");
  ahorcadoimagen.src = "error1.png";
} else {
    if (cont==2) {
      var ahorcadoimagen = document.getElementById("imagenahorcado");
      ahorcadoimagen.src = "error2.png";
    } else {
        if (cont==3) {
          var ahorcadoimagen = document.getElementById("imagenahorcado");
          ahorcadoimagen.src = "error3.png";
        } else {
if (cont==4){
  var ahorcadoimagen = document.getElementById("imagenahorcado");
  ahorcadoimagen.src = "error4.png";
} else {
if (cont==5){
  var ahorcadoimagen = document.getElementById("imagenahorcado");
  ahorcadoimagen.src = "error5.png";
} else{
  if (cont==6){
    var ahorcadoimagen = document.getElementById("imagenahorcado");
    ahorcadoimagen.src = "error6.png";
  }
}
}
        }
    }
}
  }
   
  if (cont >= 6) {

    document.querySelector("#enviarBoton").disabled = true;
  }

  document.querySelector("#palabraoculta").innerHTML = palabraConGuiones;
});
