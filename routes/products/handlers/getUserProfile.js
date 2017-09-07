const controlLogin = require('../../common/controlLogin')
const Product = require('../../../models/Product')

function getUserProfile (req, res) {
  const token = req.session.token

  controlLogin(token, function (err, state) {
      if (!state.loggedIn) return res.redirect('/enter')

      Product.find({userName: state.user.username}).exec((err, products) => {
      	state.products = products

        res.render('user-profile', { state })
      })
    })
}

module.exports = getUserProfile
