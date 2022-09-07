const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: {type: String, required: true},
    user: {type: String, required: true},
    itinerary:{type: String, required: true},
})

module.exports = mongoose.model('Comment', commentSchema)
