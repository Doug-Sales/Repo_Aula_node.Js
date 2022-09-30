const chalk = require('chalk')
const nota = 6

const mensgemAprovado = chalk.yellow.bold.bgGreen("Aprovado, Parabéns!");
const mensagemReprovado = chalk.red.bold.bgBlack("Reprovado!");

if (nota >= 7) {
    console.log(mensgemAprovado)
} else {
    console.log(mensagemReprovado)
};
