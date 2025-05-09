
const altura = Number(prompt("Qual o valor da altura do retangulo?"));
const largura  =Number(prompt("QUal o valor da Largura do Retangulo"));

const area = largura * altura;

console.log("A area do triangulo é", area); 

const nota1 = Number(prompt("Qual foi a sua primeira nota?"));
const nota2 = Number(prompt("Qual foi sua segunda nota?"));
const nota3 = Number(prompt("Qual foi a sua terceira nota?"));

const media = (nota1 + nota2 + nota3) / 3;

console.log("A sua média é: ", media.toFixed(2));


const valorPago = Number(prompt("Quanto o valor total que voce pagou?"));
const valorCompra = Number(prompt("Qual o Valor Total sua Compra?"));

const troco = valorPago - valorCompra; 

console.log("O seu troco é:", troco.toFixed(2));