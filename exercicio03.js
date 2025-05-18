// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

let aprovado = 6
let recuperacao = 5
let reprovado = 4

let resultado = parseInt(prompt("Digite a sua nota: "))

if (resultado >= aprovado) {
console.log(resultado + " é aprovado")

} else if (resultado === recuperacao) {
console.log(resultado + " é recuperacao")

} else {
console.log(resultado + " é  reprovado")
}
