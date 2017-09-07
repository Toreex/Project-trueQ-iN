const controlLogin = require('../../common/controlLogin')

function handleEnter(req, res) {
    const token = req.session.token

    controlLogin(token, function(err, state) {
        if (!state.loggedIn) return res.render('enter', { state })

		res.redirect('/user-profile')
    })
}

module.exports = handleEnter