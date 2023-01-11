import React from 'react'
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


const Container=styled.div`
width:100%;
height:100vh;
display:flex;
postion:relative;

`
const Arrow=styled.div`
width:50px;
height:50px;
background-color:#ddd;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
postion:absolute;
top:0;
bottom:0;
margin:auto;
left:${props=>props.direction==='left' && "10px"};
right:${props=>props.direction==='right' && "10px"};
cursor:pointer;
opacity:0.5;

`
const Wrapper=styled.div`
height:100%;
`
const Slide=styled.div`
display:flex;
align-items:center;

`
const ImageContainer=styled.div`
flex:1
`
const InfoContainer=styled.div`
flex:1
`

const Slider = () => {
  return (
   <Container>
   <Arrow direction="left">
   <ArrowBackIosNewOutlinedIcon/>
   </Arrow>
   <Wrapper>
   <ImageContainer><img src="https://i.ibb.co/XsdmR2c/1.png"/></ImageContainer>
   <InfoContainer></InfoContainer>
   </Wrapper>
   <Arrow direction="right">
   <ArrowForwardIosOutlinedIcon/>
   </Arrow>
   </Container>
  )
}

export default Slider