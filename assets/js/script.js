const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  let description = "";

  document.getElementById("infos").classList.remove("hidden");

  value.classList.add("attention");

  if (bmi < 18.5) {
    description = "Cuidado! voce esta abaixo do peso!";
  } else if (bmi >= 18.5 && bmi <= 25) {
    description = "voce esta no peso ideal!";
    value.classList.remove("attention");
    value.classList.add("normal");
  } else if (bmi > 25 && bmi <= 30) {
    description = "cuidado! voce esta com sobrepeso!";
  } else if (bmi > 30 && bmi < -35) {
    description = "cuidado! Voce esta com obesidade moderada!";
  } else if (bmi > 35 && bmil <= 40) {
    description = "Cuidado! Voce esta com obesidade severa!";
  } else {
    description = "Cuidado! voce esta com obesidade morbida!";
  }
  value.textContent = bmi.replace(".", ",");
  document.getElementById("description").textContent = description;
});
