// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

const carro = parseInt(prompt("Digite a marca do veiculo: 1 - Fiat, 2 - Chevrolet, 3 - Aston Martin "))

switch (carro) {
  case 1:
    console.log("A Fiat é uma tradicional fabricante italiana de automóveis conhecida por design compacto e inovação acessível.");
    break;

    case 2:
    console.log("A Chevrolet é uma marca americana de carros conhecida por sua durabilidade e variedade de modelos..");
    break;

    case 3:
    console.log("A Aston Martin é uma marca britânica de luxo, famosa por seus carros esportivos elegantes de alto desempenho.");
    break;

  default:
    console.log("Esta opção não existe")
}
