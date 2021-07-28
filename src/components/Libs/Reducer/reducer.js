
import { Actions } from "../Actions/Actions";

export let inistialState={
  PageOnDisplay:"SignIn",
    // "SignIn"
  // "TeamChatScreen"
  // "NewsFeed"
  PopUpMenu:"PopupMenuClosed",
  // "PopupMenu"
  HeaderBtnDisplay:"none",
  typingArea:"TeamChatArea",
  gitInfo:"",
  name:"",
  avatar:"",
  bio:"",
  MessagesSent:[]

}

export default function reducer(state,action){
  switch (action.type) {
    
    case Actions.PAGESHOWN:
        return {...state,PageOnDisplay:action.payload}


    case Actions.HEADER :
      // when a person has been clicked show both header buttons and be able to remove said person
      return console.log("hello world")

    case Actions.FOOTER:
      if(action.payload==="leftBtn"){
        return {...state,PopUpMenu:"PopupMenu"}
      }else if(action.payload==="NewsBtn"){
        return{
          ...state,
          PopUpMenu:"PopupMenuClosed",
          PageOnDisplay:"NewsFeed"
        }
      }else if(action.payload==="TeamChatScreen"){
          return{
            ...state,
            PopUpMenu:"PopupMenuClosed",
            PageOnDisplay:"TeamChatScreen"

          }
      }else{
        return {
          ...state,
          PopUpMenu:"PopupMenuClosed",
          
        }
      }
    case Actions.TYPING_AREA:
      if(Actions.payload === "TeamArea"){
      return {...state,typingArea:"TeamChatArea"}
      }
      break


    case Actions.USER_MESSAGE:

      return {
        ...state,
        MessagesSent:[...state.MessagesSent,{name:state.name,profileImg:state.avatar,message:action.payload}],
        }

        
    case Actions.API_DATA:
      console.log(action.payload)
      return{
        ...state,
        name:action.payload.name,
        avatar:action.payload.avatar_url,
        bio:action.payload.bio
      }
    default:
      break;
  }
}