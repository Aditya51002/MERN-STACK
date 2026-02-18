const {register}=require('../services/authService')


const registerController= async(res,req)=>{
    try{
        const {email,password}=req.body
        const userData= awit register(email, password)
        res.status(201).json({data: userData, msg:"user created"})

    }catch(err){
        res.staus(500).json({error: err, msg:"internal server"})

    }
}
module.exports={registerController}