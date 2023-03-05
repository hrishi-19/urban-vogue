const { verfifyTokenAndAdmin, verifyToken, verfifyTokenAndAuth } = require('../../controller/auth/verifyToken')
const { createOrder, updateOrder, getOrders, deleteOrder, getAll, getIncome } = require('../../controller/order/order')

const router=require('express').Router()

router.get('/',verfifyTokenAndAdmin,getAll)
router.post('/create',verifyToken,createOrder)
router.put('/:id',verfifyTokenAndAdmin,updateOrder)
router.get('/find/:userid',verifyToken,getOrders)
router.delete('/:id',verfifyTokenAndAdmin,deleteOrder)
router.get('/income',verfifyTokenAndAdmin,getIncome)

module.exports=router