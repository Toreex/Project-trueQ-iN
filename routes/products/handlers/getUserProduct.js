const controlLogin = require('../../common/controlLogin')

function getUserProduct(req, res) {
    const token = req.session.token

    controlLogin(token, function(err, state) {
        if (!state.loggedIn) return res.redirect('/enter')

        res.render('user-product', { state })
    })
}

module.exports = getUserProduct