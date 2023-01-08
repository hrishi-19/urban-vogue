const cryptoJS =require('crypto-js')
const User=require('../../models/User')

const register=async(req,res)=>{
    const{userName,email,password}=req.body
    const newUser=new User({
        userName,
        email,
        password:cryptoJS.AES.encrypt(password,process.env.CRYPTO_KEY).toString()
    })
    try{
       const user= await  newUser.save()
       res.status(201).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
}
module.exports=register