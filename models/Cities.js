const mongoose = require('mongoose')


const citiesSchema = new mongoose.Schema({
    city: {String, required: true},
    photo: {String, required: true},
    country:{String, required: true},
    description:{String, require: true},
    population:{Number, min: 1000, max: 100000000,require: true},
    fundation:{Date, require: true},

})

const Cities = mongoose.model('cities', citiesSchema)
module.exports = Cities
    //nombre de la colección
    //esquema de datos
