function calcularIMC() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;

  var imc = peso / altura ** 2;
  var imcArredondado = parseFloat(imc.toFixed(2))

  alert("O seu IMC é" + imcArredondado)
}