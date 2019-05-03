const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy

const init = require('./passport')
const knex = require('knex')(require('../knexfile'))
const authHelpers = require('./helpers')

const options = {
  usernameField : 'email',
  passwordField : 'password',
}

init()

passport.use(
  new LocalStrategy(options, function(username, password, done) {
    knex('users').where({ email: username }).first()
    .then((user) => {
        if (!user) { return done(null, false) }
        if (!authHelpers.verifyPassword(password, user.password)) { return done(null, false) }
        return done(null, user)
    })
    .catch((err) => { return done(err) })
  }
))

passport.use(
  new GoogleStrategy(
    {
      // Google+ API Keys
      callbackURL: process.env.GOOGLE_CALLBACK_URL || '/auth/google/redirect',
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await knex('users')
        .where({
          email: profile.emails[0].value
        })
        .first()
      if (existingUser) {
        done(null, existingUser)
      } else {
        await knex('users').insert({
          email: profile.emails[0].value,
        })
        const user = await knex('users')
          .where({ email: profile.emails[0].value })
          .first()

        done(null, user)
      }
    }
  )
)

module.exports = passport