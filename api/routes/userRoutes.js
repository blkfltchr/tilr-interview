const express = require('express')
const knex = require('knex')(require('../knexfile'))

const router = express.Router()

router.get('/:user_id', async (req, res) => {
  try {
    const user = await knex.select().table('users')
      .where({ user_id: req.params.user_id })
      .first()
    if (user) {
      res
        .status(200)
        .json(user)
    } else {
      res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." })
    }
    
  } catch (err) {
    res
      .status(500)
      .json({ message: "Could not retrieve the user at this time." })
  }
})

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
  try {
    const user = await knex('users').insert(userData, '*')
    res.json(user)
  } catch (err) {
    res.status(userData ? 500 : 400)
  }
})
module.exports = router