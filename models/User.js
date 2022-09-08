const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    mail:{type: String, required: true},
    password:{type: String, require: true},
    photo:{type: String},
    country:{type: String, require: true},
})

module.exports = mongoose.model('users', userSchema)
