const User = require('../../../models/User')
const Product = require('../../../models/Product')
var jwt = require('jsonwebtoken')
const controlLogin = require('../../common/controlLogin')

function getProductInfo (req, res) {
  const token = req.session.token
  const id = req.params._id

  const decoded = jwt.verify(token, process.env.SECRET)
  console.log(decoded)

  const username = decoded.username

  controlLogin(token, function (err, user) {
    User.find({ username }, (err, user) => {
      if (err) throw err

      Product.findById(id).exec((err, product) => {
        if (err) throw err

        const loggedIn = !!user
        const username = user ? user.username : undefined

        res.render('product-info', { loggedIn, product, username })
      })
    })
  })
}

module.exports = getProductInfo
