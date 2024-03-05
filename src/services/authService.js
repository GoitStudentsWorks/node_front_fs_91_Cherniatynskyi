import axios from "axios";

export const instance = axios.create({baseURL: 'https://task-pro-7x3t.onrender.com'})

export const setToken = (token) =>{
    instance.defaults.headers.common['Authorization'] = token
}

export const deleteToken = ()=>{
    delete instance.defaults.headers.common['Authorization']
}

export const signUp = async(body) =>{
    const {data} = await instance.post('/users/register', body)
    setToken(`Bearer ${data.token}`)
    return data
 }

 export const logIn = async(body) =>{
    const {data} = await instance.post('/users/login', body)
    setToken(`Bearer ${data.token}`)
    return data
 }

 export const logOut = () =>{
    const {data} = instance.post('/users/logout')
    deleteToken()
    return data
 }

 export const getProfile = async() =>{
    const {data} = await instance('/users/current')
    return data
 }