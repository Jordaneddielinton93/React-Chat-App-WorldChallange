import "./TeamMessageArea.scss"
import Firebase from "../FireBase/FireBase"

import { useEffect, useState } from "react"

const TeamMessageArea = ({state,dispatch}) => {


   //  here im getting the profiles from an object with keys then adding to a list
   let [fireDbTeamChat,]= Firebase
   let [objArray,setObjArray] = useState([])




  useEffect(()=>{
    fireDbTeamChat.on("value",(snapshot)=>{
      let profile = snapshot.val()
      let fullListOfProfiles=[]
      for( let id in profile.TeamChat){
        let newObj=profile.TeamChat[id]
          fullListOfProfiles.push(newObj)
      }
      setObjArray(fullListOfProfiles)

    })

  },[fireDbTeamChat])

   
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
           style={state.name===item.name?{alignSelf:"flex-start"}:{alignSelf:"flex-end"}}
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
      

    </main>
   );
}
 
export default TeamMessageArea;