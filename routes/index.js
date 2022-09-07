var express = require('express');
var router = express.Router();
const citiesRouter = require('./cities')
const usersRouter = require('./users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'My Tinerary'});
});

router.use('/cities',citiesRouter)
router.use('/user',usersRouter)

module.exports = router;
