import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { Actions } from "../Libs/Actions/Actions";
import "./Footer.scss"
const Footer = ({state,dispatch}) => {

let [messageSaved,setMessageSaved]= useState("")

  function HandleKeyDown(e){
    console.log(messageSaved)
    if(e.key === "Enter" && messageSaved.length >=1){
      dispatch({type:Actions.USER_MESSAGE,payload:messageSaved})
      setMessageSaved("")
    }

  }


  function getTeamChatMessageValue(e){
    setMessageSaved(e.target.value)
    console.log(messageSaved)
  }




  return ( 
    <footer className="Footer">
      <button className="Footer__btn" data-testid="leftbutton" style={{display:state.FooterBtnDisplay}} onClick={()=>dispatch({type:Actions.FOOTER,payload:"left"})} > <CgProfile/>  </button>



      {
      state.typingArea === "TeamChatArea"?

      (<>
      <input type="text"
       className="Footer__inputbar"
       value={messageSaved} 
       onChange={getTeamChatMessageValue} 
       onKeyDown={HandleKeyDown} />
      <button >S</button>
      </>):


      (state.typingArea === "PostingArea")?
      (<input type="text" onChange={getTeamChatMessageValue} />):
      <></>
      }

      
      <button className="Footer__btn" data-testid="rightbutton" style={{display:state.FooterBtnDisplay}} onClick={()=>dispatch({type:Actions.FOOTER,payload:"right"})}> <TiMessages/> </button>
    </footer>
   );
}
 
export default Footer;