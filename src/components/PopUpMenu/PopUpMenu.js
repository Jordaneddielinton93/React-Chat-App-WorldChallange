import "./PopUpMenu.scss"
import { Actions } from "../Libs/Actions/Actions";
import Button from "../App/Button/Button";
const PopUpMenu = ({state,dispatch}) => {

  function handleClick(){
    console.log("why")
    dispatch({type:Actions.FOOTER,payload:"Close"})
  }

  
  return ( 
    <div className={state.PopUpMenu}>
     <section style={state.PopUpMenu==="PopupMenuClosed"?{display:"none"}:{display:"flex"}}>

      <Button text="Close Popup"
       handleClick={handleClick}
       />
     </section>
      
    </div>
   );
}
 
export default PopUpMenu;