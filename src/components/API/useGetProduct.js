import axios from "axios"
import { useEffect, useState } from "react"

export const useGetProduct = (url)=>{
    const [isload,setIsLoad]=  useState(true)
    const [product,setProduct]=useState({})
useEffect(()=>{
    axios.get(url).then(res=> {
        return (setProduct(res.data) ,setIsLoad(false))
    })
    
},[url])

return  [product,isload]
}