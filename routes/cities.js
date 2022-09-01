var router = require('express').Router()
const {getCities, getOneCity, addCity, modifyCity, removeCity} = require('../controllers/citiesControllers')


router.get('/',getCities)
router.post('/',addCity)
router.delete('/:id',removeCity)





// router.get(getCities)

// router.route('/:id')
// .put(modifyCity)
// .get(getOneCity)

module.exports = router