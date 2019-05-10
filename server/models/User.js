const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

// hash password before saving user
userSchema.pre('save', async function (next) {
    try {
        // when not change password
        if (!this.isModified('password')) {
            return next()
        } 
        // hash password
        const hashPassword = await bcrypt.hash(this.password, 10)
        // save hash password
        this.password = hashPassword
        // run next
        return next()
    } catch (err) {
        return next(err)
    }
})

// compare password and hash
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', userSchema)