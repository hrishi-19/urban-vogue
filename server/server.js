const express=require('express')
require('dotenv').config()
const mongoose=require('mongoose')
const cors=require('cors')
const userRoute=require("./routes/user/user")
const cartRoute=require('./routes/cart/cart')
const orderRoute=require('./routes/order/order')
const productRoute=require('./routes/product/product')
const authRoute=require('./routes/auth/auth')
const stripeRouter=require('./routes/stripe/stripe')


// initialize express app
const app=express()

//db connection
mongoose.connect(process.env.CONNECTION_URL)
.then(()=>{
    console.log("connected to db")
})
.catch(err=>console.log(err.message))

app.use(express.json())
// app.use(cors({
//     origin:"http://localhost:3000/"
//   }))

app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/cart',cartRoute)
app.use('/api/product',productRoute)
app.use('/api/order',orderRoute)
app.use('/api/stripe',stripeRouter)



const PORT=process.env.PORT||9000

app.listen(PORT,()=>{
    console.log("server running on port "+PORT)
})