import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"User",
    initialState:{
        currentuser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentuser=action.payload;
             
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true
            
        },
        signOut:(state,action)=>{
            state.currentuser=action.payload
        }

    }

})

export const {loginStart,loginFailure,loginSuccess,signOut} =userSlice.actions

export default userSlice.reducer