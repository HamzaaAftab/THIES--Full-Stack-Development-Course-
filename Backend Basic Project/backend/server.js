const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv= require('dotenv')
dotenv.config()

const User = require("./models/userModel.js")
const userRouter = require('./routes/userRoute.js')
mongoose.connect(process.env.URI).then(()=>{
    console.log("DB Connected Successfully");
})
.catch((err)=>{
    console.log("error", err);
})

app.use(express.json())
app.use(userRouter)


app.listen(process.env.PORT || 8000, ()=>{
    console.log(`App is running on port ${process.env.PORT}`);
    
})


