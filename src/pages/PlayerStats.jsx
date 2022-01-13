import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import PlayerCard from "../components/PlayerCard/PlayerCard"
import { url, statNames } from "../context"


const PlayerStats = (props) => {
    const [playerName, setPlayerName] = useState("")
    const [playerData, setPlayerData] = useState("")
    const [playerDataType, setPlayerDataType] = useState(0)
    const [statName, setStatName] = useState("All")

    const playerNameChange = (e) => {
        setPlayerName(e.target.value)
    }

    const getStats = () => {
        if(playerName == "") return
        fetch(`${url}/v1/java/player/${playerName}/stats/game/DragonEscape/${statName}`)
        .then((res) => res.json())
        .then((data) => {
            if(data == null) {
                setPlayerDataType(2)
                setPlayerData(data)
            } else{
                setPlayerData(data)
                setPlayerDataType(1)
            }
            })
    }

    useEffect(() => {
        getStats()
    }, [statName])

    return (
        <div className="player-stats">
            <input type="text" value={playerName} onChange={playerNameChange} onKeyDown={(e) => {if(e.keyCode == 13) getStats()}}/>
            <select className="stat-names" value={statName} onChange={(e) => setStatName(e.target.value)} name="selStat" id="selStat">
                {statNames.map(sName => {
                    return (
                        <option key={sName} value={sName}>{sName}</option>
                    )
                })}
            </select>
            {
                [
                    <></>,
                    <PlayerCard { ...playerData} />, 
                    <div>no result</div>
                ][playerDataType]
            }
        </div>
    )
}

export default PlayerStats