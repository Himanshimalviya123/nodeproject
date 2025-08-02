const  stumodels=require("../models/stumodel")
const stusave=async(req,res)=> {
const {rollno,name,city,fees}=req.body;
const student=await stumodels.create({
    rollno:rollno,
    name:name,
    city:city,
    fees:fees
})
res.send("data save!!!")
}
module.exports={
    stusave
}
