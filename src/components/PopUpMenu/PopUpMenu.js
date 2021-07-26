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

  console.log(state)
  return ( 
    <div className={state.PopUpMenu}>
     <main 
     className="PopupMenu__main"
     style={state.PopUpMenu==="PopupMenuClosed"?{display:"none"}:{display:"flex"}}>

       <section className="PopupMenu__main__TopSection">
        <img 
        className="PopupMenu__main__TopSection__avatar"
        src={state.avatar+".png"} 
        alt="" />
        <h1>{state.name}</h1>


       </section>



       <section className="PopupMenu__main__MidSection">

       <h2 className="PopupMenu__main__MidSection__bio">{state.bio}</h2>

       </section>

       <section className="PopupMenu__main__BottmSection">

       <Button 
        className="PopupMenu__main__Cont"
        text="Close Popup"
        handleClick={ClosePopUpMenu}
       />
       <Button
        text="Logout"
        handleClick={GoToSignInPage}
       />


       </section>

     </main>
      
    </div>
   );
}
 
export default PopUpMenu;