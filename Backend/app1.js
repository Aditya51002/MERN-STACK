const express = require("express");
const app= express();
// const port =8080;   

app.use(express.json());

let employees=[];

app.post("/employees",(req,res)=>{
    const{emp_name, emp_code, emp_email}=req.body;
    if(!emp_name|| !emp_code || !emp_email){
        return res.status(400).json({message: "fill details"});
    }
    const newEmployee={
        emp_name,
        emp_code,
        emp_email
    };
    employees.push(newEmployee);
    res.status(201).json({
        message:"done", employee:newEmployee
    });
});
app.get("/admin",(req,res)=>{
    res.status(200).json({msg:employees});
});
const PORT=3000;
app.listen(PORT,()=>{
    console.log('server running on http:// local host:${PORT}');
});