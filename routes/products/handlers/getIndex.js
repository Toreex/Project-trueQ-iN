const User = require('../../../models/User')
var jwt = require('jsonwebtoken')

function getIndex (req, res) {
  // const token = req.session.token

  // console.log('token', token)

  // try {
  //   const decoded = jwt.verify(token, process.env.SECRET)
  //   console.log(decoded)

  //   const username = decoded.username

  //   User.find({ username }, (err, user) => {
  //     if (err) throw err

  //     if (user) {

  const username = 'man'
  const loggedIn = !true

  res.render('index', { loggedIn, username })
  //     } else {
  //       res.render('index')
  //     }
  //   })
  // } catch (err) {
  //   throw err
  // }
}

module.exports = getIndex
