import React, {useState} from "react"
import playerQuotes from "../data/quotes"

function PlayerQuotes() {
    const [quotes] = useState(playerQuotes)


    const quoteDisplay = quotes.map((quote) => {
        return <div key={quote.id}><p className="player-quotes">"{quote.quote}"</p><p classNAme="player-quotes">-{quote.name}</p><p style={{flex: 1, height: 1, backgroundColor: 'black'}}></p><p></p></div>
    })

    return (
        <div>
            {quoteDisplay}
        </div>
    )




}


export default PlayerQuotes