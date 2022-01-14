import { useState } from "react"

import "./leaderboard-table.css"

const LeaderboardTable = (props) => {
    const [page, setPage] = useState(0)
    const entries = props.entries
    const perPage = props.perPage
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
                                <td>{entry.player.name}</td>
                                <td>{entry.score}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="table-controls">
                <i onClick={() => setPage(page - 1)} className="change-page fas fa-angle-double-left fa-lg"></i>
                <div className="table-page-number">{page + 1}</div>
                <i onClick={() => setPage(page + 1)} className="change-page fas fa-angle-double-right fa-lg"></i>
            </div>
        </div>

    )
}

export default LeaderboardTable