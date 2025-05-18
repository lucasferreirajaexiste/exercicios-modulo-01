// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// média = x1 + x2 + x3 + ... + xn / n

// media = number + number + number / qdidade number

const prompt = require("prompt-sync")();

let soma = 0;
let quantidadeNumber = 0;
let number;
do {
  number = parseFloat(
    prompt("Digite um numero decimal ou digite 0 para sair: ")
  );

  if (number !== 0) {
    soma += number;
    quantidadeNumber++;
  }
} while (number !== 0);

let media = soma / quantidadeNumber;

console.log("A média é " + media);