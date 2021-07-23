import React, {useState} from "react"
import currentPlayers from "../data/manchester-united-current-players"


function PlayerProfile() {
    const [players] = useState(currentPlayers.players)

    const playerNameRegEx = /([^A-Z,^a-z])/g

    const playerCard = players.map((player) => {
        return <li className="playerProfile-item" key={player.image}><div className="ui card"><div  className="content"><div className="ui placeholder"><img src={player.image} className="player-image" alt={player.image} /><p>{player.url.split("/")[5].replace(playerNameRegEx, " ")}</p><p>{player.postion}</p></div></div></div></li>
    })



    return (

            <ul className="playerProfile-container">
  
                    {playerCard}

            </ul>

    )


}


export default PlayerProfile
