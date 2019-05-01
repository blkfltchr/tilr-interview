require("dotenv").config()

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('body-parser')
const session = require('express-session')
const morgan = require('morgan')
const cors = require('cors')
const passport = require('passport')

const app = express()
app.use(morgan('combined'))
app.use(cors({
  credentials: true,
  origin: ["http://localhost:3000"],
  AccessControlAllowOrigin: ["http://localhost:8000"],
  AccessControlAllowHeaders: "Authorization"
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(session({ 
  secret: process.env.SECRET_OR_KEY, 
  resave: false,
  saveUninitialized: true 
}))
app.use(passport.initialize())
app.use(passport.session())

// Routes

const authRoutes = require("./routes/authRoutes")
const questionRoutes = require("./routes/questionRoutes")
const userRoutes = require("./routes/userRoutes")

app.use("/auth", authRoutes)
app.use("/questions", questionRoutes)
app.use("/users", userRoutes)

const server = app.listen(8000, () => {
  console.log('Server running on 8000!')
})

module.exports = server
