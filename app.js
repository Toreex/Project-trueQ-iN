// dependencies and constants

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT || 3000
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/truequin'

const app = express()

// mongoose and express setupconst

mongoose.Promise = global.Promise

// mongoose

mongoose.connect(URL_DB, { useMongoClient: true })
console.log(`----- connect to db ` + URL_DB + ` -----`)

app.set('view engine', 'pug')

// express

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// passport

const passport = require('./config/passport')
app.use(passport.initialize())

// routes

const userRoutes = require('./routes/user')
const routesProducts = require('./routes/products')
const routesProduct = require('./routes/product')

app.use('/', userRoutes)
app.use('/', routesProducts)
app.use('/', routesProduct)

// server start

app.listen(PORT)
console.log(`----- Listening on ` + PORT + ` -----`)
