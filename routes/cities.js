const Router = require('express').Router()

const citiesControllers = require('../controllers/citiesControllers')
const {getCities, getOneCity, addCity, modifyCity, removeCity} = citiesControllers

Router.route('cities')
.get(getCities)
.post(addCity)

Router.route('/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

module.exports = Router