import React, {useState} from "react"
import currentPlayers from "../data/manchester-united-current-players"


function PlayerProfile() {
    const [players] = useState(currentPlayers.players)

    const playerNameRegEx = /([^A-Z,^a-z])/g

    const playerCard = players.map((player) => {
        return <li class="playerProfile-item"><div class="ui card"><div  class="content"><div class="ui placeholder"><img src={player.image} class="player-image" alt={player.image} /><p>{player.url.split("/")[5].replace(playerNameRegEx, " ")}</p><p>{player.postion}</p></div></div></div></li>
    })



    return (

            <ul class="playerProfile-container">
  
                    {playerCard}

            </ul>

    )


}


export default PlayerProfile
