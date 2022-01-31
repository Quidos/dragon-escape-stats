import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Select from "react-select"
import Loading from "../../components/Loading/Loading"
import PlayerCard from "../../components/PlayerCard/PlayerCard"
import { url, boards, createOption, createOptions } from "../../context"

import "./player-stats.css"


const PlayerStats = (props) => {
    const {playerName} = useParams()
    const [query, setQuery] = useState("");
    const navigate = useNavigate()

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
            </div>
            {
                playerName == null ? 
                    (<></>)
                    : 
                    <PlayerCard playerName={playerName} /> 
            }
        </div>
    )
}

export default PlayerStats