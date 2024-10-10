// Exercicio 5
// 5 Utilizando os conceitos apresentados, desenvolva um programa que faça o seguinte: • Pergunte ao usuário os valores da primeira prova (N1) e da segunda prova (N2). • Calcule a média do aluno. • Utilize operador ternário para informar se O aluno está aprovado ou reprovado, considerando que a nota mínima para aprovação é 6.



let mediaescola = 6;

let prova1 = Number (prompt('Qual o valor da prova 1?'));
let prova2 = Number (prompt ('Qual o valor da prova 2?'));

let calculomedia = (prova1 + prova2)/2 ;

mediafinal = calculomedia >= mediaescola ?  'Aprovado' : 'Reprovado';


console.log('A média do aluno foi:', (calculomedia));

console.log('O Aluno foi:', (mediafinal));

