const express = require('express')

const router = express.Router()

const authHelpers = require('../auth/helpers')
const passport = require('../auth/strategies')

router.post('/register', (req, res, next)  => {
  console.log(req.body)
  return authHelpers.createUser(req, res)
  .then((response) => {
    passport.authenticate('local', (err, user, info) => {
      if (user) { 
        res
          .status(200)
          .cookie('user_id', user_id, {
            httpOnly: true,
            signed: true
          })
          .json({ msg: 'Signup success' }) 
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
      console.log(user)
      req.login(user, function (err) {
        if (err) { return next(err) }
        res.status(200).json({ msg: 'Login success' }) 
      });
    }
  })(req, res, next)
})

// ROUTE:   GET auth/users/google
// DESC:    Allow users to authenticate with google
// ACCESS:  Public
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

// ROUTE:   GET auth/google/redirect
// DESC:    Allow users to authenticate with google
// ACCESS:  Public
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  let userId = req.user.user_id;
  let token = req.user.token;
  res.redirect(`http://localhost:3000?token=${token}&userId=${userId}`); //https://bookmaps.netlify.com/
});


module.exports = router