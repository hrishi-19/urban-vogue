const { verfifyTokenAndAdmin,verifyToken } = require('../../controller/auth/verifyToken')
const { createProduct, updateProduct, deleteProduct, getSingleProduct, getAllProducts } = require('../../controller/product/product')

const router=require('express').Router()


router.post('/create',verfifyTokenAndAdmin,createProduct)
router.put('/:id',verfifyTokenAndAdmin,updateProduct)
router.delete('/:id',verfifyTokenAndAdmin,deleteProduct)
router.get('/find/:id',getSingleProduct)
router.get('/',getAllProducts)


module.exports=router