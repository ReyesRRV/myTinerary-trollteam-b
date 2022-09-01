var router = require('express').Router()
const {getCities, getOneCity, addCity, modifyCity, removeCity} = require('../controllers/citiesControllers')


router.get('/',getCities)
router.post('/',addCity)
router.delete('/:id',removeCity)
router.get('/:id',getOneCity)
router.patch('/:id',modifyCity)

module.exports = router