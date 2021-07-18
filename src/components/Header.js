import React, {useState} from "react"
import dateUpdated from "../data/dateUpdated"


function Header() {
    const [date] = useState(dateUpdated)




    return (
        <div className="header">

            <div>
            <table className="header">
            <tr>
                <th>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/180px-Manchester_United_FC_crest.svg.png" className="header-image" alt="manchester-united" />
                </th>
                <th>
                    <h1>Manchester United</h1>
                </th>
            </tr>

            </table>
            </div>

            <p>Updated On: {date}</p>
        </div>
    )


}


export default Header