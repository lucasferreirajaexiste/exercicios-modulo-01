// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let parOuImpar = parseInt(prompt("Digite um numero: "))

// console.log(typeof parOuImpar)

if (parOuImpar % 2 === 0) {
console.log(parOuImpar + " Este numero é par")

} else {
console.log(parOuImpar + " Este numero é impar")
}