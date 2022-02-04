import { useState } from "react"
import { Link } from "react-router-dom"
import PlayerAvatar from "./PlayerAvatar"

import numeral from "numeral"


const LeaderboardTable = (props) => {

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
                                    <Link to={`/player/${entry.player.name}`}>{entry.player.name}</Link>
                                </td>
                                <td>{numeral(entry.score).format('0,0')}</td>
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