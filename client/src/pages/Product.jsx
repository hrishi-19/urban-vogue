import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Flash from '../components/Flash'
import Navbar from '../components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Container = styled.div``
const Wrapper = styled.div`
padding:50px;
display:flex;
`
const ImgContainer = styled.div`
flex:1;`
const InfoContainer = styled.div`
flex:1;
padding:0 50px;
`
const Title = styled.h1`
font-weight:400;

`
const Desc = styled.p`
margin:20px 0;
`
const Price = styled.span`
font-weight:500;
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;

`
const Filter = styled.div`
margin:20px;
display:flex;
align-items:center;


`

const FilterText = styled.span`
font-size:20;
font-weight:600;

`
const FilterColor=styled.div`
width:30px;
height:30px;
border-radius:50%;
background-color:${props=>props.color}

`
const FilterSize=styled.select`
padding:10px;
margin-right:10px;`
const FilterSizeOption=styled.option`
padding:5px;`
const AddContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
`
const AmountContainer = styled.div`
display:flex;
justify-content:center;
`

const Amount = styled.span`
height:30px;
width:30px;
border-radius:10px;
border:1px solid grey;
text-align:center;
`

const Button=styled.button``


const Product = () => {
    const[amount,setAmount]=useState(1)
    

    return (
        <Container>
            <Navbar />
            <Flash />
            <Wrapper>
                <ImgContainer>
                    <img src="https://i.ibb.co/vP7gxdV/girl.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>denim shirt</Title>
                    <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum iste dolorum assumenda impedit molestias praesentium nesciunt?</Desc>
                    <Price>10</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterText>Color</FilterText>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="blue"></FilterColor>
                            <FilterColor color="grey"></FilterColor>

                        </Filter>
                        <Filter>
                        <FilterText>Size</FilterText>
                        <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>

                    </Filter>
                    </FilterContainer>
                    <AddContainer>
                    <AmountContainer>
                   <RemoveIcon onc/>
                    <Amount>{amount}</Amount>
                    <AddIcon/>
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default Product