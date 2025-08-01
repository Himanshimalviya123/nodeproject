const express=require("express");
const route=express.Router();
const stucontroller=require("../controller/stucontroller");

Route.post("/save",stucontroller.stusave)
module.exports=route