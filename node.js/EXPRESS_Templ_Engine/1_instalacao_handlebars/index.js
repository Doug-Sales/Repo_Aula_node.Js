const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')


const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
// app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', { layout: false });
})

app.listen(3000, () => {
    console.log('app rodando!')
})