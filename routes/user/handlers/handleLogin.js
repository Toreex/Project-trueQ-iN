const jwt = require('jsonwebtoken')

function handleLogin (req, res) {
  const SECRET = process.env.SECRET
  const { _id: id, username, email } = req.user
  const token = jwt.sign({ id, username }, SECRET)

  req.session.token = token

  res.redirect('/user-profile')
}

module.exports = handleLogin
