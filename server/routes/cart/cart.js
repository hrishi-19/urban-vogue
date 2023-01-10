const router=require('express').Router()
const { verifyToken, verfifyTokenAndAuth, verfifyTokenAndAdmin} = require('../../controller/auth/verifyToken')
const { createCart, updateCart, deleteCart, getCart, getAll } = require('../../controller/cart/cart')


router.get('/',verfifyTokenAndAdmin,getAll)
router.post('/create',verifyToken,createCart)
router.put('/:id',verfifyTokenAndAuth,updateCart)
router.get('/find/:userid',verfifyTokenAndAuth,getCart)
router.delete('/:id',verfifyTokenAndAuth,deleteCart)


module.exports=router