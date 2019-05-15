const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.headers['authorization']) {
        const token = req.headers['authorization'].split(' ')[1]
        jwt.verify(token, process.env.SECRET, function (err, decode) {
            if (err) {
                return res.status(400).json({ message: 'Unauthorized'})
            } else {
                req.decoded = decode
                return next()
            }
        })
    } else {
        return res.status(400).json({ message: 'No token provided'})
    }
}