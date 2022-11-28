const express = require('express')
const exphbs = require('express-handlebars')


const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

/*
Sintaxe :

{{#each}} ... {{/each}}

no array os itens são chamados pelo {{this}}

'/dashboard'
*/

app.get('/dashboard', (req, res) => {

    const user = {
        name: 'Douglas',
        sobrenome: 'Medeiros',
        idade: 30
    }

    const itens = ['Item A', 'Item B', 'Item C', 'Item D']

    const aprovado = false;

    res.render('dashboard', { user, aprovado, itens })
})

app.get('/', (req, res) => {

    const palavra = 'Seja bem vindo.'
    const auth = true;


    res.render('home', { palavra, auth });
})

app.listen(3000, () => {
    console.log('app rodando!')
})