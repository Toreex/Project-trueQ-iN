// api
const Product = require('../../../models/Product')

function updateProduct (req, res) {
  const id = req.params.id
  const reserved = req.body.reserved

  Product.findByIdAndUpdate(id, {reserved})
  .then(() => res.send(` element w/ id ${id} has been reserved`))
}

module.exports = updateProduct
