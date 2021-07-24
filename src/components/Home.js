import React from "react"
import teamImage from "../teamImage.jpeg"



function Home() {


    return (
        <div >
            <div className="home" >
                <img src={teamImage} />
            </div>
            <div className="home" >
                <iframe title="manchester united" src="https://giphy.com/embed/SWhLaOdoGhrQ7GAfOk" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
            
            
        </div>
    )


}
    
export default Home
