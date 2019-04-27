const express = require('express')
const knex = require('knex')(require('../knexfile'))

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await knex.select().table('users')
    res.json(users)
  } catch (err) {
    res.status(500)
  }
})

router.post('/', async (req, res) => {
  const userData = req.body
  console.log(req.body)
  try {
    const user = await knex('users').insert(userData, '*')
    res.json(user)
  } catch (err) {
    res.status(userData ? 500 : 400)
  }
})
module.exports = router