const numero = prompt("Informe um número");
const palavras = [];

for (let i = 0; i < numero; i++) {
  const palavra = prompt("Informe uma palavra");
  palavras[i] = palavra;
}

for (let i = palavras.length - 1; i >= 0; i--) {
  console.log("palavra(" + i + "): " + palavras[i]);
}
