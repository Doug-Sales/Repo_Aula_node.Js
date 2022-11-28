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

    res.render('dashboard', {user})
})

app.get('/', (req, res) => {   

    const palavra = 'Seja bem vindo.'
    const auth = true;


    res.render('home', {palavra, auth });
})

app.listen(3000, () => {
    console.log('app rodando!')
})