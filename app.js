const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT || 3000
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/truequin'

const Product = require('./models/Product')

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
  Product.find().exec((err, products) => {
    if (err) throw err
    console.log(products)

    res.render('results', { products })
  })
})

app.get('/enter', (req, res) => {
  res.render('enter')
})

app.get('/register', (req, res) => {
  res.render('register')
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

app.get('/user-profile', (req, res) => {
  Product.find().exec((err, products) => {
    if (err) throw err
    console.log(products)

    res.render('user-profile', { products })
  })
})

app.post('/create-product', (req, res) => {
  const _product = req.body
  console.log(_product)
  const product = new Product(_product)

  product.save()
    .then(() => {
      Product.find().exec((err, products) => {
        if (err) throw err

        console.log(products)

        res.render('user-profile', { products })
      })
    })
})

app.delete('/user-profile/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  Product.findByIdAndRemove(id)
    .then(() => res.send('delete ok'))
})

app.put('/user-profile/:id', (req, res) => {
  const id = req.params.id
  const reserved = req.body.reserved
  console.log(reserved)
  Product.findByIdAndUpdate(id, {reserved})
  .then(() => res.send(` element w/ id ${id} has been reserved`))
})

mongoose.connect(URL_DB, { useMongoClient: true })

console.log(`----- connect to db ` + URL_DB + ` -----`)

// app.use('/Products', routesProducts)

app.listen(PORT)
console.log(`----- Listening on ` + PORT + ` -----`)
