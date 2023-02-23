import React from 'react'
import styled from 'styled-components'
import Flash from '../components/Flash'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
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
  const {cat}=useParams()
  const[filters,setfilters]=useState({})
  const[sort,setsort]=useState("Newest")
  const handleFilters=(e)=>{
    const value=e.target.value;
    setfilters({
      ...filters,
      [e.target.name]:value
    })
  }
 
  return (
    <div><Container><Navbar/>
    <Flash/>
    <Title>{cat}</Title>
    <FilterContainer>
    <Filter>
    <FilterText>Filter Products:</FilterText>
    <Select name="color" onChange={handleFilters}>
    <Option disabled selected>
    Color
    </Option>
    <Option>white</Option>
    <Option>Black</Option>
    <Option>Red</Option>
    <Option>Blue</Option>
    </Select>
    <Select name="size" onChange={handleFilters}>
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
    <Select onChange={e=>setsort(e.target.value)}>
    <Option value="Newest">Newest</Option>
    <Option value="asc">price(asc)</Option>
    <Option value="desc">Price(desc)</Option>

    </Select>
    </Filter>
    </FilterContainer>
    <Products cat={cat} filters={filters} sort={sort}/>
    </Container></div>
  )
}

export default ProductList