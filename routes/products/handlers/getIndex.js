const controlLogin = require('../../common/controlLogin')

function getIndex(req, res) {
    const token = req.session.token

    controlLogin(token, function(err, state) {
        res.render('index', { state })
    })
}

module.exports = getIndex