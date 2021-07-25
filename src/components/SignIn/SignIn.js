import "./SignIn.scss"
import logo from "../images/messenger.svg"
import useFetch from "../Libs/useFetch/useFetch"
import { Actions } from "../Libs/Actions/Actions"
import { useEffect, useState } from "react"

const SignIn = ({state,dispatch}) => {


  // 1.    get users value for github search params
  // 1.5   check for valid email on Sign in click
  // 2.    onClick SignIn change page to postArea 
  
  let [inputValue,setInputValue]= useState("")
  let [userName,setUsername]= useState("")


  function changeDispatchStateToApi(){
    dispatch({type:Actions.PAGESHOWN, payload:"TeamChatScreen"})
  }

  // 
  let [apiData] = useFetch(`https://api.github.com/users/${userName}`)

  useEffect(()=>{

    if(apiData.message !== "Not Found"){
      changeDispatchStateToApi()
        console.log(apiData)
      }
    
  },[apiData])

  function handleClick(){
    console.log("hello")

    setUsername(inputValue)
  }

  

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