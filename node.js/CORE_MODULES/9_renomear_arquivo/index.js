const fs = require('fs')


//criar arquivo.txt para teste 

fs.rename('arquivo.txt', 'novoArquivo.txt', function (err) {
    if (err) { 
        console.log(err)
        return;
    }
    console.log('Arquivo renomeado!')
})

