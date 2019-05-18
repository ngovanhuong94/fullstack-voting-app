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

exports.vote = async function (req, res, next) {
    // get poll id
    const { pollId } = req.params
    // get user id 
    const { id: userId } = req.decoded
    const { answer } = req.body
    try {
        if (answer) {
            // find poll by id
            const poll = await Poll.findById(pollId)
            if (!poll) { return res.status(400).json({ message: 'Poll not found.'})}
            // change votes
            const votes = poll.options.map(option => 
                option.option === answer 
                ?  {
                        option: option.option,
                        _id: option._id,
                        votes: option.votes + 1
                    } 
                : option
            )
            if (poll.voted.filter(user => user.toString() === userId).length > 0) {
                throw new Error('You already voted.')
            } else {
                poll.voted.push(userId)
                poll.options = votes
                await poll.save()
                return res.status(200).json(poll)
            }
        } else {
            return res.status(400).json({ message: 'No answer provided.'})
        }
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: err.message })
    }
}