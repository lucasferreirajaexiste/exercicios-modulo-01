// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B

// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")();

let ladoA = parseInt(prompt("Digite o lado A: "));
let ladoB = parseInt(prompt("Digite o lado B: "));
let ladoC = parseInt(prompt("Digite o lado C: "));

let isosceles = ladoA === ladoB || ladoA === ladoC || ladoB === ladoC;
// console.log(isosceles);

let escaleno = ladoA !== ladoB && ladoB !== ladoC;
// console.log(escaleno);

let equilatero = ladoA === ladoB && ladoB == ladoC;
// console.log(equilatero);


if (equilatero) {
  console.log("É um triangulo equilatero");
} else if (isosceles) {
  console.log("É um triangulo isosceles");
} else if (escaleno) {
  console.log("É um trinagulo escaleno");
} else {
  console.log("Não é um triangulo");
}
