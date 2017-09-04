// dependencies and constants

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT || 3000
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/truequin'

const routesProducts = require('./routes/products')
const routesProduct = require('./routes/product')

const app = express()

// mongoose and express setup

mongoose.Promise = global.Promise

// mongoose
mongoose.connect(URL_DB, { useMongoClient: true })
console.log(`----- connect to db ` + URL_DB + ` -----`)

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// const Product = require('../../../models/Product')

// navigation and rendering

// app.get('/', (req, res) => {
//   res.render('index')
// })

// app.get('/results', (req, res) => {
//   Product.find().exec((err, products) => {
//     if (err) throw err

//     res.render('results', { products })
//   })
// })

// app.get('/enter', (req, res) => {
//   res.render('enter')
// })

// app.get('/register', (req, res) => {
//   res.render('register')
// })

// app.get('/user-product', (req, res) => {
//   res.render('user-product')
// })

// app.get('/user-in', (req, res) => {
//   res.render('user-in')
// })

// app.get('/product-info', (req, res) => {
//   res.render('product-info')
// })

// app.get('/user-profile', (req, res) => {
//   Product.find().exec((err, products) => {
//     if (err) throw err

//     res.render('user-profile', { products })
//   })
// })

// forms handling

// app.post('/create-product', (req, res) => {
//   const _product = req.body
//   const product = new Product(_product)

//   product.save()
//     .then(() => {
//       res.redirect('/user-profile')
//     })
// })

// api

// app.delete('/product/:id', (req, res) => {
//   const id = req.params.id

//   Product.findByIdAndRemove(id)
//     .then(() => res.send('delete ok'))
// })

// app.put('/product/:id', (req, res) => {
//   const id = req.params.id
//   const reserved = req.body.reserved

//   Product.findByIdAndUpdate(id, {reserved})
//   .then(() => res.send(` element w/ id ${id} has been reserved`))
// })

app.use('/', routesProducts)
app.use('/', routesProduct)

app.listen(PORT)
console.log(`----- Listening on ` + PORT + ` -----`)
