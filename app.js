const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT || 3000
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/truequin'

const app = express()

mongoose.Promise = global.Promise

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/results', (req, res) => {
  res.render('results')
})

app.get('/enter', (req, res) => {
  res.render('enter')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.get('/perfil-user', (req, res) => {
  res.render('perfil-user')
})

app.get('/user-product', (req, res) => {
  res.render('user-product')
})

app.get('/user-in', (req, res) => {
  res.render('user-in')
})

app.get('/product-info', (req, res) => {
  res.render('product-info')
})

app.post('/perfil-user', (req, res) => {
  res.render('perfil-user')
})

app.post('/create-product', (req, res) => {
  const sendProduct = req.body
  console.log(sendProduct)
})

mongoose.connect(URL_DB, { useMongoClient: true })

app.listen(PORT)
console.log(`Listening on ` + PORT)
