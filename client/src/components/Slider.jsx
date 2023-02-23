import React from 'react'
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from 'react';
import { data } from '../data';


const Container = styled.div`
width:100%;
height:100vh;
display:flex;
postion:relative;
overflow:hidden;

`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#ddd;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left:${props => props.direction === 'left' && "10px"};
right:${props => props.direction === 'right' && "10px"};
cursor:pointer;
opacity:0.5;
z-index:100;

`
const Wrapper = styled.div`
height:100%;
display:flex;
transition:all 1s ease;
transform:translateX(${props=>props.ind*-100}vw);
`
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;

`
const ImageContainer = styled.div`
height:100%;

flex:1
`
const InfoContainer = styled.div`
flex:1;
padding:50px;
`
const Title=styled.h1`
font-size:70px;
`
const Desc=styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
`
const Button=styled.button`
color:black;
padding:15px;
font-size:1.25rem;
box-shadow:1px 0 10px 1px gray;
`
const Slider = () => {
  const [slideIndex,setIndex]=useState(0);
  const handleClick=(direction)=>{
    if(direction==='left'){
        setIndex(slideIndex>0?slideIndex-1:2)
    }
    else{
      setIndex(slideIndex<2?slideIndex+1:0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper ind={slideIndex}>
        {
          data.map(item=>{
            return(
              <Slide id={item.id} key={item.id}>
              <ImageContainer><img src={item.img} width="100%" height="100%" /></ImageContainer>
              <InfoContainer>
              <Title>{item.title}</Title><Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
            )}
          )
        }
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider