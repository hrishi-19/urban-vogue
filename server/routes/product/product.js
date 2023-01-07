const router=require('express').Router()


router.get('/',(req,res)=>{
    res.send("product")
})


module.exports=router