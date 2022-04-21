const express = require('express')
const router = express.Router()

const authRouter = require('./authRouter')
const postRouter = require('./postRouter')

router.use('/auth', authRouter)
router.use('/post', postRouter)

module.exports = router
