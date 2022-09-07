const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    mail:{type: String, required: true},
    password:{type: String, require: true},
    photo:{type: String, require: true},
    country:{type: String, require: true},
})

module.exports = mongoose.model('User', userSchema)
    //nombre de la colección
    //esquema de datos
