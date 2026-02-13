const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    name:{
        type :String,
        required:[true,"name is required"]
    },
    mobileNum:{
        type:Number,
        required:[true,"number is req"]
    },
    emailId:{
        type:String,
        required:[true,"email id is req"],
        unique:[true,"dublicate mail iod"]
    }
})

module.exports=mongoose.model('User',userSchema)