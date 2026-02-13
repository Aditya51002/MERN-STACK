const express=require('express');
const router=express.Router();
const studentController= require('../Controller/studentControllers')

router.post('/add-student', studentController.createStudents);
router.get('/students', studentController.getStudents)

module.exports=router;