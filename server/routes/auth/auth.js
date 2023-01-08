const router=require('express').Router()
const login = require('../../controller/auth/login')
const register=require('../../controller/auth/register')



router.post('/register',register)
router.post('/login',login)



module.exports=router