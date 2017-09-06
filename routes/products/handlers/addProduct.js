// forms handling
const Product = require('../../../models/Product')
var jwt = require('jsonwebtoken')

function addProduct (req, res) {
  const token = req.session.token
  const decoded = jwt.verify(token, process.env.SECRET)
  const username = decoded.username
  const _product = req.body
  _product.userName = username
  const product = new Product(_product)

  product.save()
        .then(() => {
          res.redirect('/user-profile')
        })
}

module.exports = addProduct
