const controlLogin = require('../../common/controlLogin')
const Product = require('../../../models/Product')

function addProduct(req, res) {
    const token = req.session.token

    controlLogin(token, function(err, state) {
        if (!state.loggedIn) return res.redirect('/enter')

        const _product = req.body
        _product.userName = state.user.username
        const product = new Product(_product)

        product.save()
            .then(() => {
                res.redirect('/user-profile')
            })
    })
}

module.exports = addProduct