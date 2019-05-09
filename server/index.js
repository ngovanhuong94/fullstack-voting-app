const express = require('express')
const dotenv = require('dotenv')

// setup environment
dotenv.config()

// create server
const app = express()


const PORT = process.env.PORT || 5000
// run server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))