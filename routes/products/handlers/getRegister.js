const controlLogin = require('../../common/controlLogin')

function getRegister (req, res) {

	const token = req.session.token

    controlLogin(token, function(err, state) {
        if (!state.loggedIn) return res.render('register', {state})

		res.redirect('/user-profile')
    })
}

module.exports = getRegister
