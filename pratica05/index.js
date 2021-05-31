const nome = prompt("Informe seu nome");
const idade = prompt("Informe sua idade");

if (idade >= 65) {
  console.log("Prezado(a) " + nome + ", você já está aposentado.");
} else {
  console.log(
    "Prezado(a) " +
      nome +
      ", faltam " +
      calcularIdade(idade) +
      " anos para você se aposentar."
  );
}

function calcularIdade(idade) {
  return 65 - idade;
}
