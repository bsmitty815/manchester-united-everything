import React, {useState} from "react"
import allTimeStats from "../data/allTimeStats"

function AllTimeStats() {
    const [mainStats] = useState(allTimeStats.allTimeStats)
    const [attackStats] = useState(allTimeStats.attackAllTimeStats)
    const [teamPlayStats] = useState(allTimeStats.teamPlayAllTimeStats)
    const [defenseStats] = useState(allTimeStats.defenceAllTimeStats)
    const [disciplineStats] = useState(allTimeStats.disciplineAllTimeStats)
    
    const playerNameRegEx = /([A-Za-z])/g

    const mainStatsDisplay = mainStats.map((stat) => {
        return <p>{stat.name.match(playerNameRegEx)} : {stat.data}</p>
    })

    const attackStatsDisplay = attackStats.map((stat) => {
        return <p>{stat.name.match(playerNameRegEx)} : {stat.data}</p>
    })

    const teamPlayStatsDisplay = teamPlayStats.map((stat) => {
        return <p>{stat.name.match(playerNameRegEx)} : {stat.data}</p>
    })

    const defenseStatsDisplay = defenseStats.map((stat) => {
        return <p>{stat.name.match(playerNameRegEx)} : {stat.data}</p>
    })

    const disciplineStatsDisplay = disciplineStats.map((stat) => {
        return <p>{stat.name.match(playerNameRegEx)} : {stat.data}</p>
    })


    return (
        <div>
            <h1>All EPL Stats</h1>
            <div className="allTimeStats-container">
            <ul className="allTimeStats-container">
                <div className="allTimeStats-item">
                    <div className="ui card">
                        <div  className="content">
                                {mainStatsDisplay}
                        </div>
                    </div>
                </div>
            </ul>
            <ul className="allTimeStats-container">
                <div className="allTimeStats-item">
                    <div className="ui card">
                        <div  className="content">
                            {attackStatsDisplay}
                        </div>
                    </div>
                </div>
            </ul>
            <ul className="allTimeStats-container">
                <div className="allTimeStats-item">
                    <div className="ui card">
                        <div  className="content">
                            {teamPlayStatsDisplay}
                        </div>
                    </div>
                </div>
            </ul>
            <ul className="allTimeStats-container">
                <div className="allTimeStats-item">
                    <div className="ui card">
                        <div  className="content">
                            {defenseStatsDisplay}
                        </div>
                    </div>
                </div>
            </ul>
            <ul className="allTimeStats-container">
                <div className="allTimeStats-item">
                    <div className="ui card">
                        <div  className="content">
                            {disciplineStatsDisplay}
                        </div>
                    </div>
                </div>
            </ul>
            </div>
        </div>
    )



}


export default AllTimeStats