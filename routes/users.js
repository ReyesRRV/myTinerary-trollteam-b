const express = require('express');
const router = express.Router();
const { getUser, createUser } = require('../controllers/userController' )


router.get('/:id', getUser );
router.post('/', createUser);

module.exports = router;


// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
