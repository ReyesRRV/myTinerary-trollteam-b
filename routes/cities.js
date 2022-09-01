var router = require('express').Router()
const {getCities, getOneCity, addCity, modifyCity, removeCity} = require('../controllers/citiesControllers')


router.get('/',getCities)
router.post('/',addCity)
router.delete('/:id',removeCity)
router.get('/:id',getOneCity)





// router.get(getCities)

// router.route('/:id')
// .put(modifyCity)

module.exports = router