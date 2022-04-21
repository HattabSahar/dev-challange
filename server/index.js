import express from 'express'
const { PORT } = process.env
const app = express()

const port = PORT || 8080
app.listen({ port }, () => {
  console.log(`Server running on port ${port}`)
})
