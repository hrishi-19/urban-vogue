import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container=styled.div`
max-width:100%;
display:flex;
padding:10px;
`

function Catergories() {
  return (
    <div>
      <Container>
      {categories.map(item=> <CategoryItem item={item} key={item.id}/>)}
      </Container>
    </div>
  )
}

export default Catergories
