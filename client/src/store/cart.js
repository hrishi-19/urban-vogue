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
                state.quantity=state.quantity+1
                state.products=[...state.products,action.payload]
                state.totalPrice=state.totalPrice+action.payload.price *action.payload.quantity
        }
    }
})

export const {addProduct} =cartSlice.actions

export default cartSlice.reducer