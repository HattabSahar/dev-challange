const express = require('express')
const { isAuth } = require('../middleware/isAuth')
const router = express.Router()
const Post = require('../models/Post')
router.post('/', isAuth, async (req, res) => {
  console.log(req.user)
  const { title, description } = req.body

  if (!title) {
    res.status(422).send()
  }

  const newPost = new Post({
    title,
    description,
    author: req.user._id,
  })

  newPost
    .save()
    .then(newPost => {
      res.status(201).json(newPost)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/my', isAuth, (req, res) => {
  Post.find({ author: req.user._id })
    .then(posts => res.json(posts))
    .catch(() => res.status(500).send())
})
module.exports = router
