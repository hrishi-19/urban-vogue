const router=require('express').Router()
const User=require('../../models/User')

router.post('/register',(req,res)=>{
    const{userName,email,password}=req.body
    const newUser=new User({
        userName,
        email,
        password
    })
})



module.exports=router