const router = require('express').Router()
const jwtAuth = require('../middleware/auth')
const pollController = require('../controllers/polls')

router.get('/', pollController.getAll)
router.post('/new', jwtAuth, pollController.create)
router.get('/:pollId', pollController.getPoll)
router.post('/:pollId/vote', jwtAuth, pollController.vote)

module.exports = router 