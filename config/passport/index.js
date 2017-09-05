const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/User')
passport.use( new LocalStrategy( User.authenticate() ) );

const jwtStrategy = require('./jwt')
passport.use( jwtStrategy );

module.exports = passport;