require("dotenv").config();

const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session');
const morgan = require('morgan')
const routes = require('./routes')
const cors = require('cors')
const passport = require('passport');

const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({ 
  secret: process.env.SECRET_OR_KEY, 
  resave: false,
  saveUninitialized: true 
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(routes)

const server = app.listen(8000, () => {
  console.log('Server running on 8000!')
})

module.exports = server
