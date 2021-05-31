const nome = prompt("Informe seu nome.");
const peso = prompt("Informe seu peso.");
const altura = prompt("Informe sua altura.");
const imc = peso / (altura * altura);

if (imc < 17) {
  console.log(
    nome + "! Você está %cmuito abaixo do peso%c.",
    "text-decoration: underline",
    "text-decoration: none"
  );
  console.log(
    "Dica: Procure um nutricionista para começar a seguir um cardápio especializado, cheio de nutrientes."
  );
} else if (imc >= 17 && imc <= 18.49) {
  console.log(
    nome + "! Você está %cabaixo do peso%c.",
    "text-decoration: underline",
    "text-decoration: none"
  );
  console.log(
    "Dica: Alimente-se a cada 3 horas, coma alimentos ricos em proteínas e invista em gorduras boas"
  );
} else if (imc > 18.49 && imc <= 24.99) {
  console.log(
    nome + "! Você está no %cpeso normal%c.",
    "text-decoration: underline",
    "text-decoration: none"
  );
  console.log("Dica: Continue assim! Mantenha atitudes saudáveis.");
} else if (imc >= 25 && imc <= 29.99) {
  console.log(
    nome + "! Você está %cacima do peso%c.",
    "text-decoration: underline",
    "text-decoration: none"
  );
  console.log("Dica: Pratique atividades físicas e equilibre sua alimentação.");
} else if (imc >= 30 && imc <= 34.99) {
  console.log(
    nome + "! Você está com %cobesidade I%c.",
    "text-decoration: underline",
    "text-decoration: none"
  );
  console.log("Dica: Se baseie no tripé: dieta, exercício físico e medicação.");
} else if (imc >= 35 && imc <= 39.99) {
  console.log(
    nome + "! Você está com %cobesidade II%c.",
    "text-decoration: underline",
    "text-decoration: none"
  );
  console.log("Dica: Mude seu estilo de vida.");
} else if (imc >= 40) {
  console.log(
    nome + "! Você está com %cobesidade III%c.",
    "text-decoration: underline",
    "text-decoration: none"
  );
  console.log("Dica: Procure ajuda de especialistas.");
}
