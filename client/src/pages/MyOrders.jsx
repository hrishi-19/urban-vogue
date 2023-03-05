import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const MyOrders = () => {
    const user=useSelector(state=>state.user.currentuser)
    console.log(user)

    useEffect(()=>{
        const getOrders=async()=>{
            const response=await fetch(`/api/order/find/${user._id}`,{
              method:"GET",
              headers:{
                'token':`Bearer ${user.accessToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            })
            const data=await response.json()
            console.log(data)
        
        }
        getOrders()
           
    },[])
  return (
    <div>MyOrders</div>
  )
}

export default MyOrders