import { useState } from "react"
import { Link } from "react-router-dom"
import { url } from "../context"


const PlayerStats = (props) => {
    const [playerName, setPlayerName] = useState("")
    const playerNameChange = (e) => {
        setPlayerName(e.target.value)
    }
    const playerNameSubmit = (e) => {
        fetch(`${url}/v1/java/player/${playerName}/stats/game/DragonEscape/All`)
    }
    return (
        <div className="player-stats">
            <input type="text" value={playerName} onChange={playerNameChange} onSubmit={playerNameSubmit}/>

        </div>
    )
}

export default PlayerStats