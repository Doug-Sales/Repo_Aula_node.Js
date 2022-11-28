const express = require('express')
const exphbs = require('express-handlebars')


const app = express()

//Configurando o express para entendimento do PARTIALS.
const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

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
    const user = req.params.nome
    const post = {
        title: 'Aprendendo Node.js',
        category: 'Cursos',
        body: 'Avaliações positivas',
        comments: 18
    }


    res.render('post', { post, user })
})


// Para acessar é necessário utilizar {{> partials}}
app.get('/blog', (req, res) => {
    const blogs = [{
        title: 'JavasCript',
        category: 'Aprendizado',
        body: 'Teste',
        comments: 4
    },
    {
        title: 'Node.js',
        category: 'Aprendizado',
        body: 'Back-end',
        comments: 15
    },
    {
        title: 'GitHub',
        category: 'Ferramentas',
        body: 'Teste',
        comments: 105
    },
    {
        title: 'Java',
        category: 'Linguagens',
        body: 'Teste',
        comments: 58
    }
    ]

    res.render('blog', { blogs })

})

app.get('/', (req, res) => {

    const palavra = 'Seja bem vindo.'
    const auth = true;


    res.render('home', { palavra, auth });
})

app.listen(3000, () => {
    console.log('app rodando!')
})