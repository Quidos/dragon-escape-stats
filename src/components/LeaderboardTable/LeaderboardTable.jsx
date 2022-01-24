import { useState } from "react"
import { Link } from "react-router-dom"
import PlayerAvatar from "../PlayerAvatar/PlayerAvatar"

import "./leaderboard-table.css"

const LeaderboardTable = (props) => {
    const changeQuery = props.queryChanger

    const [page, setPage] = useState(0)
    const entries = props.entries
    const perPage = props.perPage

    const handlePage = (change) => {
        if(page + change < 0) return
        if(((page + change)) * perPage >= entries.length) return
        setPage(page + change)
    }

    return (
        <div className="leaderboard-table">
            <table className="leaderboard-table-main">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.slice(page * perPage, page * perPage + perPage).map((entry, i) => {
                        return(
                            <tr key={entry.player.name}>
                                <td>{i + 1 + page * perPage}</td>
                                <td>
                                    <PlayerAvatar uuid={entry.player.uuid}/>
                                    <Link onClick={() => changeQuery(entry.player.name)} to="/player">{entry.player.name}</Link>
                                </td>
                                <td>{entry.score}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="table-controls">
                <i onClick={() => handlePage(-1)} className="change-page fas fa-angle-double-left fa-lg"></i>
                <div className="table-page-number">{page + 1}</div>
                <i onClick={() => handlePage(1)} className="change-page fas fa-angle-double-right fa-lg"></i>
            </div>
        </div>

    )
}

export default LeaderboardTable