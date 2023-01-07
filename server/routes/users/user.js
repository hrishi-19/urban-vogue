const router=require('express').Router()


router.get('/usertest',(req,res)=>{
    res.send("usertest")
})



module.exports=router