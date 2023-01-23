import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container=styled.div`
height:60vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`

const Title=styled.h1``

const Description=styled.div``

const InputContainer=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const Input=styled.input``

const Button=styled.button``

const NewsLetter = () => {
  return (
    <div>
    <Container>
    <Title>NewsLetter</Title>
    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quisquam!</Description>
    <InputContainer>
    <Input placeholder='Your email id'/>
    <Button> <SendIcon/></Button>
   
    </InputContainer>
   
    </Container>
      
    </div>
  )
}

export default NewsLetter
