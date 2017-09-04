// forms handling
const Product = require('../../../models/Product')

function addProduct (req, res) {
  const _product = req.body
  const product = new Product(_product)

  product.save()
    .then(() => {
      res.redirect('/user-profile')
    })
}

module.exports = addProduct
