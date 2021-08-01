
import "./App.scss"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SignIn from "../SignIn/SignIn";
import TeamMessageArea from "../TeamMessageArea/TeamMessageArea"
import { inistialState } from '../Libs/Reducer/reducer';
import reducer from "../Libs/Reducer/reducer"
import { useReducer } from 'react';
import PopUpMenu from "../PopUpMenu/PopUpMenu";
import NewsFeed from "../NewsFeed/NewsFeed";

function App() {
  
  let [state,dispatch] = useReducer(reducer,inistialState)

  
console.log(state)
  return (
    <div className="App">

      {
      (state.PageOnDisplay==="TeamChatScreen")?
      <>
      <Header state={state} dispatch={dispatch}/>

      <TeamMessageArea 
        state={state} 
        dispatch={dispatch}
      />
      <Footer state={state} dispatch={dispatch}/>
      </>:
      (state.PageOnDisplay === "SignIn")?
      <>
      <SignIn 
        state={state} 
        dispatch={dispatch}/>
      </>:
      (state.PageOnDisplay === "NewsFeed")?
      <>
      <Header state={state} dispatch={dispatch}/>
      <NewsFeed state={state} dispatch={dispatch}/>
      <Footer state={state} dispatch={dispatch}/>

      </>:<></>
      }
      <PopUpMenu
        state={state} 
        dispatch={dispatch}/>
    </div>
  );
}

export default App;
