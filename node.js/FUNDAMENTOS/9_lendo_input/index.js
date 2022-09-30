const { stdout } = require('process');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: stdout,
});

readline.question("Digite seu nome: ", (nome) => {
    if (nome === 'Douglas'){
        console.log(`Olá ${nome}, você tem acesso total.`)
    } else {
    console.log(`Olá ${nome}, seja bem vindo.`);
    }
    readline.close();
});