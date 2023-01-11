import styled from 'styled-components'
import React from 'react'


const Container=styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
font-size:14px;
font-weight:bold;
`
const Flash = () => {
  return (
   <Container>sale ends in 14hrs!!</Container>
  )
}

export default Flash