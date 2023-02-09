import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height:60px;
   
    
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`

const Center = styled.div`
flex:2;
text-align:center;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:space-around;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;`


const Logo = styled.h1`

`

const Navbar = () => {
    const cart = useSelector(state => state.cart)
    const user=useSelector(state=>state.user.currentuser)
    console.log(cart)
    return (
        <Container>
            <Wrapper>
                <Center><Logo>Urban Vogue</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>SignIn</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={cart.quantity} color="primary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar