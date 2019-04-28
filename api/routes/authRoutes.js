const express = require('express')

const router = express.Router()

const authHelpers = require('../auth/helpers')
const passport = require('../auth/local')

router.post('/register', (req, res, next)  => {
  console.log(req.body)
  return authHelpers.createUser(req, res)
  .then((response) => {
    passport.authenticate('local', (err, user, info) => {
      if (user) { 
        res.status(200).json({msg: "Success: user created"}) 
      }
    })(req, res, next);
  })
  .catch((err) => { 
    res.status(500).json({msg: err}) 
  });
})


module.exports = router