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
flex:1;
text-align:center;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:space-between;
`
const MenuItem = styled.div`
font-size:18px;
cursor:pointer;
color:grey;

`


const Logo = styled.h1`
color:rgba(0,0,0,0.9);

`

const Navbar = () => {
    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user.currentuser)
    const dispatch = useDispatch()
    const handleSignout = () => {

        dispatch(signOut(null))
    }
    return (
        <Container>
            <Wrapper>
                <Center><Link to="/" style={{ textDecoration: "none" }}><Logo>Urban Vogue</Logo></Link></Center>
                <Right>

                    {
                        user ? <div style={{ display: "flex", flex: "1", justifyContent: "space-around" }}><MenuItem >Welcome,{user.userName}</MenuItem>
                            <div style={{ display: "flex" }}>
                                <MenuItem onClick={handleSignout}>SignOut</MenuItem><Link to="/cart">
                                    <MenuItem>
                                        <Badge badgeContent={cart.quantity} color="primary">
                                            <ShoppingCartOutlinedIcon color="action" />
                                        </Badge>
                                    </MenuItem>
                                </Link>
                            </div>
                        </div> : <div style={{ display: "flex", flex: "1", justifyContent: "space-around" }}><Link to="/register"><MenuItem>Register</MenuItem></Link>
                            <Link to="/signin"><MenuItem >SignIn</MenuItem></Link></div>




                    }


                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar