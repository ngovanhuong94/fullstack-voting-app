const router = require('express').Router()
const jwtAuth = require('../middleware/auth')

router.post('/new', jwtAuth, async (req, res, next) => {
    res.send('Ok!')
})

module.exports = router 