const express=require("express")
const app=express();
const sturouter=require("./routes/sturoutes")

app.use("/student",sturouter)
app.listen(7000,()=>{
    console.log("server run on the 7000 port!!!!!!!!!!!");
    
})