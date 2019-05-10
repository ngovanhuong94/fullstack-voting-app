const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.register = async function (req, res, next) {
    const { username, password } = req.body

   try {
       const user = await User.create({ username, password })
       const { id } = user
        // sign user
       const token = jwt.sign({ id, username }, process.env.SECRET)
       // send token and user data to client
        return res.status(200).json({
            id,
            username,
            token
        })
   } catch (err) {
       console.log(err)
       // username was exist
       if (err.code === 11000) {
           err.message = 'Username was used'
       }

       return res.status(400).json({ message: err.message })
   }
}