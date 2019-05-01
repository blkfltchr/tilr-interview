const express = require('express')
const knex = require('knex')(require('../knexfile'))

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const answers = await knex.select().table('answers')
    res.json(answers)
  } catch (err) {
    res.status(500)
  }
})
  
router.post('/:userId/answers', async (req, res) => {
  try {
    const item = await knex('answers').insert({ 
        ...req.body,
        userId: req.params.userId 
    })
    if (item) {
        res.status(200).json({ message: 'Question successfully answered!' });
      } else {
        res.status(404).json(error);
      }
  } catch (err) {
    res.status(text ? 500 : 400)
  }
})

module.exports = router
