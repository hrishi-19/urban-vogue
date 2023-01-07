const express=require('express')
require('dotenv').config()

//app initialize
const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello")
})
const PORT=process.env.PORT||9000

app.listen(PORT,()=>{
    console.log("server running on port"+PORT)
})