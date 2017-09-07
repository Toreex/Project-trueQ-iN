const User = require('../../models/User')
var jwt = require('jsonwebtoken')

function controlLogin (token, callback) {
  console.log('token', token)

  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    console.log(decoded)

    const username = decoded.username

    User.findOne({ username }, (err, user) => {
      if (err) throw err

      if (user) {
        callback(undefined, user)
      } else {
        callback('username not found')
      }
    })
  } catch (err) {
    callback(err)
  }
}

module.exports = controlLogin
