const path = require('path')

//path absoluto
console.log(path.resolve('text.txt'))

// formar path
const intermediaria = 'relatorios'
const nomeArq = 'douglas.txt'

const arqFinal = path.join('/', 'arquivos', intermediaria, nomeArq)

console.log(arqFinal)

