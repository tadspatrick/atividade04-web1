const restaurantes = [];
const valores = [];
const gorjetas = [];

for (let i = 0; i < 3; i++) {
  const nome = prompt("Informe o nome do restaurante");
  restaurantes[i] = nome;
  let valor = prompt("Informe o valor total da conta");
  valores[i] = parseFloat(valor);
  gorjetas[i] = calcularGorjeta(parseFloat(valor));
}

function calcularGorjeta(valor) {
  let gorjeta;
  if (valor < 50) {
    gorjeta = valor * 0.2;
  } else if (valor >= 50 && valor <= 200) {
    gorjeta = valor * 0.15;
  } else if (valor > 200) {
    gorjeta = valor * 0.1;
  }
  return gorjeta;
}

detalharConta(restaurantes, valores, gorjetas);

function detalharConta(restaurantes, valores, gorjetas) {
  for (let i = 0; i < 3; i++) {
    imprimirDetalhamento(i);
  }
}

function imprimirDetalhamento(i) {
  console.log(
    restaurantes[i] +
      " - [Valor: R$ " +
      valores[i] +
      " | Gorjeta: R$ " +
      gorjetas[i] +
      " | Total: R$ " +
      parseFloat(valores[i] + gorjetas[i]) +
      "]"
  );
}
