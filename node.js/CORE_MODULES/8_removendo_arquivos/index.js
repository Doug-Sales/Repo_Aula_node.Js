const fs = require('fs')

// somente esses parâmetros, pois a intenção é deletar o arquivo.
fs.unlink('arquivo.txt', function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Arquivo removido!')
})

// necessário existir arquivo para não gerar erro.