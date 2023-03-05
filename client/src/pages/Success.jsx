import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAll } from '../store/cart'
import {Link} from 'react-router-dom'

const Success = () => {
  const user=useSelector(state=>state.user.currentuser)
  const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  useEffect(()=>{
   const postOrder=async()=>{
    const response=await fetch("/api/order/create",{
      method:"POST",
      headers:{
        'token':`Bearer ${user.accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(
        {
          userId:user._id,
          products:cart.products,
          amount:cart.totalPrice,
          address:{
            lane:"elman",state:"ka 576111"
          }
        }
      )
    })
    const data=await response.json()
    console.log(data)
    dispatch(clearAll({products:[],quantity:0,totalPrice:0}))
   }
   postOrder()

  },[])

 
  return (
    <>
    <div>Success</div>
    <Link to={'/myorders'}>My Orders</Link>
  )
    </>
   ) 
}

export default Success