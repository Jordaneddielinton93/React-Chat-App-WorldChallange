import { useEffect,  useState } from "react"


const useFetch = (url,) => {



  let Options = {
    Headers:"Accept: application/vnd.github.v3+json"
  }

  let [apiData,setApiData] = useState({})

  useEffect(()=>{

    async function getApi(){
      console.log(url)
      const Response = await fetch(url,Options)
  
      const data = await Response.json()
      setApiData(data)
      console.log(data)
      

    }
    getApi()
  },[url])
  
  

  
  return [apiData,];
}
 
export default useFetch;