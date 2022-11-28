const express = require('express')
const exphbs = require('express-handlebars')


const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.get('/dashboard', (req, res) => {

    const user = {
        name: 'Douglas',
        sobrenome: 'Medeiros',
        idade: 30
    }

    const aprovado = true;

    res.render('dashboard', { user, aprovado })
})

app.get('/post', (req, res) => {

    const post = {
        title:'Aprendendo Node.js',
        category: 'Cursos',
        body:'Avaliações positivas',
        comments: 18
    }

    //with aplicado aqui.

    res.render('post', {post})
})

app.get('/', (req, res) => {

    const palavra = 'Seja bem vindo.'
    const auth = true;


    res.render('home', { palavra, auth });
})

app.listen(3000, () => {
    console.log('app rodando!')
})