import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
flex:1/3;
margin:3px;
position:relative;

`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover
`
const Info=styled.div`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
`
const Title=styled.h1`
color:white;
margin-bottom:20px;

`
const Button=styled.button`
border:0;
padding:10px;

`

function CategoryItem({item}) {
  return (
    <div>
      <Container>
      <Image src={item.img}/>
      <Info><Title>{item.title}</Title>
      <Button>SHOP NOW</Button>
      </Info>
      </Container>
    </div>
  )
}

export default CategoryItem