let students=[];
const addStudent=(studentData)=>{
    students.push(studentData);
};
const getAllStudents=()=>{
    return students;
};
module.exports={addStudent,getAllStudents};