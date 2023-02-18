import { loginFailure, loginStart, loginSuccess } from "./user"
import { publicURL } from "../axiosRequest"


export const login=async(dispatch,user)=>{
    dispatch(loginStart)
    try{
        const res=await publicURL.post('auth/login',user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure)
    }
}
export const register=async(dispatch,user)=>{
    dispatch(loginStart)
    try{
        const res=await publicURL.post('auth/register',user)
        dispatch(loginSuccess(res.data))

    }catch(err){
        dispatch(loginFailure)
    }
}