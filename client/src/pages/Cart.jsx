import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Flash from '../components/Flash'
import Navbar from '../components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout"
import { useNavigate } from 'react-router-dom';
import { addProduct, removeProduct } from '../store/cart';
import { userRequest } from '../axiosRequest';

const Container = styled.div`
width:100vw;
background-color:#fafafa;

`
const Wrapper = styled.div`
padding:20px;
`
const Title = styled.h1`
font-weight:300;
text-align:center;
`
const Top = styled.div`
display:flex;
justify-content:space-between;
`
const TopButton = styled.button`
background-color:black;
padding:10px 15px;
color:#fff;
`
const BottomButton = styled.button``
const Bottom = styled.div`
display:flex;
justify-content:space-beetween;
`
const TopTexts = styled.div``
const TopText = styled.span``
const Summary = styled.div`
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
flex:1;

`
const SummaryTtile = styled.h1`
font-weight:200;
`
const SummaryItem = styled.div`
margin:30px 0;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type==="total"?500:200};
font-size:${props=>props.type==="total"?"24px":""};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
background-color:black;
padding:10px 15px;
color:#fff;
`
const Info = styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:space-between;

`
const Product = styled.div`
display:flex;
justify-content:space-between;
margin-top:15px;
padding:5px 20px;

`
const ProductDetail = styled.div`
display:flex;
`
const PriceDetail = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Details = styled.div`
display:flex;
flex-direction:column;
`
const Image = styled.img``
const ProdctColor = styled.div`
margin-left:15px;
height:30px;
width:30px;
border-radius:50%;
background-color:${props=>props.color};
`
const ProdctId = styled.span`
padding:5px ;
`
const ProdctName = styled.span`
padding:5px ;
`
const ProdctSize = styled.span`
padding:5px ;
`

const KEY="pk_test_51MOlRQSHMvjdryIQO6NjHfTA2sFcm81JbrxpzhFl6QmYlVcJDoAztaFUjTeqWQcLgF7ak5pv7Uk6h7dFzvUJAWZk000CcznUBY"
const ProductAmountContainer = styled.div``
const Cart = (props) => {
    const cart=useSelector(state=>state.cart)
    
    console.log(cart)
    const dispath=useDispatch()
    const navigate=useNavigate()
    

    const [stripeToken,setStripeToken]=useState(null)
    const onToken=(token)=>{
        setStripeToken(token)
    
   
    
    }
   useEffect(()=>{
    const makereq=async()=>{
        try{
            const response= await userRequest.post("stripe/payment",{
                tokenId:stripeToken.id,amount:cart.totalPrice*100
            })
            console.log(response)
            navigate('/success',{state:"hrishikesk"})

        }catch(e){
                console.log(e)
                navigate('/success',{state:cart.products})
        }
    }
    stripeToken && makereq()
   },[stripeToken,cart.totalPrice,navigate])
   const addItem=(item,quantity)=>{
    dispath(addProduct({...item,quantity}))
   }
   const removeItem=(id)=>{
        console.log(id)
        dispath(removeProduct(id))
   }
    return (
        <Container>
            <Navbar />
            <Flash />
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Contiue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping bag(2)</TopText>
                        <TopText>Your wishList</TopText>
                    </TopTexts>

                    <TopButton>Checkout Now</TopButton>

                </Top>
                <Bottom>
                    <Info>
                        {
                            cart.products.map(product=>{
                                return(
                                    <Product>
                            <ProductDetail>
                            
                            <img src={product.img} height="175px" width="175px"/>
                            
                            <Details>
                                <ProdctId>ID:{product._id}</ProdctId>
                                <ProdctName>{product.title}</ProdctName>
                               
                                 <div style={{display:"flex",alignItems:"center",padding:"5px"}}>color:<ProdctColor color={product.color} /></div>
                                <ProdctSize> size :{product.size}</ProdctSize>
                            </Details>
                            </ProductDetail>
                            <PriceDetail>
                               <ProductAmountContainer>
                                <span onClick={()=>addItem(product,1)}><AddIcon/></span>
                                {product.quantity   }
                                <span onClick={()=>removeItem(product._id)}><RemoveIcon/></span>
                              
                               </ProductAmountContainer>
                                Rs.{product.price*product.quantity}
                            </PriceDetail>
                        </Product>
                                )

                            })
                        }
                    </Info>
                    <Summary>
                        <SummaryTtile>Order Summary</SummaryTtile>
                        <SummaryItem>
                        <SummaryItemText>SubTotal</SummaryItemText>
                        <SummaryItemPrice>Rs {cart.totalPrice}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$30.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText> Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$-3.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>Rs.{cart.totalPrice}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                        name='Urban Vogue'
                        image='https://i.ibb.co/GMx8sMK/img.png'
                        billingAddress
                        shippingAddress
                        description={`your total is ${cart.totalPrice}`}
                        amount={cart.totalPrice*100}
                        token={onToken}
                        stripeKey={KEY}
                        >
                        <Button>Checkout Now</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart