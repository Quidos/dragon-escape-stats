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
        <div className="flex flex-col items-center">
            <table className="leaderboard-table-main">
                <thead>
                    <tr>
                        <th className="border border-solid border-gray-200">Rank</th>
                        <th className="border border-solid border-gray-200">Name</th>
                        <th className="border border-solid border-gray-200">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.slice(page * perPage, page * perPage + perPage).map((entry, i) => {
                        return(
                            <tr 
                                className="border border-solid border-gray-200 even:bg-gray-200"
                                key={entry.player.name}
                            >
                                <td className="border border-solid border-gray-300 py-1 pr-8 pl-5">
                                    {i + 1 + page * perPage}
                                </td>
                                <td className="border border-solid border-gray-300 py-1 pr-16 pl-5">
                                    <PlayerAvatar uuid={entry.player.uuid}/>
                                    <Link 
                                        className="no-underline pl-2 text-sky-700 font-medium hover:text-sky-900"
                                        to={`../player/${entry.player.name}`}>{entry.player.name}
                                    </Link>
                                </td>
                                <td className="border border-solid border-gray-300 py-1 pr-5 pl-5">
                                    {numeral(entry.score).format('0,0')}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="table-controls">
                <i onClick={() => handlePage(-1)} className="change-page fas fa-angle-double-left fa-lg cursor-pointer text-blue-400"></i>
                <div className="table-page-number">{page + 1}</div>
                <i onClick={() => handlePage(1)} className="change-page fas fa-angle-double-right fa-lg cursor-pointer text-blue-400"></i>
            </div>
        </div>

    )
}

export default LeaderboardTable