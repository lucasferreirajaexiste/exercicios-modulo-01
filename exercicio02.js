// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')();

let crianca = 12
let adolescente = 17
let adulto = 59
let idoso = 60

let idade = parseInt(prompt("Digite a sua idade: "))

if (idade <= crianca) {
console.log(idade + " é a idade de uma Criança" )

} 

else if (idade <= adolescente) {
console.log(idade + " é a idade de um adolescente")

} else if (idade <= adulto) {
console.log(idade + " é a idade de um adulto")

} else {
console.log(idade + " é a idade de um idoso")
}

