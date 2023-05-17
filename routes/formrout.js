var express = require('express');
var router = express.Router(); 
var authorModel=require('./model.js') 
router.get('/in',(req,res)=>{
    return res.sendFile(__dirname + '/index.html');
}); 

module.exports=router

