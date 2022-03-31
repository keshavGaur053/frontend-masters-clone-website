const express=require("express");

const cors=require("cors");

const app=express();

app.use(express.json());

app.use(cors());

const coursesController=require("./controllers/courses.controller");

app.use("/courses",coursesController);

//export-->
module.exports=app;