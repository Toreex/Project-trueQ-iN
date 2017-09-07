const controlLogin = require('../../common/controlLogin')
const User = require('../../../models/User')

function getIndex (req, res) {
  const token = req.session.token

  controlLogin(token, function (err, user) {
    User.find().exec((err) => {
      if (err) throw err

      const loggedIn = !!user
      const username = user ? user.username : undefined

      res.render('index', { loggedIn, username })
    })
  })
}

module.exports = getIndex
