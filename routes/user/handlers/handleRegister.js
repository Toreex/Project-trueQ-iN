const User = require('../../../models/User')

function handleRegister (req, res) {
  const { username, password } = req.body

  const account = new User({ username })

   User.register(account, password, err => {
    if (err) {
    	console.log('err', err)
      return res.send('ko')
    }
    res.redirect('enter')
  })
}

module.exports = handleRegister
