const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const server = express()
const router = require('./routes')

require('dotenv').config()

const port = process.env.PORT || 5000
const mongoURL = process.env.MONGOURL

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connection to Database established successfuly'))
  .catch(err => {
    console.log(err)
    process.abort()
  })

server.use(express.json())
server.use(cors())
server.use(router)

server.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})
