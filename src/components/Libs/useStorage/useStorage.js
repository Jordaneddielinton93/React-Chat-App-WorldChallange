import { useEffect, useState } from "react";
import Firebase from "../../FireBase/FireBase";
const useStorage = () => {

  let [fireDbTeamChat,fireStorage]= Firebase
  let [url,setUrl] = useState("")

  useEffect(()=>{




    const uploadTask = fireStorage.ref(`NewsFeed/${fireImage.name}`).put(fireImage);
      uploadTask.on(
        "state_changed",
        snapshot =>{},
        error =>{
          console.log(error)
        },
        ()=>{
          fireStorage
          .ref("NewsFeed").child(fireImage.name).getDownloadURL()
          .then(url =>setUrl(url))
        }
      )




  },[fireImage])
  
  // dispatch({type:"imgUrl",payload:`${url}`})



  return [url];
}
 
export default useStorage;