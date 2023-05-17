var express = require('express');
var router = express.Router(); 
var authorModel=require('./model.js')  

router.get("/authors",async(request,response)=> {
    const author=await authorModel.find({});
    const authorlen=author.length;
    try{
        response.send(author);
    }
    catch(error){
        response.status(500).send(error);
        console.log("Added Successfully")

    }
}); 

module.exports=router;