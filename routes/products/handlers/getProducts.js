const Product = require('../../../models/Product')

function getProducts (req, res) {
  Product.find().exec((err, products) => {
    if (err) throw err

    res.render('results', { products })
  })
}

module.exports = getProducts
