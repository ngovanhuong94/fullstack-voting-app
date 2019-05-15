const router = require('express').Router()
const jwtAuth = require('../middleware/auth')
const pollController = require('../controllers/polls')

router.post('/new', jwtAuth, pollController.create)

module.exports = router 