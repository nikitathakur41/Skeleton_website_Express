const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    name: {
        type : String,
    
    },
    age: {
        type : Number,
        
    },
    role: {
        type : String,
    
    },
    profession: {
        type : String,
        
    },
    email:{
       type : String,
       //lowercase:true,
    },
    password:{
        type : String,
        //required:true,
    },

    });

const Author = mongoose.model("Author",AuthorSchema);

module.exports = Author;

