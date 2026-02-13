const studentService=require('../Services/studentService');
const createStudents=(req,res)=>{
    try{
        const{stud_name, course_name, stud_email, mobile}=req.body;
        const newStudent={stud_name, course_name, stud_email,mobile};
        studentService.addStudent(newStudent);
        res.status(201).json({ data: newStudent, message:"Data added successfully"});
    }catch(error){
        res.status(500).json({error: error.message, message: "Internal Server Error"});
    }
};

const getStudents=(req,res)=>{
    try{
        const students=studentService.getAllStudents();
        res.status(200).json({total_students: students.length, data: students});
    }catch(error){
        res.status(500).json({message:"Internal Server Error",error: error.message})
    }
}
module.exports={createStudents,getStudents};