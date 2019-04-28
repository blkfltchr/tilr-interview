const passport = require('passport');
const knex = require('knex')(require('../knexfile'))

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  passport.deserializeUser((id, done) => {
    knex('users').where({user_id: id}).first()
    .then((user) => { done(null, user); })
    .catch((err) => { done(err, null); });
  });

};