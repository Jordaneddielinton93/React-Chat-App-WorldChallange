import { Actions } from "../Libs/Actions/Actions";
import { FcPlus,FcCancel } from "react-icons/fc";
import logo from "../images/messenger.svg"
import "./Header.scss"
const Header = ({state,dispatch}) => {

  return ( 
    <header className="Header">

      <button className="Header__btn"
        data-testid="leftbutton"
        style={{display:state.HeaderBtnDisplay}} 
        onClick={()=>dispatch({type:Actions.HEADER,payload:"left"})} > <FcPlus/> 
      </button>

{/* change above to delete commments by doing an if statement return each the type of button shown when click on a message */}

      <img 
      onClick={()=>dispatch({type:Actions.FOOTER,payload:"leftBtn"})}
      src={state.avatar} alt="logo" className="Header__logo"/>




      <button className="Header__btn"
        data-testid="rightbutton"
        style={{display:state.HeaderBtnDisplay}}
        onClick={()=>dispatch({type:Actions.HEADER,payload:"right"})}> <FcCancel/> 
      </button>

    </header>
   );
}
 
export default Header;