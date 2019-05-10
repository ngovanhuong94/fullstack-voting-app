const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// setup environment
dotenv.config()

// connect database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })

// create server
const app = express()

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.use('/api/auth', require('./routes/user'))

const PORT = process.env.PORT || 5000
// run server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))