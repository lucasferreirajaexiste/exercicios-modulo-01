// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

const numeroInt = parseInt(prompt("Digite um numero: "))

for (let i = 1; i <= 10; i++){
    console.log(numeroInt)
}
