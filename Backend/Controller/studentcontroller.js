

const studentData=[]
const studentInfo=(req,res)=>{
    try{
        const{name, rollnum, email}=req.body;
        if(!name||!rollnum||!email){
            return "fill detials"
        }

        studentData.push({name, rollnum, email});
        res.status(201).json({data:studentData,msg:"student info created"})

    }catch (err) {
        res.status(500).json({error: err, msg:'internal'})

    }
}
module.exports= studentInfo