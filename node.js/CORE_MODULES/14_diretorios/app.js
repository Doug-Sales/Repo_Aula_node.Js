const fs = require('fs')

if (!fs.existsSync('./minhapasta')) {
    console.log('Não existe')
    fs.mkdirSync('minhapasta')
    console.log('criado com sucesso!')
} else if (fs.existsSync('./minhapasta')) {
    console.log('existe')
}