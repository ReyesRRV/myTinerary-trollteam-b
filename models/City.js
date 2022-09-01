const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema({
    city: {type: String, required: true},
    image: {type: String, required: true},
    country:{type: String, required: true},
    description:{type: String, require: true},
    population:{type: Number, min: 1000, max: 100000000,require: true},
    fundation:{type: Date, min: 1000, max: 2022, require: true},
})

module.exports = mongoose.model('City', citiesSchema)
    //nombre de la colección
    //esquema de datos
