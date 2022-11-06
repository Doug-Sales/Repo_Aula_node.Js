const express = require('express');

const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const checkAuth = function (req, res, next) {

   req.authStatus = true

   if (req.authStatus) {
      console.log('Está logado, pode continuar')
      next()
   } else {
      console.log('Não está logado, faça o login para continuar')
      // trava no reload, aplicar lógica de negação da autenticação.
   }

}

//midle
app.use(checkAuth)

app.get('/', (req, res) => {
   res.sendFile(`${basePath}/index.html`)
})


app.listen(port, () => {
   console.log(`App rodando na porta ${port}`)
})

