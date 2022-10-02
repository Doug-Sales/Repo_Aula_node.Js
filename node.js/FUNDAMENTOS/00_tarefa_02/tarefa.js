import inquirer from 'inquirer'
import chalk from 'chalk'

inquirer.prompt([{
    name: 'nome',
    message: 'Digite seu nome: ',
},
{
    name: 'idade',
    message: 'Digite sua idade: '
},
]).then((resposta) => {
    const nome = resposta.nome;
    const idade = resposta.idade

    console.log(chalk.black.bgYellow(`NOME: ${nome} \nIDADE: ${idade}`))

}).catch((err) => {
    console.log(err)
});