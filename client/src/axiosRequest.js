import axios from "axios";
const BASEURL="/api/"

export const publicURL=axios.create({
    baseURL:BASEURL
})
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWRkZGU4MWI2ZjllZmFlZTA1MGRiOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzY3MDMxMTIsImV4cCI6MTY3Njk2MjMxMn0.geP6kZ8ymVAsr4IqCGBi0kVWIff-2fyYDryI7ofwWqw"

export const userRequest=axios.create({
    baseURL:BASEURL,
    headers:{
        token:`Bearer ${token}`
    }
})