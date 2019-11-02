var express = require('express');
//setting up express router -- to handle http methods
// http methods are GET, POST, PUT, DELETE
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { msg: 'success'});
  //res.render('index', { title: 'Express App' });
});

module.exports = router;
