import "./PopUpMenu.scss"
import { Actions } from "../Libs/Actions/Actions";
import Button from "../Button/Button";
const PopUpMenu = ({state,dispatch}) => {


  function GoToSignInPage(){
    dispatch({type:Actions.FOOTER,payload:"Close"})
    dispatch({type:Actions.PAGESHOWN,payload:"SignIn"})
  }
  function ClosePopUpMenu(){
    dispatch({type:Actions.FOOTER,payload:"Close"})
  }

  
  return ( 
    <div className={state.PopUpMenu}>
     <main 
     className="PopupMenu__main"
     style={state.PopUpMenu==="PopupMenuClosed"?{display:"none"}:{display:"flex"}}>


      <Button 
        text="Close Popup"
        handleClick={ClosePopUpMenu}
       />



       <Button
        text="Logout"
        handleClick={GoToSignInPage}
       />


     </main>
      
    </div>
   );
}
 
export default PopUpMenu;