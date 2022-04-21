const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    author: { type: ObjectId, ref: 'User' },
    comments: { type: Array },
  },
  { timestamps: true }
)

module.exports = mongoose.model('post', postSchema)
