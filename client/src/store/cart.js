import {createSlice} from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"Cart",
    initialState:{
        products:[],
        quantity:0,
        totalPrice:0
    },
    reducers:{
        addProduct:(state,action)=>{

                const existing=state.products.find(product=>product._id===action.payload._id)
                if(existing){
                    existing.quantity++
                    existing.totalPrice+=existing.price
                    state.totalPrice+=action.payload.price

                }else{
                    state.quantity++
                    action.payload.totalPrice=action.payload.quantity*action.payload.price
                    state.products=[...state.products,action.payload]
                    state.totalPrice=state.totalPrice+action.payload.price *action.payload.quantity
                }
            
            
                
        },
        removeProduct:(state,action)=>{
            const id=action.payload
            const item=state.products.find(product=>product._id===id)
            if(item.quantity===1){
                state.quantity=state.quantity-1
                state.products=state.products.filter(item=>item._id!==id)
                state.totalPrice-=item.totalPrice

            }else{
                item.quantity=item.quantity-1
                item.totalPrice-=item.price
                state.totalPrice-=item.price
            }
            
        },
        clearAll:(state,action)=>{
            state.products=action.payload.products
            state.quantity=action.payload.quantity
            state.totalPrice=action.payload.totalPrice

        }
    }
})

export const {addProduct,removeProduct,clearAll} =cartSlice.actions

export default cartSlice.reducer