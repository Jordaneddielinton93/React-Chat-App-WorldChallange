import "./SignIn.scss"
import logo from "../images/messenger.svg"
import useFetch from "../Libs/useFetch/useFetch"
import { Actions } from "../Libs/Actions/Actions"
import { useEffect, useState } from "react"

const SignIn = ({state,dispatch}) => {



  function changeScreen(){
    dispatch({type:Actions.PAGESHOWN, payload:"TeamChatScreen"})
  }

  function checkUserNameCorrect(){

    if(apiData.login){
      dispatch({type:Actions.API_DATA,payload:apiData})
      setToggleBorder("thick lime solid")

      setTimeout(()=>{
        changeScreen()
      },1000)
      

    }else{
      console.log("wrong")
      setToggleBorder("thick red solid")

    }

  }
  // 1.    get users value for github search params
  // 1.5   check for valid email on Sign in click
  // 2.    onClick SignIn change page to postArea

  let [toggleBorder,setToggleBorder] = useState("thick lime solid")
  let [inputValue,setInputValue]= useState("")
  let [userName,setUsername]= useState("")

  // 
  let [apiData] = useFetch(`https://api.github.com/users/${userName}`)

  function handleClick(){
  
    setUsername(inputValue)

  }

  useEffect(()=>{
    checkUserNameCorrect()
  },[apiData])

  function handleChange(e){
    setInputValue(e.target.value)
    console.log(e.target.value)
  }

  let [imgClass,setImgClass] = useState("SignInPage__Container__Logo")
  useEffect(()=>{
    setTimeout(()=>{
      if(imgClass==="SignInPage__Container__Logo"){
        setImgClass("SignInPage__Container__LogoSmall")
      }
      if(imgClass==="SignInPage__Container__LogoSmall"){
        setImgClass("SignInPage__Container__Logo")
      }
    },3000)

  },[imgClass])


  return ( 
    <div className="SignInPage">
      <h1 className="SignInPage__Title">Welcome Warrior</h1>


      <div className="SignInPage__Container">
        <img className={imgClass} src={logo} alt="" />
      </div>


      <input 
        style={{border:toggleBorder}}
        className="SignInPage__Input"
        type="text" 
        placeholder="Git Hub Username"
        onChange={handleChange}
       />

      <button 
        className="SignInPage__Submit"
        // onClick={()=>}
        onClick={handleClick}
        > Sign In</button>
    </div>
   );
}
 
export default SignIn;