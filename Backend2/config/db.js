const mongoose=require('mogoose')

const connectDB=()=>{
    try{
        mongoose.connect("mongodb+srv://useraditya:aditya510@@adityadb1practice.xg5moow.mongodb.net/?appName=AdityaDb1practice")
    }catch(err){
        
    }
}