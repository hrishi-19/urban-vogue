const cryptoJS =require('crypto-js')
const User=require('../../models/User')
const JWT=require('jsonwebtoken')

const login=async(req,res)=>{
    try{
        const user=await User.findOne({userName:req.body.userName})
        
        !user && res.status(401).json("wrong credentials")
        
        const hashedpassword=cryptoJS.AES.decrypt(user.password,process.env.CRYPTO_KEY)
        const paswrd=hashedpassword.toString(cryptoJS.enc.Utf8)
    
        paswrd!=req.body.password && res.status(401).json("wrong credentials")
    
        const accessToken=JWT.sign({
            id:user.id,isAdmin:user.isAdmin
        },process.env.JWT_TOKEN,{expiresIn:"3 d"})
    
        const{password,...others}=user._doc
    
        res.status(200).json({...others,accessToken})
       }
       catch(err){
        res.status(500).json(err.message)
       }
}
module.exports=login