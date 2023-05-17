var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page:1,menuId:1 }); 
 // res.render('index', {title: 'Express'});
});


module.exports = router;
