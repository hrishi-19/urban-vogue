const router=require('express').Router()
const { verifyToken, verfifyTokenAndAuth} = require('../../controller/auth/verifyToken')
const { createCart, updateCart, deleteCart } = require('../../controller/cart/cart')



router.post('/create',verifyToken,createCart)
router.put('/:id',verfifyTokenAndAuth,updateCart)
router.delete('/:id',verfifyTokenAndAuth,deleteCart)


module.exports=router