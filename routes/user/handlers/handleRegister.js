const User = require('../../../models/User')

function handleRegister (req, res) {
  const { username, password, email } = req.body

  const account = new User({ username, email })
  User.register(account, password, err => {
    if (err) {
    	console.log('err', err)
      return res.send('ko')
    }
    res.redirect('enter')
  })
}

module.exports = handleRegister
