const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name: {type: String, required: true},
    user: {type: String, required: true},
    city:{type: String, required: true},
    price:{type: Number, require: true},
    likes:{type: Array, require: true},
    tags:{type: Array, require: true},
    duration:{type: String, require: true},
})

module.exports = mongoose.model('Itinerary', itinerarySchema)