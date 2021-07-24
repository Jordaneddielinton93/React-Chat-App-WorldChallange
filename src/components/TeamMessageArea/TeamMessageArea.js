import "./TeamMessageArea.scss"

const TeamMessageArea = ({state,dispatch}) => {

  let toggleTrueFalse = true

  function ToggleRemoveAddComment(){
    console.log(toggleTrueFalse)

    toggleTrueFalse?toggleTrueFalse=true:toggleTrueFalse=false
    // dispatch({type:""})
  }



  return ( 
    <main className="TeamPage" id="anchor">
      {state.MessagesSent.map((item,index)=>{
        return(
          <div className="TeamPage__Post"
           key={index}
           onClick={ToggleRemoveAddComment}
           >
            <section className="TeamPage__Post__imageCont">
              <img className="TeamPage__Post__imageCont-img" src={item.profileImg} alt=""/>
            </section>
            <section className="TeamPage__Post__MessageCont">
              <h1 className="TeamPage__Post__MessageCont-name">{item.name}</h1>
              <h5 className="TeamPage__Post__MessageCont-msg">{item.message}</h5>
            </section>


          </div>
        )
      })}

    </main>
   );
}
 
export default TeamMessageArea;