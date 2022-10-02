const fs = require('fs');


console.log('Inicio')

fs.writeFileSync('arquivo.txt', "Testes");

console.log('Fim')