// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

// exemplo 4!=4×3×2×1=24

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um numero: "))
let fatorial = 1

for(let i = numero; i >= 1; i--){
    console.log(i)
    fatorial *= i
}
console.log(fatorial)
