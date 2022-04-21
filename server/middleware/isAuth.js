const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { JWT_SECRET } = process.env

function isAuth(req, res, next) {
  let token = req.headers.authorization
  if (!token) return res.status(401).send()
  token = token.split(' ')
  if (token.length !== 2) return res.status(401).send()
  token = token[1]

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send()
    const { id } = decoded
    User.findById(id)
      .then(user => {
        if (!user) return res.status(401).send()
        req.user = user
        next()
      })
      .catch(() => {
        return res.status(401).send()
      })
  })
}

module.exports = {
  isAuth: isAuth,
}
