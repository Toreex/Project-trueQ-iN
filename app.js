// dependencies and constants

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')
const expressSession = require('express-session')

const PORT = process.env.PORT || 3000
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/truequin'

const routesProducts = require('./routes/products')
const routesProduct = require('./routes/product')

const app = express()

// mongoose and express setupconst

mongoose.Promise = global.Promise

// mongoose
mongoose.connect(URL_DB, { useMongoClient: true })
console.log(`----- connect to db ` + URL_DB + ` -----`)

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(expressSession({secret: 'mySecretKey'}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', routesProducts)
app.use('/', routesProduct)

app.listen(PORT)
console.log(`----- Listening on ` + PORT + ` -----`)
