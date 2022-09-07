var express = require('express');
var router = express.Router();
const citiesRouter = require('./cities')
const usersRouter = require('./users')
const itinerariesRouter  = require('./itinerary')
const commentsRouter  = require('./comments')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'My Tinerary'});
});

router.use('/cities',citiesRouter)
router.use('/user',usersRouter)
router.use('/itineraries',itinerariesRouter)
router.use('/comments',commentsRouter)

module.exports = router;
