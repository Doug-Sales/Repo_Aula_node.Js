function a() {
    console.log('Executando  a()');
    c()
};

function b() {
    console.log('Executando  b()')
};

function c() {    
    console.log('Executando  c()');

    b()
    
    let contador = 5;
    let intervalId = setInterval(() => {
        if (contador === 0) {
            clearInterval(intervalId);
            console.clear();
        } else {
            console.log(`Limpando em ${contador}`);
            contador--
        }
    }, 1000);
    
};

a()