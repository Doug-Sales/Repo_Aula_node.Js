const inquirer = require('inquirer')


inquirer
    .prompt([{
        name: 'Nota_1',
        message: 'Digite a primeira nota: ',
    },
    {
        name: 'Nota_2',
        message: 'Digite a nota 2: ',
    }]).then((resposta) => {
        console.log(resposta)
    }).catch((err) => {
        console.log(err)
    });