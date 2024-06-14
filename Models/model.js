let databaseConnection = require("../database/connection")
let mongoose = require("mongoose")
let loginSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type:String,
        required:true
    }  
})
let tbl_emp = mongoose.model("tbl_emp",loginSchema)
module.exports = tbl_emp;