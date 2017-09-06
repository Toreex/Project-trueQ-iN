const User = require('../../../models/User')
const Product = require('../../../models/Product')
var jwt = require('jsonwebtoken')

function getProductInfo (req, res) {
  const token = req.session.token
  const id = req.params._id

  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    console.log(decoded)

    const username = decoded.username

    User.find({ username }, (err, user) => {
      if (err) throw err

      if (user) {
        Product.findById(id).exec((err, product) => {
          if (err) throw err

          res.render('product-info', { product })
        })
      } else {
        res.redirect('/enter')
      }
    })
  } catch (err) {
    throw err
  }
}

module.exports = getProductInfo
