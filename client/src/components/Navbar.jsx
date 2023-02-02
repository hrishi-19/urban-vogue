import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import {Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height:60px;
   
    
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Left = styled.div`
    flex:1;
    display:flex;
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
const SearchContainer = styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
margin-left:20px;
padding:5px;
`
const Language = styled.span`
font-size:14px;
cursor:pointer;
`
const Input = styled.input`
border:none;
outline:none;
`
const Logo = styled.h1`

`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Center><Logo>Urban Vogue</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>SignIn</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={0} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar