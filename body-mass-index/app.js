const btn = document.getElementById("btn-calculate");
const inputHeight = document.getElementById("input-altura");
const inputWeight = document.getElementById("input-peso");
const divResultado = document.getElementById('resultado-bmi');

function calcularBMI() {
  if (inputHeight.value && inputWeight.value) {
    let height = parseFloat(inputHeight.value) / 100;
    let weight = parseFloat(inputWeight.value);

    const bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    inputHeight.value = "";
    inputWeight.value = "";

    divResultado.innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;

  } else {
    alert("Ingresa un altura y un peso");
  }
}

btn.addEventListener("click", calcularBMI);
