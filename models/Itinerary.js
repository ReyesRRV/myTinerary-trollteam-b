const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name: {type: String, required: true},
    user: {type: mongoose.Types.ObjectId, ref:"users", required: true},
    city:{type: mongoose.Types.ObjectId, ref:"City" , required: true},
    price:{type: Number, min: 1 , max: 5 , require: true},
    likes:{type: Array, require: false},
    tags:{type: Array, require: false},
    duration:{type: Number, require: true},
})

module.exports = mongoose.model('Itinerary', itinerarySchema)