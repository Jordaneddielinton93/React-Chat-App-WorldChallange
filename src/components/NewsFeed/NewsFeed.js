import "./NewsFeed.scss"
import dataBase from "../FireBase/FireBase"
import website from "../images/website.gif"
import { useState } from "react"


const NewsFeed = () => {

  dataBase.child("LatestFeeds").push({

  })

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
      
    </div>
   );
}
 
export default NewsFeed;