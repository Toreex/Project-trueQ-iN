const express = require('express')
const router = express.Router()

const addProduct = require('./handlers/addProduct')
const getProducts = require('./handlers/getProducts')
const getIndex = require('./handlers/getIndex')
const getRegister = require('./handlers/getRegister')
const getUserProduct = require('./handlers/getUserProduct')
const getUserIn = require('./handlers/getUserIn')
const getProductInfo = require('./handlers/getProductInfo')
const getUserProfile = require('./handlers/getUserProfile')

router.get('/', getIndex)
router.post('/create-product', addProduct)
router.get('/results', getProducts)
router.get('/register', getRegister)
router.get('/user-product', getUserProduct)
router.get('/user-in', getUserIn)
router.get('/product-info/:_id', getProductInfo)
router.get('/user-profile', getUserProfile)

module.exports = router
