const User = require('../../../models/User')
const Product = require('../../../models/Product')
var jwt = require('jsonwebtoken')

function getUserProfile(req, res) {

    const token = req.session.token

    console.log('token', token)

    try {
        const decoded = jwt.verify(token, process.env.SECRET)
        console.log(decoded)

        const username = decoded.username

        User.find({ username }, (err, user) => {
            if (err) throw err

            if (user) {
                Product.find().exec((err, products) => {
                    if (err) throw err

                    res.render('user-profile', { products })
                })
            } else {
            	res.redirect('/enter')
            }
        })
    } catch (err) {
        throw err
    }
}

module.exports = getUserProfile

// TODO create user logout destoying the cookie session (req.session = null) to force logout