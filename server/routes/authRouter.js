const express = require('express')
const User = require('../models/User')
require('dotenv').config()

const router = express.Router()

router.post('/register', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body

  const errors = []

  if (!username) errors.push('username')
  if (!password) {
    errors.push('password')
  } else if (password.length < 8) {
    errors.push('length password')
  }

  if (errors.length > 0) return res.status(422).json(errors)

  const newUser = new User({
    firstName,
    lastName,
    email,
    username,
    password,
  })

  newUser
    .save()
    .then(user => {
      return res.status(201).json(user)
    })
    .catch(err => {
      return res.status(500).json(err)
    })
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username: username })

  if (!user) return res.status(401).send()
  if (!user.isPasswordMatch(password)) {
    return res.status(401).send()
  }

  return res.status(200).json(user.getToken())
})

module.exports = router
