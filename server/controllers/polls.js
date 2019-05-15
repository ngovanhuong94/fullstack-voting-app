const User = require('../models/User')
const Poll = require('../models/Poll')


exports.create = async function (req, res, next) {
    const { id } = req.decoded
    const { question, options } = req.body
    try {
        const user = await User.findById(id)
        const poll = await Poll.create({
            question,
            user,
            options: options.map(option => ({ option, votes: 0 }))
        })
        user.polls.push(poll._id)
        await user.save()

        return res.status(200).json({ user: user._id, ...poll._doc})
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}