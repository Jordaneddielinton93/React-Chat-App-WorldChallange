import { Actions } from "../Actions/Actions";
import logo from "../../images/messenger.svg"

export let inistialState={
  PageOnDisplay:"SignIn",
  // "SignIn"
  // "TeamChatScreen"
  HeaderBtnDisplay:"none",
  typingArea:"TeamChatArea",
  gitInfo:"",
  name:"",
  avatar:"",
  MessagesSent:[
    {name:"Welcome To Group Chat",profileImg:logo,message:"Dust your keyboard its go time"},
]

}

export default function reducer(state,action){
  switch (action.type) {
    case Actions.PAGESHOWN:
      
        return {...state,PageOnDisplay:action.payload}
    case Actions.HEADER :
      // when a person has been clicked show both header buttons and be able to remove said person
      return console.log("hello world")
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
      return{
        ...state,
        name:action.payload.name,
        avatar:action.payload.avatar_url+".png"
      }
    default:
      break;
  }
}