import axios from "axios"

const Api = 'https://crudcrud.com/api/30e1c44709c448b9a6b31d593aa9c146/'

export const PostUsers = (data) =>{
    return axios.post(`${Api}users`, data) 
 }
 
 export const GetUsers = ()=>{
     return axios.get(`${Api}users`)
  }
 