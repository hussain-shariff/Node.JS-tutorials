const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name : String,
    company : {
        type : String,
        enum : ['liddy', 'ikea', 'caressa', 'marcos']
    },
    rating : Number,
    price : Number,
    featured : Boolean,
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('products', schema)