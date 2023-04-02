const multer=require("multer")
const mongoose=require("mongoose");
const express=require("express");
const app=express();
const route=require("./routes/route");
const cors=require("cors")

app.use(express.json())

app.use(cors())

app.use(multer().any());

mongoose.connect("mongodb+srv://ashanur:nurasha2000@ashanurdb.x6brlcb.mongodb.net/PostApp").then(()=>console.log("MongoDB is connected")).catch(err=>console.error(err))

app.use("/",route);

app.listen(3000, ()=>console.log(`Express app running on port ${3000}`))