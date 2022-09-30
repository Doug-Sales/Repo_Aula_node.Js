const fs = require('fs');

fs.readFile('arquivo.txt', 'utf-8', (erro, dados)=>{
    erro ? console.log(erro) : console.log(dados);
    return
})

