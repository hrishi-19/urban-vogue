import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { login } from '../store/apiCalls'
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
const Button = styled.button`
&:disabled{
  color:green;
  cursor:not-allowed;
}
`
const Link=styled.a``

const Login = () => {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.User)
  console.log(user)
  const[userName,setUserName]=useState("")
  const[password,setpasswd]=useState("")
  const{isFetching,error}=useSelector(state=>state.User)
  const handleLogin=(e)=>{
    e.preventDefault()
    login(dispatch,{userName,password})
    
    

  }
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form >
        
          <Input placeholder="username"  onChange={(e)=>setUserName(e.target.value)} />
          <Input placeholder="password" onChange={(e)=>setpasswd(e.target.value)}/>
          <Button onClick={handleLogin} disabled={isFetching}>signin</Button>
          {error && <p style={{color:"red"}}>something went wrong...</p>}
          <Link href="">Forgot Passowrd?</Link>
          <Link href="">Register</Link>
         
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login