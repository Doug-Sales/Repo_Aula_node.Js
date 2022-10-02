const EventtEmitter = require('events')
const eventEmitter = new EventtEmitter();
const { stdout } = require('process');
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: stdout,
});

eventEmitter.on('start', () => {
    console.log('Durante o evento.')
})

console.log('Inicio');

eventEmitter.emit('start');

console.log('Final');

readLine.question("Deseja limpar o console ? [s / n] ", (resposta) => {
    if (resposta.toLocaleLowerCase() === 's') {
        console.clear();
    } else {
        console.log("Encerrado!")
    };
    readLine.close()
});

