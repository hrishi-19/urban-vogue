import React from 'react'
import styled from 'styled-components'
import { popularproducts } from '../data'
import Product from './Product'
const Container=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`

const Products = () => {
  return (
    <Container>
    {popularproducts.map(item=>(
      <Product item={item} key={item.id}/>
    ))}
    </Container>
  )
}

export default Products