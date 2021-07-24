import "./SignIn.scss"
import logo from "../images/messenger.svg"
import { Actions } from "../Libs/Actions/Actions"
import { useEffect, useState } from "react"

const SignIn = ({dispatch}) => {

  // 1.    get users value for github search params
  // 1.5   check for valid email on Sign in click
  // 2.    onClick SignIn change page to postArea 

  let [imgClass,setImgClass] = useState("SignInPage__Container__Logo")

  useEffect(()=>{

    
    setTimeout(()=>{
      console.log("hmm")
      if(imgClass==="SignInPage__Container__Logo"){
        setImgClass("SignInPage__Container__LogoSmall")
        console.log("this should up")
      }
      if(imgClass==="SignInPage__Container__LogoSmall"){
        setImgClass("SignInPage__Container__Logo")
        console.log("this should down")
      }

    },3000)

  },[imgClass])

  function handleChange(e){
    console.log(e.target.value)
  }




  return ( 
    <div className="SignInPage">
      <h1 className="SignInPage__Title">Welcome Warrior</h1>


      <div className="SignInPage__Container">
        <img className={imgClass} src={logo} alt="" />
      </div>


      <input 
        className="SignInPage__Input"
        type="text" 
        placeholder="Git Hub Username"
        onChange={handleChange}
       />

      <button 
        className="SignInPage__Submit"
        onClick={()=>dispatch({type:Actions.PAGESHOWN, payload:"TeamChatScreen"})}
        > Sign In</button>
    </div>
   );
}
 
export default SignIn;