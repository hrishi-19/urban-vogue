import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { register } from '../store/apiCalls'
const Container = styled.div`
width:100vw;
height:100vh;
background-color:#fafafa;
display:flex;
justify-content:center;
align-items:center;

`
const Wrapper = styled.div`
padding:20px;
`
const Title = styled.h1``
const Form = styled.form`
display:flex;
flex-direction:column;
padding:10px 15px;
`
const Input = styled.input`
padding:5px;
margin:5px 0;

`
const Button = styled.button``

const Register = () => {
  const[userName,setUserName]=useState("")
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const[confpass,setconfpass]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(password!==confpass){
        console.log("password not matching")
       
    }
    else{
      
      register(dispatch,{userName,email,password})
      navigate('/signin')

    }
  }
  return (

    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="username" onChange={(e)=>setUserName(e.target.value)}/>
          <Input type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
          <Input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
          <Input  type="password" placeholder="confirm-password" onChange={(e)=>setconfpass(e.target.value)}/>
          <Button>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>


  )
}

export default Register
