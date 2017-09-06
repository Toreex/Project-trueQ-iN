const express = require('express')
const router = express.Router()

const handleRegister = require('./handlers/handleRegister')
const handleEnter = require('./handlers/handleEnter')
const handleLogin = require('./handlers/handleLogin')
const handleLogout = require('./handlers/handleLogout')

const passport = require('../../config/passport')

router.post('/register', handleRegister)
router.get('/enter', handleEnter)
router.post('/login', passport.authenticate('local', { session: false }), handleLogin)
router.get('/logout', handleLogout)

module.exports = router
