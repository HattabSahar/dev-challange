require('dotenv').config()

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const { toJSON } = require('./plugins')

const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

const userSchema = mongoose.Schema(
  {
    avatar: {
      type: String,
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email')
        }
      },
    },
    password: {
      type: String,
      trim: true,
      minlength: 8,
      validate(value) {
        if (value.length <= 7) {
          throw new Error('Password must be at least 8 characters')
        }
      },
      private: true,
    },
  },
  { timestamps: true }
)

userSchema.plugin(toJSON)

userSchema.statics.isEmailTaken = async function(email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } })
  return !!user
}

userSchema.methods.isPasswordMatch = function(password) {
  const user = this
  return bcrypt.compareSync(password, user.password)
}

userSchema.pre('save', async function(next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 12)
  }
  next()
})

userSchema.methods.getToken = function(password) {
  const user = this
  return { user, token: jwt.sign({ id: user.id }, JWT_SECRET) }
}

const User = mongoose.model('User', userSchema)

module.exports = User
