
import "./App.scss"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SignIn from "../SignIn/SignIn";
import TeamMessageArea from "../TeamMessageArea/TeamMessageArea"
import { inistialState } from '../Libs/Reducer/reducer';
import { Actions } from "../Libs/Actions/Actions";
import reducer from "../Libs/Reducer/reducer"
import { useEffect, useReducer } from 'react';
import useFetch from "../Libs/useFetch/useFetch";

function App() {
  
  let [state,dispatch] = useReducer(reducer,inistialState)
  let [apiData]=useFetch()

  useEffect(()=>{ 
    dispatch({type:Actions.API_DATA,payload:apiData})
  },[apiData])

  return (
    <div className="App">

      {
      (state.PageOnDisplay==="TeamChatScreen")?
      <>
      <Header state={state} dispatch={dispatch}/>

      <TeamMessageArea 
      state={state} 
      dispatch={dispatch}
      apiData={apiData}
      />
      <Footer state={state} dispatch={dispatch}/>
      </>:
      (state.PageOnDisplay === "SignIn")?
      <>
      <SignIn dispatch={dispatch}/>
      </>:<></>
      }
    </div>
  );
}

export default App;
