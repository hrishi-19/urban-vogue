import React from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {
  const location=useLocation();

  console.log(location.state)
  return (
    <div>Success</div>
  )
}

export default Success