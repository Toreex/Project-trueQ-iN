const Product = require('../../../models/Product')

function getUserProfile (req, res) {
  // Product.get('/user-profile', (req, res) => {
  Product.find().exec((err, products) => {
    if (err) throw err

    res.render('user-profile', { products })
  })
  // })
}

module.exports = getUserProfile
