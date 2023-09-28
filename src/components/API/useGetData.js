import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetData(url) {
  const [data,setData] = useState([])
  useEffect (()=>{
    axios.get(url).then(res=>{
      setData(res.data);
    })
  },[url])

  return [data,setData]
}
