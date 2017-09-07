const controlLogin = require('../../common/controlLogin')
const Product = require('../../../models/Product')

function getProducts (req, res) {
  const token = req.session.token

  controlLogin(token, function (err, user) {
    if (err) throw err

    Product.find().exec((err, products) => {
      if (err) throw err

      const loggedIn = !!user
      const username = user ? user.username : undefined

      res.render('results', { loggedIn, username, products })
    })
  })
}

module.exports = getProducts
