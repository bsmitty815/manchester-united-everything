import React, {useState} from "react"
import currentYearStats from "../data/currentYearStats"

function CurrentStats() {
    const [mainStats] = useState(currentYearStats.mainStats)
    const [attackStats] = useState(currentYearStats.attackStats)
    const [teamPlayStats] = useState(currentYearStats.teamPlayStats)
    const [defenseStats] = useState(currentYearStats.defenceStats)
    const [disciplineStats] = useState(currentYearStats.disciplineStats)

        
    const playerNameRegEx = /([A-Za-z])/g

    const mainStatsDisplay = mainStats.map((stat) => {
        return <p key={stat.name}>{stat.name.match(playerNameRegEx)} : {stat.data}</p>
    })

    const attackStatsDisplay = attackStats.map((stat) => {
        return <p key={stat.name}>{stat.name.match(playerNameRegEx)} : {stat.data}</p>
    })

    const teamPlayStatsDisplay = teamPlayStats.map((stat) => {
        return <p key={stat.name}>{stat.name.match(playerNameRegEx)} : {stat.data}</p>
    })

    const defenseStatsDisplay = defenseStats.map((stat) => {
        return <p key={stat.name}>{stat.name.match(playerNameRegEx)} : {stat.data}</p>
    })

    const disciplineStatsDisplay = disciplineStats.map((stat) => {
        return <p key={stat.name}>{stat.name.match(playerNameRegEx)} : {stat.data}</p>
    })

    return (
        <div>
            <h1>EPL 2021/2022 Stats</h1>
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


export default CurrentStats