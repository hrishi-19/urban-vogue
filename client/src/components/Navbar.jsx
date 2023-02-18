import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../store/user';

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
    const dispatch=useDispatch()
    const handleSignout=()=>{
        
        dispatch(signOut(null))
    }
    console.log(user)
    return (
        <Container>
            <Wrapper>
                <Center><Logo>Urban Vogue</Logo></Center>
                <Right>
                    {
                        user && <div style={{display:"flex"}}><MenuItem onClick={handleSignout}>Welcome,{user.userName}</MenuItem> <MenuItem >SignOut</MenuItem><Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={cart.quantity} color="primary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>
                        </MenuItem>
                    </Link></div>
                        
                    }
                    {
                        !user && <><Link to="/register"><MenuItem>Register</MenuItem></Link>
                        <Link to="/signin"><MenuItem >SignIn</MenuItem></Link></>
                    }
                    
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar