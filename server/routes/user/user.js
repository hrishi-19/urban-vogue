const router=require('express').Router()
const cryptoJS =require('crypto-js')
const{ verfifyTokenAndAuth}=require('../../controller/auth/verifyToken')
const{ verfifyTokenAndAdmin}=require('../../controller/auth/verifyToken')
const { updateUser, deleteUser, getSingleUser, getAllUsers, getStats } = require('../../controller/user/user')
const User = require('../../models/User')

router.put('/:id',verfifyTokenAndAuth,updateUser)
router.delete('/:id',verfifyTokenAndAdmin,deleteUser)

router.get('/find/:id',verfifyTokenAndAdmin,getSingleUser)

router.get('/',verfifyTokenAndAdmin,getAllUsers)
router.get('/stats',verfifyTokenAndAdmin,getStats)


module.exports=router