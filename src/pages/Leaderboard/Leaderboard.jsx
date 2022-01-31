import { useState, useEffect } from "react"
import { url, boards, statNamesArr, categories, createOption, createOptions, stats} from "../../context"

import LeaderboardTable from "../../components/LeaderboardTable/LeaderboardTable"
import Loading from "../../components/Loading/Loading"
import Select from "react-select"

import "./leaderboard.css"
//import LeaderboardDisplayer from "../../components/LeaderboardDisplayer/LeaderboardDisplayer"
import { useNavigate, useParams } from "react-router-dom"
import LeaderboardDisplayer from "../../components/LeaderboardDisplayer/LeaderboardDisplayer"


const Leaderboard = (props) => {
    const {leaderboardName} = useParams()
    const navigate = useNavigate()

    const handleLeaderboardChange = (opt) => {
        navigate(`/leaderboards/${opt.value}`)
    }

    return (
        <div className="leaderboard-container">
            <div className="choose-leaderboard">
                {categories.map(category => {
                    return (
                        <Select 
                        className="select"
                        key={category.categoryName}
                        defaultValue={category.categoryName}
                        options={ createOptions(category.games)}
                        onChange={handleLeaderboardChange}
                        menuPortalTarget={document.body} 
                        styles={{ menuPortal: base => ({ ...base, zIndex: 1 }) }}
                        value="test"
                    />
                    )
                })}
            </div>
            <LeaderboardDisplayer leaderboardName={leaderboardName} />
        </div>
    )
}

export default Leaderboard