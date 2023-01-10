const JWT=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token
    if(authHeader){
        const token=authHeader.split(" ")[1]
        JWT.verify(token,process.env.JWT_TOKEN,(err,user)=>{
                if(err) res.status(403).json("token not valid")
                req.user=user
                next()
                
        })
    }else{
        res.status(401).json("not authenticated")
    }
}

const verfifyTokenAndAuth=(req,res,next)=>{
    verifyToken(req,res,()=>{
        console.log(req)
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("not allowed")
        }
        
    })
}
const verfifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).json("not allowed")
        }
        
    })
}

module.exports={verifyToken,verfifyTokenAndAuth,verfifyTokenAndAdmin}