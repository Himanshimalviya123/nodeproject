const mongoose=require("mongoose")
const stuschema=new mongoose.schema({
    rollno:Number,
    name:String,
    city:String,
    fees:Number
}
)
module.exports=mongoose.model("student",stuschema)