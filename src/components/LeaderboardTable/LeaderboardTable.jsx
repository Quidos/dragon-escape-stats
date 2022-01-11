import { useState } from "react"

const LeaderboardTable = (props) => {
    const [page, setPage] = useState(0)
    const entries = props.entries
    const perPage = props.perPage
    return (
        <div className="leaderboard-table">
            <table className="leaderboard-table-main">
                <tbody>
                    {entries.slice(page * perPage, page * perPage + perPage).map((entry, i) => {
                        return(
                            <tr key={entry.player.name}>
                                <td>{i + 1 + page * perPage}.</td>
                                <td>{entry.player.name}</td>
                                <td>{entry.score}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={() => setPage(page - 1)}>Previous Page</button>
            {page + 1}
            <button onClick={() => setPage(page + 1)}>Next Page</button>
        </div>

    )
}

export default LeaderboardTable