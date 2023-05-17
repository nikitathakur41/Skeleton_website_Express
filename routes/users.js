var express = require('express');
var router = express.Router();

/* GET users listing. */
var data = [
    {
    "id":1,
    "name":"Nikita",
    "role":"Student",
    "profession":"IT"
    },
    
    {
    "id":2,
    "name":"Anshu",
    "role":"Student",
    "profession":"IT"
    },
    
    {
    "id":3,
    "name":"Sakshi",
    "role":"Student",
    "profession":"IT"
    },
    
    {
    "id":4,
    "name":"Ishani",
    "role":"Student",
    "profession":"IT"
    }
  ]
    
router.get('/', function(req, res, next) {
  res.render('users',
  {data});
});

module.exports = router;
