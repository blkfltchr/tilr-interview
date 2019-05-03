const express = require('express')

const router = express.Router()

const authHelpers = require('../auth/helpers')
const passport = require('../auth/strategies')

router.post('/register', (req, res, next)  => {
  console.log(req.body)
  return authHelpers.createUser(req, res)
  .then((response) => {
    console.log(response)
    passport.authenticate('local', (err, user, info) => {
      if (user) { 
        console.log(user)
        res
          .status(200)
          .json({
            id: user.user_id,
            msg: 'Signup success'
          }) 
      }
    })(req, res, next)
  })
  .catch((err) => { 
    res.status(500).json({ msg: err }) 
  })
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { res.status(500).json({ msg: err }) }
    if (!user) { res.status(404).json({ msg: 'User not found' }) }
    if (user) {
      req.login(user, function (err) {
        if (err) { return next(err) }
        res.status(200).json({ 
          id: user.user_id,
          msg: 'Login success' 
        }) 
      });
    }
  })(req, res, next)
})


module.exports = router