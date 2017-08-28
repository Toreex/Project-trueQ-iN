const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/resultados', (req, res) => {
  res.render('resultados')
})

app.get('/entrar', (req, res) => {
  res.render('entrar')
})

app.get('/registrar', (req, res) => {
  res.render('registrar')
})

app.get('/perfilUser', (req, res) => {
  res.render('perfilUser')
})

app.get('/userProduct', (req, res) => {
  res.render('userProduct')
})

app.get('/userIn', (req, res) => {
  res.render('userIn')
})

app.get('/productInfo', (req, res) => {
  res.render('productInfo')
})

app.listen(PORT)
console.log(`Listening on ` + PORT)
