import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
flex:1;
margin:3px;
position:relative;

`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover
`
const Info = styled.div`
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
const Title = styled.h1`
color:white;
margin-bottom:20px;

`
const Button = styled.button`
border:0;
padding:10px;

`

function CategoryItem({ item }) {
  return (
    <div>
      <Link to={`/products/${item.title}`}>
        <Container>
          <Image src={item.img} />
          <Info><Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
          </Info>
        </Container></Link>
    </div>
  )
}

export default CategoryItem
