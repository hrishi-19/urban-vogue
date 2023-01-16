import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container=styled.div`
width:100vw;
display:flex;
padding:10px;
`

function Catergories() {
  return (
    <div>
      <Container>
      {categories.map(item=> <CategoryItem item={item}/>)}
      </Container>
    </div>
  )
}

export default Catergories
