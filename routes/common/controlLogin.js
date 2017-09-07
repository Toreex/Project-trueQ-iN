const User = require('../../models/User')
var jwt = require('jsonwebtoken')

function controlLogin (token, callback) {
  console.log('token', token)

  const state = {
      loggedIn: false
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    console.log(decoded)

    const username = decoded.username

    User.findOne({ username }, (err, user) => {
      if (user) {
          state.loggedIn = true
          state.user = user
      }
      
      callback(err, state)      
    })
  } catch (err) {
    callback(err, state)
  }
}

module.exports = controlLogin
