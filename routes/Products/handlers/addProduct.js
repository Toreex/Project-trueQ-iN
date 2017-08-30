const Product = require('../../../models/Product')

function addProduct (req, res) {
  const { object } = req.body
  console.log(object)
  const product = new Product({ object })

  product.save()
    .then(() => res.redirect('/tasks'))
}

module.exports = addProduct
