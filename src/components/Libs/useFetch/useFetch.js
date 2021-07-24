import { useEffect, useState } from "react"

const useFetch = () => {
  
  let Options = {
    Headers:"Accept: application/vnd.github.v3+json"
  }

  let [apiData,setApiData] = useState({})

  useEffect(()=>{

    async function getApi(url){
      const Response = await fetch("https://api.github.com/users/Jordaneddielinton93",Options)
  
      const data = await Response.json()
      setApiData(data)
      console.log(data)
    }
    getApi()
  },[])
  
  

  
  return [apiData];
}
 
export default useFetch;