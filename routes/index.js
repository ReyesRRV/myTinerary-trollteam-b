var express = require('express');
var router = express.Router();
const citiesRouter = require('../controllers/citiesControllers')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Probando cosas =)'});
});

// router.use('cities',citiesRouter)
module.exports = router;
