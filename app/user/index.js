var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user route resource');
});

/* GET home page. */
router.get('/details', function(req, res, next) {
  res.json({'name': 'user needs to be authenticated first to the details.'});
});


module.exports = router;
