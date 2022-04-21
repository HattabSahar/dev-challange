const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const ReactionSchema = mongoose.Schema(
  {
    author: { type: ObjectId, ref: 'User' },
    post: { type: ObjectId, ref: 'Post' },
    value: { type: 'string', enum: ['UP', 'DOWN'], required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('reaction', ReactionSchema)
