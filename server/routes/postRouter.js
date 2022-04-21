const express = require('express')
const { isAuth, canBeAuth } = require('../middleware/isAuth')
const router = express.Router()
const Post = require('../models/Post')
const Reaction = require('../models/Reaction')
router.post('/', isAuth, async (req, res) => {
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
    const post = await Post.findOne({ _id: id })
      .populate('author')
      .populate({
        path: 'comments',
        populate: { path: 'author' },
      })
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
      if (!post) return res.status(403).send()
      post.comments.push({ comment, author: req.user._id })
      post
        .save()
        .then(() => res.status(201).send())
        .catch(() => res.status(500).send())
    })
    .catch(() => res.status(404).send())
})

router.get('/:id/reaction', canBeAuth, async (req, res) => {
  const { id } = req.params

  const reactionUp = await Reaction.find({ post: id, value: 'UP' }).then(
    reactions => reactions.length
  )

  const reactionDown = await Reaction.find({ post: id, value: 'DOWN' }).then(
    reactions => reactions.length
  )

  console.log({ post: id, author: req.user?.id })

  const myReaction = await Reaction.findOne({ post: id, author: req.user?.id }).then(reaction => {
    console.log(reaction)
    return reaction?.value || null
  })

  return res.json({ up: reactionUp, down: reactionDown, my: myReaction })
})

router.post('/:id/reaction', isAuth, async (req, res) => {
  const { id } = req.params
  const { value } = req.body
  const userId = req.user.id

  await Reaction.findOneAndDelete({ post: id, author: userId })
  Reaction.create({ post: id, author: userId, value })
    .then(reaction => res.json(reaction))
    .catch(err => res.status(500).send(err))
})

module.exports = router
