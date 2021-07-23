import React, {useState} from "react"
import fixtures from "../data/fixtures"




function CurrentFixtures() {
    const [fixturesData] = useState(fixtures.fixtures)
    console.log("fixtures",fixturesData)

    const fixturesTable = fixturesData.map((fixture) => {
        return <tr><td>{fixture.date}</td><td>{fixture.homeTeam}</td><td><img src={fixture.homeTeamLogo} /></td><td>VS</td><td><img src={fixture.awayTeamLogo} /></td><td>{fixture.awayTeam}</td><td>{fixture.time}</td><td>{fixture.competition}</td></tr>
    })



    return (
        <div className="current-fixtures">
            <table className="current-fixtures">
            <tr>
                <td>Date</td>
                <td>Home Team</td>
                <td></td>
                <td></td>
                <td></td>
                <td>Away Team</td>
                <td>Time</td>
                <td>Competition</td>
            </tr>
            {fixturesTable}

            </table>




        </div>
    )


}
    
export default CurrentFixtures
