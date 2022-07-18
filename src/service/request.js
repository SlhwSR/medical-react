import axios from 'axios'
export function request(option){
   return new Promise((resolve,reject)=>{
       const instance=axios.create({
        baseURL:VITE_BASE_URL,
        timeout:10000
       })
       instance.interceptors.request.use((req)=>{
           if(localStorage.token){
            req.headers.Authorization='Bearer '+localStorage.token
           }
           return req
       },err=>{
          return Promise.reject(err)
       })
       instance.interceptors.response.use((response)=>{},err=>{
         
       })
       instance(option).then((res)=>{
           resolve(res)
       }).catch((err)=>reject(err.message))
   })
}