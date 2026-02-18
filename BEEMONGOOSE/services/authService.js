const AuthUser= require('../models/AuthUser')
const bcrpt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const register= async(email, password)=>{
    const emailExist = awit AuthUser.findOne({email})
    if(emailExist){
        throw error("email is already registered")

    }
    const salt = wait bcrpt.genSalt(8)
    const hashpassword= await bcrpt

}