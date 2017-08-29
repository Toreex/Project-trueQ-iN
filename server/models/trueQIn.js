const mongoose = require('mongoose')

const collection = 'products'

var ProductsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { collection })

module.exports = mongoose.model('Product', ProductsSchema)
