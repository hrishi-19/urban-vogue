const Order = require('../../models/Order')

const createOrder=async(req,res)=>{
    const newOrder=new Order(req.body)

    try{
       const savedOrder=await newOrder.save()
        res.status(200).json(savedOrder)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const updateOrder=async(req,res)=>{
    
    try{
        const updatedOrder=await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedOrder)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deleteOrder=async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
}
const getOrders=async(req,res)=>{
    try{
        const Orders=await Order.find({userId:req.params.userid})
        res.status(200).json(Orders)

    }
    catch(err){
        res.status(500).json(err)
    }
}
const getAll=async(req,res)=>{
    try{
        const Orders=await Order.find()
        res.status(200).json(Orders)

    }
    catch(err){
        res.status(500).json(err)
    }
}


const getIncome=async(req,res)=>{
    const date=new Date()
    const lastmonth=new Date(date.setMonth(date.getMonth()-1))
    const previousmonth=new Date(new Date().setMonth(lastmonth.getMonth()-1))
    try{
        const income=await Order.aggregate([
            {$match:{createdAt:{$gte:previousmonth}}},
            {
                $project:{
                    month:{$month:"$createdAt"}
                },
                $sales:"$amount"
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"}
                }
            }
        ])
        res.status(200).json(income)

    }catch(err){
        res.status(500).json(err)
    }   
}


module.exports={createOrder,updateOrder,deleteOrder,getOrders,getAll,getIncome}