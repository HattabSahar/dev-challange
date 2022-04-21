import express from 'express'
import mongoose from 'mongoose'
const { MONGO_DB_URI, PORT } = process.env
const app = express()

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGO_DB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  const port = PORT || 8080
  app.listen({ port }, () => {
    console.log(`Server running on port ${port}`)
  })
})
mongoose.connection.on('error', error => console.error(error))
