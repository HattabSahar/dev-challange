const express = require('express')
const { isAuth } = require('../middleware/isAuth')
const router = express.Router()
const Post = require('../models/Post')
router.post('/', isAuth, async (req, res) => {
  console.log(req.user)
  const { title, description } = req.body

  if (!title) {
    return res.status(422).send()
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

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const post = await Post.findOne({ _id: id }).populate('author')
    res.send(post)
  } catch (e) {
    res.status(404).send()
  }
})

router.post('/:id/comment', isAuth, (req, res) => {
  const { id } = req.params
  const { comment } = req.body
  Post.findOne({ _id: id })
    .then(post => {
      console.log(post)
      if (!post) return res.status(403).send()
      post.comments.push({ comment, author: req.user._id })
      post
        .save()
        .then(() => res.status(201).send())
        .catch(() => res.status(500).send())
    })
    .catch(() => res.status(404).send())
})
module.exports = router
