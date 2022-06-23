function calcularIMC() {
  var sexo = document.getElementById("sexo").value;
  var altura = document.getElementById("altura").value;

  if (sexo == "F" || sexo == "f") {
    var pesoIdeal = (62.1 * altura) - 44.7;
    var pesoArredondado = parseFloat(pesoIdeal.toFixed(2))
    alert("O seu peso ideal é: " + pesoArredondado + "Kg")
  }
}