var express = require('express');
var router = express.Router();
const citiesRouter = require('./cities')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'My Tinerary'});
});

router.use('/cities',citiesRouter)

module.exports = router;
