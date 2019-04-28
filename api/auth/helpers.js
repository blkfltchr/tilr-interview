const bcrypt = require('bcryptjs');
const knex = require('knex')(require('../knexfile'))
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

function verifyPassword(userPassword, hash) {
  return bcrypt.compareSync(userPassword, hash)
}

function createUser(req) {
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(req.body.password, salt);
  return knex('users')
  .insert({
    email: req.body.email,
    password: hash
  })
  .returning('*');
}

function generateToken(email) {
  const payload = {
    subject: email
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = {
    verifyPassword,
    createUser,
    generateToken
};