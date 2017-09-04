const express = require('express')
const router = express.Router()

const removeProduct = require('./handlers/removeProduct')
const updateProduct = require('./handlers/updateProduct')

router.delete('/product/:id', removeProduct)
router.put('/product/:id', updateProduct)
module.exports = router
