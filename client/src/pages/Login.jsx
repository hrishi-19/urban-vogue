import React from 'react'
import styled from 'styled-components'
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
const Link=styled.a``

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
        
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Link href="">Forgot Passowrd?</Link>
          <Link href="">Register</Link>
          <Button>signin</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login