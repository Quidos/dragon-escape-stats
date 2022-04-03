import { useState } from "react"
import { Link } from "react-router-dom"
import PlayerAvatar from "./PlayerAvatar"

import numeral from "numeral"

const secondsToString = (interval) => {
    const levels = {
        scale: [24, 60, 60, 1],
        units: [' d ', 'h ', 'm ', 's ']
      };
    const cbFun = (d, c) => {
        let bb = d[1] % c[0],
        aa = (d[1] - bb) / c[0];
        aa = aa > 0 ? aa + c[1] : '';
        return [d[0] + aa, bb];
    };
  
    let rslt = levels.scale.map((d, i, a) => a.slice(i).reduce((d, c) => d * c))
      .map((d, i) => ([d, levels.units[i]]))
      .reduce(cbFun, ['', interval]);
    return rslt[0].split(" ")[0];
  };

const LeaderboardTable = (props) => {
    const [page, setPage] = useState(0)
    const version = props.version
    const entries = props.entries
    const perPage = props.perPage
    const statName = props.statName

    const handlePage = (change) => {
        if(page + change < 0) return
        if(((page + change)) * perPage >= entries.length) return
        setPage(page + change)
    }

    return (
        <div className="flex flex-col items-center p-2">
            <table className="leaderboard-table-main">
                <thead>
                    <tr>
                        <th className="border border-solid border-gray-200">Rank</th>
                        <th className="border border-solid border-gray-200">Name</th>
                        <th className="border border-solid border-gray-200">
                            {version == "java" ? "Score" : "Wins"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {entries.slice(page * perPage, page * perPage + perPage).map((entry, i) => {
                        let score = entry.score
                        if(["IngameTime", "HubTime"].includes(statName)) score = `${secondsToString(score)}`
                        else score = numeral(score).format('0,0')
                        return(
                            <tr 
                                className="border border-solid border-gray-200 even:bg-gray-200"
                                key={entry.player.name}
                            >
                                <td className="border border-solid border-gray-300 py-1 pr-8 pl-5">
                                    {i + 1 + page * perPage}
                                </td>
                                <td className="border border-solid border-gray-300 py-1 pr-16 pl-5">
                                    {version == "java" && <PlayerAvatar uuid={entry.player.uuid}/>}
                                    <Link 
                                        className="no-underline pl-2 text-sky-700 font-medium hover:text-sky-900"
                                        to={`../player/${entry.player.name}`}>{entry.player.name}
                                    </Link>
                                </td>
                                <td className="border border-solid border-gray-300 py-1 pr-5 pl-5">
                                    {score}
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