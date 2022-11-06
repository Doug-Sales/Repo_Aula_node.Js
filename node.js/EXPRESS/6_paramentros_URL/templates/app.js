

const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
const respostaCorretas = ['B', 'B', 'B', 'B'];

form.addEventListener('submit', event => {
    event.preventDefault();
   
    let score = 0
    const respostas = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    respostas.forEach((resposta, index) => {
        let acertos = '';
        let confereResp = (respostaCorretas[index] === resposta);

        (confereResp) ? score += 25 : score;

        console.log(resposta)
    })
    

    scrollTo(0, 50) //pixel 0, 50 topo da página

    result.classList.toggle('d-none', false)
    console.log(`Acertos: ${score}%`)
    
    let id = 0;
    const timer = setInterval(() => {
        if (id === score) {
            clearInterval(timer)
        }
        result.querySelector('span').textContent = `${id}%`
        id++;
        
        
        // console.log(`Teste ${id}`)
    }, 10)




})
// console.log(respostas);
