// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require("prompt-sync")();

let tabuada = parseInt(prompt(" Digite um numero: "))
console.log("Tabuada de " + tabuada)

for (let i = 1; i <= 10; i++){
    const total = tabuada * i
    console.log(tabuada + "x" + i + " = " + total)
}

