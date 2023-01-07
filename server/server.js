const express=require('express')
require('dotenv').config()
const mongoose=require('mongoose')
const userRoute=require("./routes/users/user")

// initialize express app
const app=express()

//db connection
mongoose.connect(process.env.CONNECTION_URL)
.then(()=>{
    console.log("connected to db")
})
.catch(err=>console.log(err.message))

app.use(express.json())

app.use('/api/users',userRoute)
const PORT=process.env.PORT||9000

app.listen(PORT,()=>{
    console.log("server running on port "+PORT)
})