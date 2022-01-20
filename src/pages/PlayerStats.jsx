import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loading from "../components/Loading/Loading"
import PlayerCard from "../components/PlayerCard/PlayerCard"
import { url, statNames } from "../context"


const PlayerStats = (props) => {
    const [playerName, setPlayerName] = useState(props.query)
    const [playerData, setPlayerData] = useState("")
    const [playerDataType, setPlayerDataType] = useState(0)
    const [statName, setStatName] = useState("All")
    const [loading, setLoading] = useState(false);

    const playerNameChange = (e) => {
        setPlayerName(e.target.value)
    }

    const getStats = () => {
        if(playerName == "") return
        setLoading(true)
        fetch(`${url}/v1/java/player/${playerName}/stats/game/DragonEscape/${statName}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data == null) {
                setPlayerDataType(2)
                setPlayerData(data)
            } else{
                setPlayerData(data)
                setPlayerDataType(1)
            }
            setLoading(false)
            })
    }

    useEffect(() => {
        props.queryChanger("")
    }, [])

    useEffect(() => {
        getStats()
    }, [statName])


    return (
        <div className="player-stats-container">
            <input type="text" value={playerName} onChange={playerNameChange} onKeyDown={(e) => {if(e.keyCode == 13) getStats()}}/>
            <select className="stat-names" value={statName} onChange={(e) => setStatName(e.target.value)} name="selStat" id="selStat">
                {statNames.map(sName => {
                    return (
                        <option key={sName} value={sName}>{sName}</option>
                    )
                })}
            </select>
            {loading ? <Loading /> : 
                [
                    <></>,
                    <PlayerCard { ...playerData} />, 
                    <div>no result</div>
                ][playerDataType]}
        </div>
    )
}

export default PlayerStats