const nome1 = prompt("Informe o nome da primeira pessoa.");
const peso1 = prompt("Informe o peso da primeira pessoa.");
const altura1 = prompt("Informe a altura da primeira pessoa.");
const imc1 = peso1 / (altura1 * altura1);

const nome2 = prompt("Informe o nome da segunda pessoa.");
const peso2 = prompt("Informe o peso da segunda pessoa.");
const altura2 = prompt("Informe a altura da segunda pessoa.");
const imc2 = peso2 / (altura2 * altura2);

if (imc1 > imc2) {
  console.log(
    "o IMC de " +
      nome1 +
      " (" +
      imc1.toFixed(2) +
      ") " +
      "é maior do que o de " +
      nome2 +
      " (" +
      imc2.toFixed(2) +
      ")"
  );
} else {
  console.log(
    "o IMC de " +
      nome2 +
      " (" +
      imc2.toFixed(2) +
      ") " +
      "é maior do que o de " +
      nome1 +
      " (" +
      imc1.toFixed(2) +
      ")"
  );
}
