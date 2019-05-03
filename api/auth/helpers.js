const bcrypt = require('bcryptjs')
const knex = require('knex')(require('../knexfile'))

function verifyPassword(userPassword, hash) {
  return bcrypt.compareSync(userPassword, hash)
}

function createUser(req) {
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(req.body.password, salt)
  return knex('users')
  .insert({
    email: req.body.email,
    password: hash
  })
  .returning('*')
}

module.exports = {
    verifyPassword,
    createUser
}