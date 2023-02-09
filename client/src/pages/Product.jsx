import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Flash from '../components/Flash'
import Navbar from '../components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams } from 'react-router-dom'
import { addProduct } from '../store/cart'
import { publicURL } from '../axiosRequest'
import { useDispatch } from 'react-redux'
const Container = styled.div``
const Wrapper = styled.div`
padding:50px;
display:flex;
`
const ImgContainer = styled.div`
flex:1;
`
const InfoContainer = styled.div`
flex:2;
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
    const{id}=useParams();
    const[quantity,setQuantity]=useState(1)
    const[product,setProduct]=useState({})
    const[colorArray,setcolorArray]=useState([])
    const[size,setSize]=useState(null)
    const[color,setColor]=useState(null)
    const dispatch=useDispatch()

    useEffect(()=>{
        const getProduct=async()=>{
           try{
            const response=await publicURL.get(`product/find/${id}`)
            setProduct(response.data)
            setcolorArray(response.data.color)
           
           }
           catch(err){
            console.log(err.message)
           }
        }
        getProduct()
    },[id])
    const handleQuantity=(type)=>{

        if(type==="dec"){
            quantity>1 && setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1)
        }
    }
    const handleClick=()=>{
        //update cart
        console.log("clicked")
        dispatch(
            addProduct({...product,quantity,color,size})
        )
        
        
    }
   

    return (
        <Container>
            <Navbar />
            <Flash />
            <Wrapper>
                <ImgContainer>
                    <img src={product.img} width="100%" height="100%" />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc><em>{product.desc}</em></Desc>
                    <Price>RS. {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterText>Color</FilterText>
                            {colorArray.map(val=><FilterColor key={val}color={val} onClick={()=>setColor(val)}></FilterColor>)}

                        </Filter>
                        <Filter>
                        <FilterText>Size</FilterText>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
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
                   <div onClick={()=>handleQuantity("dec")}><RemoveIcon/></div>
                    <Amount>{quantity}</Amount>
                    <div onClick={()=>handleQuantity("inc")}><AddIcon/></div>
                    </AmountContainer>
                    <Button onClick={handleClick}>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default Product