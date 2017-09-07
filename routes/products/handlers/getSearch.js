const controlLogin = require('../../common/controlLogin')
const Product = require('../../../models/Product')

function getSearch(req, res) {
    const token = req.session.token

    controlLogin(token, function(err, user) {
        const title = req.query.title
        console.log(title)

        Product.find({ title: new RegExp(title, 'i') })
            .sort({ title: 1 })
            .exec(function(err, products) {
                if (err) return res.send('error de busqueda')

                if (products.length === 0) return res.send('no se encuentran resultados')

                const loggedIn = !!user
                const username = user ? user.username : undefined

                res.render('results', { loggedIn, username, products })
            })
    })
}

module.exports = getSearch