const User = require('../../../models/User')
const Product = require('../../../models/Product')
var jwt = require('jsonwebtoken')
const controlLogin = require('../../common/controlLogin')

function getUserProfile (req, res) {
  const token = req.session.token

  console.log('token', token)

  const decoded = jwt.verify(token, process.env.SECRET)
  console.log(decoded)

  const username = decoded.username

  controlLogin(token, function (err, user) {
    User.findOne({ username }, (err, user) => {
      if (err) throw err

      const email = user.email
      Product.find({userName: username}).exec((err, products) => {
        if (err) throw err

        const loggedIn = !!user
        const username = user ? user.username : undefined

        res.render('user-profile', { loggedIn, products, username, email })
      })
    })
  })
}

module.exports = getUserProfile
