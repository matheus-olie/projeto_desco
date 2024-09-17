//Author: Matheus de Oliveira Alves

const rlSync = require('readline-sync');

var bebida = rlSync.question('Ola, hoje temos disponivel cafe, leite e cha!\n com qual bebida vc quer se deliciar?\n');
var valorBebida = '';

switch (bebida) {
    case 'cafe':
        valorBebida = 3
        console.log('A bebida escolhida foi ' + bebida + " - Total: R$ " + valorBebida.toFixed(2));
        break
    case 'leite':
        valorBebida = 2.8
        console.log('A bebida escolhida foi ' + bebida + " - Total: R$ " + valorBebida.toFixed(2));
        break
    case 'cha':
        valorBebida = 2.6
        console.log('A bebida escolhida foi ' + bebida + " - Total: R$ " + valorBebida.toFixed(2));
        break;
    default:
        console.log('Opção inválida! Por favor escolha entre café, leite ou chá.');
        break;
}



