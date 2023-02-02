import React from 'react'
import styled from 'styled-components'
import Flash from '../components/Flash'
import Navbar from '../components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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
justify-content:space-between;
padding:20px 10px;`
const TopTexts = styled.div``
const TopText = styled.span``
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;

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
flex:3;
display:flex;
justify-content:space-between;

`
const Product = styled.div`
display:flex;
justify-content:space-between;
`
const ProductDetail = styled.div``
const PriceDetail = styled.div``
const Details = styled.div``
const Image = styled.img``
const ProdctColor = styled.span``
const ProdctId = styled.span``
const ProdctName = styled.span``
const ProdctSize = styled.span``
const ProductAmountContainer = styled.div``
const Cart = () => {
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
                        <Product>
                            <ProductDetail>
                            <Image></Image>
                            <Details>
                                <ProdctName>Shoe</ProdctName>
                                <ProdctId>123</ProdctId>
                                <ProdctColor></ProdctColor>
                                <ProdctSize>S</ProdctSize>
                            </Details>
                            </ProductDetail>
                            <PriceDetail>
                               <ProductAmountContainer>
                                <AddIcon/>
                                100
                                <RemoveIcon/>
                               </ProductAmountContainer>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTtile>Order Summary</SummaryTtile>
                        <SummaryItem>
                        <SummaryItemText>SubTotal</SummaryItemText>
                        <SummaryItemPrice>$30.00</SummaryItemPrice>
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
                        <SummaryItemPrice>$30.00</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart