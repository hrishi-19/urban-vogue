import { useEffect, useState } from 'react'
import {React} from 'react'
import styled from 'styled-components'
import Product from './Product'
import { publicURL } from '../axiosRequest'
const Container=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
`

const Products = ({cat,filters,sort}) => {

  const[products,setproducts]=useState([])
  // const[filteredproducts,setfilteredproducts]=useState([])


  useEffect(()=>{
    const getProducts=async ()=>{
      try{
          
          const response=await publicURL.get(cat?`product/?category=${cat}`:`product/`)
          setproducts(response.data)
         
      }
      catch(err){

      }
    }
    getProducts()
  },[cat])
  useEffect(()=>{
    // cat && setproducts(
    //   products.map((item)=>
    //   Object.entries(filters).every(([key,value])=>
    //   item[key].includes(value)))
      
    // )
    // console.log(filters)
    // Object.entries(filters).every(([key,value])=>
    // console.log(key,value))
   
   
  
  },[cat,filters])
  useEffect(()=>{
    switch(sort){
      case "Newest":setproducts((prev)=>[...prev].sort((a,b)=>a.createdAt-b.createdAt)) 
                      break;
      case "desc":  setproducts((prev)=>[...prev].sort((a,b)=>b.price-a.price))
      case "asc" : console.log(sort)
    }
      
     
  },[sort])
  return (
    <Container>
    {cat?products.map(item=>(
      <Product item={item} key={item.id}/>
    )):products.slice(0,4).map(item=>(
      <Product item={item} key={item.id}/>
    ))}
    </Container>
  )
}

export default Products