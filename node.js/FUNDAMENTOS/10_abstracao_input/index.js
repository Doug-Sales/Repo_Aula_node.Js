const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
    .prompt([{
        name: 'nota_1',
        message: 'Digite a primeira nota: ',
    },
    {
        name: 'nota_2',
        message: 'Digite a nota 2: ',
    }]).then((resposta) => {
        const nota_1 = parseInt(resposta.nota_1);
        const nota_2 = parseInt(resposta.nota_2);
        const media = ((nota_1 + nota_2) / 2);
        console.log(chalk.green.bgCyan(`${media}`))
    }).catch((err) => {
        console.log(err)
    });