import "./NewsFeed.scss"
import Firebase from "../FireBase/FireBase"
import website from "../images/website.gif"
import { useEffect, useState } from "react"


const NewsFeed = () => {
  let [fireDbTeamChat,]= Firebase

 
  let [objArray,setObjArray] = useState([])

 useEffect(()=>{
   

  fireDbTeamChat.on("value",(snapshot)=>{
    let profile = snapshot.val()
      console.log(profile)
      let fullListOfProfiles=[]
      for( let id in profile.NewsFeed){
        let newObj=profile.NewsFeed[id]
          fullListOfProfiles.push(newObj)

      }
      setObjArray(fullListOfProfiles)

   })

 },[fireDbTeamChat])

  
 console.log(objArray)



  

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
       


          <div className="TeamPage__Post"
           key={index}
           >
            <section className="TeamPage__Post__imageCont">
              <img className="TeamPage__Post__imageCont-img" src={item.profileImg+".png"} alt=""/>
            </section>
            <section className="TeamPage__Post__MessageCont">
              <h1 className="TeamPage__Post__MessageCont-name">{item.name}</h1>
              <h5 className="TeamPage__Post__MessageCont-msg">{item.message}</h5>
            </section>


          </div>
        )
      })}
      
    </div>
   );
}
 
export default NewsFeed;