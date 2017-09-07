const express = require('express')
const router = express.Router()

const addProduct = require('./handlers/addProduct')
const getIndex = require('./handlers/getIndex')
const getRegister = require('./handlers/getRegister')
const getUserProduct = require('./handlers/getUserProduct')
const getProductInfo = require('./handlers/getProductInfo')
const getUserProfile = require('./handlers/getUserProfile')
const getSearch = require('./handlers/getSearch')

router.get('/', getIndex)
router.post('/create-product', addProduct)
router.get('/register', getRegister)
router.get('/user-product', getUserProduct)
router.get('/product-info/:_id', getProductInfo)
router.get('/user-profile', getUserProfile)
router.get('/search', getSearch)

module.exports = router
