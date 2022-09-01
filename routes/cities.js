const Router = require('express').Router()
const {getCities, getOneCity, addCity, modifyCity, removeCity} = require('../controllers/citiesControllers')


Router.route('/')
.get(getCities)
.post(addCity)

Router.route('/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

module.exports = Router