const mongoose = require('mongoose')


const citiesSchema = new mongoose.Schema({
    city: {String, required: true},
    image: {String, required: true},
    country:{String, required: true},
    description:{String, require: true},
    population:{Number, min: 1000, max: 100000000,require: true},
    fundation:{Date, require: true},

})

module.exports = mongoose.model('cities', citiesSchema)
    //nombre de la colección
    //esquema de datos
