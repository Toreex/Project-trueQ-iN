const express = require('express')
const path = require('path')

const PORT = 3000

const app = express()
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT)
console.log(`Listening on ` + PORT)
