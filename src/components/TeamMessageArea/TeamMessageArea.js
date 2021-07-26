import "./TeamMessageArea.scss"
import dataBase from "../FireBase/FireBase"
import ScrollIntoView from 'react-scroll-into-view'


import { useEffect, useState } from "react"

const TeamMessageArea = ({state,dispatch}) => {


   //  here im getting the profiles from an object with keys then adding to a list

let [objArray,setObjArray] = useState([])

  useEffect(()=>{
    

    dataBase.on("value",(snapshot)=>{
      let profiles = snapshot.val()
      let fullListOfProfiles=[]
      for( let id in profiles){
        let newObj=profiles[id]
        for(let id2 in newObj){
          let newObj2=newObj[id2]
          console.log(newObj2)
          fullListOfProfiles.push(newObj2)
        }
  
      }
      setObjArray(fullListOfProfiles)

    })

  },[dataBase])

   
  console.log(objArray)








  let toggleTrueFalse = true

  function ToggleRemoveAddComment(){
    console.log(toggleTrueFalse)

    toggleTrueFalse?toggleTrueFalse=false:toggleTrueFalse=true
    
  }



  return ( 
    <main className="TeamPage" >
      {objArray.map((item,index)=>{
        return(
       


          <div className="TeamPage__Post"
           key={index}
           onClick={ToggleRemoveAddComment}
           >
            <section className="TeamPage__Post__imageCont">
              <img className="TeamPage__Post__imageCont-img" src={item.profileImg+".png"} alt=""/>
            </section>
            <section className="TeamPage__Post__MessageCont">
              <h1 className="TeamPage__Post__MessageCont-name">{item.name}</h1>
              <h5 className="TeamPage__Post__MessageCont-msg">{item.message}</h5>
            </section>


          </div>
        )
      })}
      <div onScroll></div>

    </main>
   );
}
 
export default TeamMessageArea;