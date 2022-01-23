import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Select from "react-select"
import Loading from "../../components/Loading/Loading"
import PlayerCard from "../../components/PlayerCard/PlayerCard"
import { url, statNamesArr } from "../../context"

import "./player-stats.css"


const PlayerStats = (props) => {
    const [playerName, setPlayerName] = useState(props.query)
    const [playerData, setPlayerData] = useState("")
    const [playerDataType, setPlayerDataType] = useState(0)
    const [statName, setStatName] = useState(statNamesArr[4])
    const [loading, setLoading] = useState(false);

    const playerNameChange = (e) => {
        setPlayerName(e.target.value)
    }

    const getStats = () => {
        if(playerName == "") return
        setLoading(true)
        fetch(`${url}/v1/java/player/${playerName}/stats/game/DragonEscape/${statName.value}`)
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
            <div className="player-search-controls">
                <div className="player-search">
                    <button className="search-button" onClick={getStats}>
                        <i className="fas fa-search fa-lg"></i>
                    </button>
                    <input 
                        className="player-input" 
                        type="text" 
                        value={playerName} 
                        onChange={playerNameChange} 
                        onKeyDown={(e) => {if(e.keyCode == 13) getStats()}}
                        placeholder="Search..."
                    />
                </div>

                <Select 
                    className="select"
                    defaultValue={statName} 
                    value={statName}
                    onChange={setStatName} 
                    options={statNamesArr}
                    isSearchable={false}
                />
            </div>
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