const User = require('../../../models/User')
const controlLogin = require('../../common/controlLogin')

function getUserProduct (req, res) {
  const token = req.session.token

  controlLogin(token, function (err, user) {
    if (err) throw err
    User.find().exec((err) => {
      if (err) throw err

      const loggedIn = !!user
      const username = user ? user.username : undefined

      res.render('user-product', { loggedIn, username })
    })
  })
}

module.exports = getUserProduct
