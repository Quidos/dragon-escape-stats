import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Select from "react-select"
import Loading from "../components/Main/Loading"
import { url, boards, createOption, createOptions } from "../util"


const PlayerSearch = (props) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate()

    return (
        <div className="p-2">
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
    )
}

export default PlayerSearch