import React from 'react'
import styled from 'styled-components'
import Flash from '../components/Flash'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
const Container=styled.div`

`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;

`
const Filter=styled.div`
margin:20px;

`
const Title=styled.h1`
margin:20px;

`
const FilterText=styled.span`
font-size:20;
font-weight:600;

`
const Select=styled.select`
padding:10px;
margin-right:10px;
`
const Option=styled.option`
padding:5px;`
const ProductList = () => {
  return (
    <div><Container><Navbar/>
    <Flash/>
    <Title>Dressess</Title>
    <FilterContainer>
    <Filter>
    <FilterText>Filter Products:</FilterText>
    <Select>
    <Option disabled selected>
    Color
    </Option>
    <Option>white</Option>
    <Option>Black</Option>
    <Option>Red</Option>
    <Option>Blue</Option>
    </Select>
    <Select>
    <Option disabled selected>
    Size
    </Option>
    <Option>S</Option>
    <Option>M</Option>
    <Option>L</Option>
    <Option>XL</Option>
    </Select>
    </Filter>
    <Filter>
    <FilterText>Sort Products:</FilterText>
    <Select>
    <Option>Newest</Option>
    <Option>price(asc)</Option>
    <Option>Price(desc)</Option>

    </Select>
    </Filter>
    </FilterContainer>
    <Products/>
    </Container></div>
  )
}

export default ProductList