const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const knex = require('knex')(require('../knexfile'))
const authHelpers = require('./helpers');

const options = {
  usernameField : 'email',
  passwordField : 'password',
}

init();

passport.use(new LocalStrategy(options, function(username, password, done) {
  knex('users').where({ email: username }).first()
  .then((user) => {
      if (!user) { return done(null, false); }
      if (!authHelpers.verifyPassword(password, user.password)) { return done(null, false); }
      return done(null, user);
  })
  .catch((err) => { return done(err); });
}))

module.exports = passport;