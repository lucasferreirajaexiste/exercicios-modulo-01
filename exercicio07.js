// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.


// 1 a 11 = 0,30
// 12 = 0,25

const prompt = require("prompt-sync")();

let numeroDeMacas = parseInt(prompt("Quantidade de maças: "));

let valorTotal;

if (numeroDeMacas <= 11) {
valorTotal = (numeroDeMacas * 0.30).toFixed(1)
console.log("valor total é " + valorTotal)

} else if(numeroDeMacas >= 12) {
valorTotal = (numeroDeMacas * 0.25).toFixed(1)
console.log("valor total é " + valorTotal)

}



