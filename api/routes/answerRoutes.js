const express = require('express')
const knex = require('knex')(require('../knexfile'))

const router = express.Router()

router.get('/:user_id', async (req, res) => {
  try {
    const answers = await knex.select().table('answers')
    .where({ user_id: req.params.user_id })
    if (answers) {
      res.status(200).json(answers)
    } else {
      res.status(404).json(error);
    }
  } catch (err) {
    res.status(500)
  }
})
  
router.post('/:user_id', async (req, res) => {
  try {
    const item = await knex('answers').insert({ 
        ...req.body,
        user_id: req.params.user_id 
    })
    const newAnswer = await knex('answers')
      .where({
        question_id: req.body.question_id, 
        user_id: req.params.user_id,
        is_yes: req.body.is_yes
      })
    if (item) {
        res.status(200).json({ message: 'Question successfully answered!', newAnswer });
      } else {
        res.status(404).json(error);
      }
  } catch (err) {
    res.status(text ? 500 : 400)
  }
})

module.exports = router
