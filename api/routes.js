const express = require('express')
const knex = require('knex')(require('./knexfile'))

const router = express.Router()

router.get('/questions', async (req, res) => {
  try {
    const questions = await knex.select().table('questions')
    res.json(questions)
  } catch (err) {
    res.status(500)
  }
})

router.post('/questions', async (req, res) => {
  const { text } = req.body
  try {
    const question = await knex('questions').insert({ text }, '*')
    res.json(question)
  } catch (err) {
    res.status(text ? 500 : 400)
  }
})

router.get('/users', async (req, res) => {
  try {
    const users = await knex.select().table('users')
    res.json(users)
  } catch (err) {
    res.status(500)
  }
})

router.post('/users', async (req, res) => {
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
