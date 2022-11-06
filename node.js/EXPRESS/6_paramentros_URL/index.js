const express = require('express');


const app = express()
const port = 3000


const path = require('path')

const basePath = path.join(__dirname, 'templates')


app.get('/users/:id', (req, res) => {
   const id = req.params.id;

   // na prática, faz-se uma leitura da tabela users e resgata o usuario do banco de dados.
   console.log(`Estamos buscando pelo usuário: ${id}`)
   
   res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
   res.sendFile(`${basePath}/index.html`)
})


app.listen(port, () => {
   console.log(`App rodando na porta ${port}`)
})




