const User = require('../models/User')
const Poll = require('../models/Poll')

exports.getAll = async function (req, res, next) {
    try {
        const polls = await Poll.find({}).populate('user', ['username', 'id'])
        return res.status(200).json(polls)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

exports.getPoll = async function (req, res, next) {
    try {
        const poll = await Poll.findById(req.params.pollId).populate('user', ['username', 'id'])
        if (!poll) {
            throw new Error('No poll found.')
        }
        return res.status(200).json(poll)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}
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