var numeros = document.getElementById("numeros");
var resultado = document.getElementById("resultado");
var sumar = document.getElementById("sumar");
var restar = document.getElementById("restar");
var multiplicar = document.getElementById("multiplicar");
var dividir = document.getElementById("dividir");

function validarNumeros() {
  var valores = numeros.value.split(" ");
  if (valores.length == 2 && !isNaN(valores[0]) && !isNaN(valores[1])) {
    return [Number(valores[0]), Number(valores[1])];
  } else {
    alert("Por favor, introduce dos números válidos separados por un espacio");
    return null;
  }
}

function sumarNumeros() {
  var numeros = validarNumeros();
  if (numeros) {
    var suma = numeros[0] + numeros[1];
    resultado.value = suma;
  }
}

function restarNumeros() {
  var numeros = validarNumeros();
  if (numeros) {
    var resta = numeros[0] - numeros[1];
    resultado.value = resta;
  }
}

function multiplicarNumeros() {
  var numeros = validarNumeros();
  if (numeros) {
    var multiplicacion = numeros[0] * numeros[1];
    resultado.value = multiplicacion;
  }
}

function dividirNumeros() {
  var numeros = validarNumeros();
  if (numeros) {
    if (numeros[1] != 0) {
      var division = numeros[0] / numeros[1];
      resultado.value = division;
    } else {
      alert("No se puede dividir por cero");
    }
  }
}

sumar.addEventListener("click", sumarNumeros);
restar.addEventListener("click", restarNumeros);
multiplicar.addEventListener("click", multiplicarNumeros);
dividir.addEventListener("click", dividirNumeros);