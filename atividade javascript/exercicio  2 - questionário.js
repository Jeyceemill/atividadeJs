// - Utilizando os conceitos apresentados, pergunte ao usuário.
// • Qual o nome do usuário;
// • Qual sua idade;
// • Bairro onde mora;
// • Passe o nome do usuário para todas as letras em maiúscula;
// • Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o
// resultado da soma desses números na tela. 


let nome = prompt ( 'Qual é o seu nome?');
let idade = prompt ('Qual é a sua idade?');
let bairro = prompt ( 'Qual é o seu bairro?');
let nomemaiuscula = nome.toUpperCase();

alert (nomemaiuscula);

let num1 = Number ( prompt ('Digite o primeiro número'));
let num2 = Number (prompt ('Digite o segundo  número '));

let soma = num1 + num2;
alert (soma);
console.log (nomemaiuscula);