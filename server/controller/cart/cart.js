const Cart = require('../../models/Cart')

const createCart=async(req,res)=>{
    const newCart=new Cart(req.body)

    try{
       const savedCart=await newCart.save()
        res.status(200).json(savedCart)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const updateCart=async(req,res)=>{
    
    try{
        const updatedCart=await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedCart)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deleteCart=async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("cart has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
}


module.exports={createCart,updateCart,deleteCart}