import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Select from "react-select"
import Loading from "../../components/Loading/Loading"
import PlayerCard from "../../components/PlayerCard/PlayerCard"
import { url, boards } from "../../context"

import "./player-stats.css"


const PlayerStats = (props) => {
    const [playerData, setPlayerData] = useState("")
    const [boardName, setBoardName] = useState(boards[4])
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    const {playerName} = useParams()

    const navigate = useNavigate()

    const getStats = () => {
        setLoading(true)
        fetch(`${url}/v1/java/player/${playerName}/stats/game/DragonEscape/${boardName.value}`)
        .then((res) => res.json())
        .then((data) => {
            data == null ? setPlayerData("") : setPlayerData(data)
            setLoading(false)
            })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getStats()
    }, [boardName, playerName])

    return (
        <div className="player-stats-container">
            <div className="player-search-controls">
                <div className="player-search">
                    <button className="search-button" onClick={() => navigate(`/player/${query}`)}>
                        <i className="fas fa-search fa-lg"></i>
                    </button>
                    <input 
                        className="player-input" 
                        type="text" 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)} 
                        onKeyDown={(e) => {if(e.keyCode === 13) navigate(`/player/${query}`)}}
                        placeholder="Search..."
                    />
                </div>

                <Select 
                    className="select"
                    defaultValue={boardName} 
                    value={boardName}
                    onChange={setBoardName} 
                    options={boards}
                    isSearchable={false}
                />
            </div>
            {
                playerName == null ? 
                    (<></>)
                    : 
                    loading ? 
                    <Loading />
                    :
                    playerData == "" ? 
                        (<div>No results</div>)
                        :
                        <PlayerCard { ...playerData} /> 
            }
        </div>
    )
}

export default PlayerStats