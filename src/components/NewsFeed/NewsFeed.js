import "./NewsFeed.scss"
import Firebase from "../FireBase/FireBase"
import website from "../images/trybuild.png"
import { useEffect, useState } from "react"
import { TiThumbsOk } from 'react-icons/ti';



const NewsFeed = () => {
  let [fireDbTeamChat,]= Firebase

 


function AddALike(thisid,thisname,thismessage,img,likes){
  // fireDbTeamChat.child("NewsFeed").push({
  //   ...profile.
  // })
  fireDbTeamChat.child("NewsFeed").child(thisid).set({
    likes:likes+1,
    name:thisname,
    message:thismessage,
    profileImg:img
  })
}

  
  let [objArray,setObjArray] = useState([])
 useEffect(()=>{
  // Loops through the whole NewsFeed and pushs the result to an array also adding the unquie id given from the server so you can update it later
  fireDbTeamChat.on("value",(snapshot)=>{
    let profile = snapshot.val()
      let fullListOfProfiles=[]
      for( let id in profile.NewsFeed){
        let newObj=profile.NewsFeed[id]
          fullListOfProfiles.push({...newObj,iD:id})
      }
      setObjArray(fullListOfProfiles)
   })
 },[fireDbTeamChat])

  
 console.log(objArray)



  
// opens the challange menu
  let [challengeOpen,setChallenge]=useState(false)
  function changeChallengTrueFalse(){
    challengeOpen?setChallenge(false):setChallenge(true)
  }
  
  return ( 
    <div className="NewsFeed">
      <main 
      onClick={changeChallengTrueFalse}
      className={challengeOpen?"NewsFeed__Challenge":"NewsFeed__ChallengeClose"}>

        {!challengeOpen?
        (<h1>Todays Challenge</h1>):
        (
        <>
          <h1 className="NewsFeed__Challenge__title">Showing Challenge</h1>
          <h2 className="NewsFeed__Challenge__discr">Are you up to the challange of building this site? leave a pic below</h2>
          
          <section className="NewsFeed__Challenge__imgCont">
            <img className="NewsFeed__Challenge__imgCont-img" src={website} alt="" />
          </section>
          
        </>
        
        )
        }


        
      </main>

      {objArray.map((item,index)=>{
        return(
       


          <div className="NewsFeed__Post"
           key={index}
           >
            <section className="NewsFeed__Post__imageCont">
              <img className="NewsFeed__Post__imageCont-img" src={item.profileImg+".png"} alt=""/>
            </section>
            <section className="NewsFeed__Post__MessageCont">
              <h1 className="NewsFeed__Post__MessageCont-name">{item.name}</h1>
              <h5 className="NewsFeed__Post__MessageCont-msg">{item.message}</h5>
              <div className="NewsFeed__Post__ResponseCont">
                <div className="NewsFeed__Post__ResponseCont__shown">
                  <h5>{item.likes} like</h5>
                </div>
                <div className="NewsFeed__Post__ResponseCont__likes">
                  <button 
                  className="NewsFeed__Post__ResponseCont__likes-btn"
                  onClick={()=>AddALike(item.iD,item.name,item.message,item.profileImg,item.likes)}
                  >
                    <TiThumbsOk/>like
                  </button>
                </div>
                </div>
            </section>
            


          </div>
        )
      })}
      
    </div>
   );
}
 
export default NewsFeed;