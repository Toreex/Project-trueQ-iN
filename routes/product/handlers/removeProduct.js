// api
const Product = require('../../../models/Product')

function removeProduct (req, res) {
  const id = req.params.id

  Product.findByIdAndRemove(id)
    .then(() => res.send('delete ok'))
}

module.exports = removeProduct
