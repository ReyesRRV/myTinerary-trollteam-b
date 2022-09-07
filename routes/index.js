var express = require('express');
var router = express.Router();
const citiesRouter = require('./cities')
const usersRouter = require('./users')
const itinerariesRouter  = require('./itinerary')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'My Tinerary'});
});

router.use('/cities',citiesRouter)
router.use('/user',usersRouter)
router.use('/itineraries',itinerariesRouter)

module.exports = router;
