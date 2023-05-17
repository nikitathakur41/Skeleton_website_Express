var express = require('express');
var router = express.Router(); 
var authorModel=require('./model.js')  

router.post("/add_author",async(request,response)=>{
    const author= new authorModel(request.body);

    try{
        await author.save();
        response.status(200).send(author);
       }
       catch(error){
        response.status(500).send(error);
    }
}); 
module.exports=router;