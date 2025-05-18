// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")();

let baixoPeso = 18.5;
let pesoNormal = 24.9;
let sobrepeso = 29.9;
let obesidade = 30.0;

let peso = parseFloat(prompt("Qual o seu peso em Kg?"));
let altura = parseFloat(prompt("Qual a sua altura em metros?"));
let imc = (peso / (altura * altura)).toFixed(1);

// console.log(imc)

if (imc <= baixoPeso) {
  console.log(imc + " é baixo peso");
} else if (imc <= pesoNormal) {
  console.log(imc + " é peso normal");
} else if (imc <= sobrepeso) {
  console.log(imc + " é sobrepeso");
} else {
  console.log(imc + " é obesidade");
}


