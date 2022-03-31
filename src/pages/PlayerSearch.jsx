import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Select from "react-select"
import Loading from "../components/Main/Loading"
import { url, boards, createOption, createOptions } from "../util"
import Sidebar from "../components/Main/Sidebar"
import { Helmet } from "react-helmet"


const PlayerSearch = (props) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate()

    return (
        <>
        <Helmet>
            <title>Player Stats | Mineplex Stats</title>
        </Helmet>
            <Sidebar />
            <div className="pt-24 lg:pt-16 lg:pl-52">
                <div className="m-6 p-2 bg-white border">
                    <div className="p-4 flex">
                        <button className="w-12 bg-sky-700 rounded-l-md hover:bg-sky-900" onClick={() => navigate(`/player/${query}`)}>
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                        <input 
                            className="inline border-2 border-l-0 border-solid w-full p-0.5 pl-2 focus:outline-none" 
                            type="text" 
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                            onKeyDown={(e) => {if(e.keyCode === 13) navigate(`../player/${query}`)}}
                            placeholder="Search..."
                            autoFocus
                        />
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default PlayerSearch