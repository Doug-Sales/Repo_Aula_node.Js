const http = require('http')
//const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
    
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    res.statusCode = 200
    res.setHeader('contenty-Type', 'text/html')
    
    if (!name) {
        res.end(`<h1>Preencha o seu nome: <h1/><form method="GET"><input type="text" name="name" pattern="^[A-Za-z]{3,7}" title="3 a 7 caracteres"/><input type="submit" value="Enviar"></form>`)
    } else {
        res.end(`<h1>Seja bem vindo ${name}<h1/>`)
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})