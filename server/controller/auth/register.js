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
       const{password,...others}=user._doc
       res.status(201).json(others)
    }
    catch(err){
        res.status(500).json(err)
    }
}
module.exports=register