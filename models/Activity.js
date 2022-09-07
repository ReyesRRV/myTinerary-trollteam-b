const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    name: {type: String, required: true},
    photo: {type: String, required: true},
    itinerary:{type: String, required: true},
})

module.exports = mongoose.model('Activity', activitySchema)
    //nombre de la colección
    //esquema de datos