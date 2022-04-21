const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const commentSchema = mongoose.Schema(
  {
    comment: { type: String, required: true },
    author: { type: ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    author: { type: ObjectId, ref: 'User' },
    comments: [commentSchema],
  },
  { timestamps: true }
)

module.exports = mongoose.model('post', postSchema)
