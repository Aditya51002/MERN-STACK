const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is String"]
    },
    mobileNum:{
        type:Number,
        required:[true,"mobile num is required"]
    },
    emailId:{
        type:String,
        required:[true,"email id is required"],
        unique:false
    }



})

module.exports=mongoose.model('User',userSchema)