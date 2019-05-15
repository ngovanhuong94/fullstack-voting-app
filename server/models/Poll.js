const mongoose = require('mongoose')
const Schema = mongoose.Schema

const optionSchema = new Schema({
    option: String,
    votes: { type: Number, default: 0 }
})

const pollSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    options: [optionSchema],
    voted: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    question: String,
    created: { type: Date, default: Date.now }
})


module.exports = mongoose.model('Poll', pollSchema)

