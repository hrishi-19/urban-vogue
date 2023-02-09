import axios from "axios";
const BASEURL="/api/"

export const publicURL=axios.create({
    baseURL:BASEURL
})
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmE2ZGY0YWMyNzY0YjgzZjJhNTY5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTc3ODAwMSwiZXhwIjoxNjc2MDM3MjAxfQ.L7Nv5DBjfUEG_fgs0_s1Y8JmZkXjbk4XQDglJ01Ecpw"

export const userRequest=axios.create({
    baseURL:BASEURL,
    headers:{
        token:`Bearer ${token}`
    }
})