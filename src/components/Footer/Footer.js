import { useState } from "react";
import { TiMessages,TiNews } from "react-icons/ti";
import {FcImageFile} from "react-icons/fc"
import { AiOutlineSend } from "react-icons/ai";
import { Actions } from "../Libs/Actions/Actions";
import Firebase from "../FireBase/FireBase"

import "./Footer.scss"
const Footer = ({state,dispatch}) => {
  let [fireDbTeamChat,fireStorage]= Firebase

let [messageSaved,setMessageSaved]= useState("")
let [messageSavedNewsFeed,setMessageSavedNewsFeed]= useState("")




  



  function  HandleKeyDownNewsFeedArea(e){

  

    if((e.key === "Enter" && messageSavedNewsFeed.length >=1 && fireImage !== null) || (e ==="clicked" && messageSavedNewsFeed.length >=1 && fireImage !== null ) ){

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
          .then(url => dispatch({type:"imgUrl",payload:`${url}`}))
        }
      )
    }



    if((e.key === "Enter" && messageSavedNewsFeed.length >=1) || (e ==="clicked" && messageSavedNewsFeed.length >=1 ) ){
    console.log("has been sent",e)

    fireDbTeamChat.child("NewsFeed").push({
        name:state.name,
        message:messageSavedNewsFeed,
        profileImg:state.avatar,
        likes:0,
        imagesent:fireImage.name
      })
      setMessageSavedNewsFeed("")
      setFireImage("")
    }
    // above will send a new message to the database below will send an image
    // fireStorage
    





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


  const [fireImage,setFireImage]= useState(null)
  function getInputFileChange(e){
    if(e.target.files[0]){
      setFireImage(e.target.files[0])
    }
  }




  return ( 
    
    <footer className="Footer">

  

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
      accept="image/*"
      className="Footer__fileUploader"
      id="file"
      type="file"
      onChange={getInputFileChange}
        />

      <label htmlFor="file"
      className="Footer__sendMsg">
        <FcImageFile/>
      </label>


      <input
      style={
        messageSavedNewsFeed.length>=1?{
          position:"absolute",
          bottom:"11vh",
          minWidth:"90vw",
          wordWrap: "break-word"

        }:{}
      }
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