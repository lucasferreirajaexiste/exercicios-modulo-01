// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

let valorUm = parseInt(prompt("Digite um numero: "));
let valorDois = parseInt(prompt("Digite um numero: "));

if (valorUm < valorDois) {

console.log("A ordem crescente é: " + valorUm + ", " + valorDois)
} else {
    console.log("A ordem crescente é: " + valorDois + ", " + valorUm)
}

// A ordem crescente é: xx, xx