console.log(process.argv)

const argumentos = process.argv.slice(2)
console.log(argumentos)

const nome = argumentos[0].split("=")[1]

console.log(nome)

const idade = argumentos[1].split("=")[1]

console.log(idade)

console.log(`${nome} tem ${idade} anos.`);
