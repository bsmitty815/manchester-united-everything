import React, {useState} from "react"
import playerQuotes from "../data/quotes"

function PlayerQuotes() {
    const [quotes] = useState(playerQuotes)


    const quoteDisplay = quotes.map((quote) => {
        return <div key={quote.id}><p class="player-quotes">"{quote.quote}"</p><p class="player-quotes">-{quote.name}</p><p></p></div>
    })

    return (
        <div>
            <h1>player quotes</h1>
            {quoteDisplay}
        </div>
    )




}


export default PlayerQuotes