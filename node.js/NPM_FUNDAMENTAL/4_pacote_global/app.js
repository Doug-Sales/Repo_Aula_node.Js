const _ = require('lodash')

const arr = [15, 17, 17, 85, 41, 22, 01]

let teste = arr.reduce((acc, val) => acc + val, 0)

console.log(teste)
console.log(_.sortedUniq(arr))

/*
como trazer módulo global para a aplicação, salvando apenas no computador do usuario,
possibilitando acessar em qualquer local via terminal. 

- sudo npm install -g lodash
- npm link lodash

Remover pacotes das dependencias do json e do projeto.


*/