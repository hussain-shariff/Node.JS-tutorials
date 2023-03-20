const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
    username : String,
    password : Number,
    email : String
})

module.exports = mongoose.model('auth', authSchema)