const express=require('express')
const route = express.Router()
const studentInfo= require('../Controller/studentcontroller')

route.post('/student-post',studentInfo)
module.exports=route;