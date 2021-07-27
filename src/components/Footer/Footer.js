import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TiMessages,TiNews } from "react-icons/ti";
import { AiOutlineSend } from "react-icons/ai";
import { Actions } from "../Libs/Actions/Actions";
import Firebase from "../FireBase/FireBase"

import "./Footer.scss"
const Footer = ({state,dispatch}) => {
  let [fireDbTeamChat,fireDbNewsFeed]= Firebase

let [messageSaved,setMessageSaved]= useState("")
let [messageSavedNewsFeed,setMessageSavedNewsFeed]= useState("")



  function HandleKeyDownNewsFeedArea(e){
    if((e.key === "Enter" && messageSavedNewsFeed.length >=1) || (e ==="clicked" && messageSavedNewsFeed.length >=1 ) ){
    console.log("has been sent",e)

    fireDbTeamChat.child("NewsFeed").push({
        name:state.name,
        message:messageSavedNewsFeed,
        profileImg:state.avatar
      })

     

      setMessageSavedNewsFeed("")
    }

  }
function getNewsFeedMessageValue(e){
  setMessageSavedNewsFeed(e.target.value)
    console.log(messageSavedNewsFeed)
}



  function HandleKeyDownTeamChatArea(e){
    
    if((e.key === "Enter" && messageSaved.length >=1) || (e ==="clicked" && messageSaved.length >=1 ) ){

      fireDbTeamChat.child("TeamChat").push({
        name:state.name,
        message:messageSaved,
        profileImg:state.avatar
      })

     

      setMessageSaved("")
    }

  }


  function getTeamChatMessageValue(e){
    setMessageSaved(e.target.value)
    
  }




  return ( 
    
    <footer className="Footer">

      
      <button className="Footer__btn" data-testid="leftbutton" style={{display:state.FooterBtnDisplay}} onClick={()=>dispatch({type:Actions.FOOTER,payload:"leftBtn"})} > <CgProfile/>  </button>



      {
      state.PageOnDisplay === "TeamChatScreen"?

      (<>
      <input type="text"
       className="Footer__inputbar"
       value={messageSaved} 
       onChange={getTeamChatMessageValue} 
       onKeyDown={HandleKeyDownTeamChatArea} />

      <button 
        onClick={()=>HandleKeyDownTeamChatArea("clicked")}
        className="Footer__sendMsg"
       ><AiOutlineSend/></button>

      <button 
        className="Footer__btn" 
        data-testid="rightbutton" 
        style={{display:state.FooterBtnDisplay}} 
        onClick={()=>dispatch({type:Actions.FOOTER,payload:"NewsBtn"})}> 
        <TiNews/>
      </button>
      </>):


      (state.PageOnDisplay === "NewsFeed")?
      (
      <>
      <input
      className="Footer__inputbar"
      value={messageSavedNewsFeed}
       type="text" 
       onChange={getNewsFeedMessageValue}
       onKeyDown={HandleKeyDownNewsFeedArea} />

      <button 
        onClick={()=>HandleKeyDownNewsFeedArea("clicked")}
        className="Footer__sendMsg"
       ><AiOutlineSend/></button>

      <button 
      className="Footer__btn"
      onClick={()=>dispatch({type:Actions.FOOTER,payload:"TeamChatScreen"})}>
        <TiMessages/>
      </button>
      </>
      ):
      <></>
      }

      
      
    </footer>
   );
}
 
export default Footer;