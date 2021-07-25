import { useEffect,  useState } from "react"


const useFetch = (url) => {


  let [apiData,setApiData] = useState({})

  useEffect(()=>{

    async function getApi(){
      console.log(url)
      const Response = await fetch(url,{Headers:"Accept: application/vnd.github.v3+json"})
  
      const data = await Response.json()
      await setApiData(data)
      console.log(data)  
    }

    getApi()
  },[url])
  
  

  
  return [apiData];
}
 
export default useFetch;