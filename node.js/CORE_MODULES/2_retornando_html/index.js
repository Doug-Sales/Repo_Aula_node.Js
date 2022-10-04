const http =require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('contenty-Type', 'text/html')
    res.end('<h1>Texto inserido no servidor</h1>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})