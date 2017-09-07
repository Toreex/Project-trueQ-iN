const controlLogin = require('../../common/controlLogin')
const Product = require('../../../models/Product')

function getProductInfo (req, res) {
  const token = req.session.token

  controlLogin(token, function (err, state) {
      if (!state.loggedIn) return res.redirect('/enter')

      const id = req.params._id

      Product.findById(id).exec((err, product) => {
        if (err) throw err

        state.product = product

        res.render('product-info', { state })
      })
    })
}

module.exports = getProductInfo
