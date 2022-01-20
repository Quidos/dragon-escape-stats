import { useState, useEffect } from "react"
import { url, id, boardNames, statNames, playerBoardNames} from "../context"

import { useFetch } from "../context"
import LeaderboardTable from "../components/LeaderboardTable/LeaderboardTable"
import Loading from "../components/Loading/Loading"


const Leaderboard = (props) => {
    const [leaderboardData, setLeaderboardData] = useState(null)
    const [boardName, setBoardName] = useState(boardNames[0])
    const [statName, setStatName] = useState(statNames[1])
    const [perPage, setPerPage] = useState(20)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`${url}/v1/java/leaderboard/DragonEscape/${boardName}/${statName}/save`)
        .then((res) => res.json())
        .then((data) => {
          setLeaderboardData(data)
          setLoading(false)
          })
    }, [boardName, statName])

    const boardNamesChange = (e) => {
        setBoardName(e.target.value)
    }

    if(loading) return (
        <div className="leaderboard-container">
            <Loading />
        </div>
    )

    return (
        <div className="leaderboard-container">
            <select className="board-names" value={boardName} onChange={boardNamesChange} name="selBoard" id="selBoard">
                {playerBoardNames.map(bName => {
                    return (
                        <option key={bName} value={bName}>{bName}</option>
                    )
                })}
            </select>
            <select className="stat-names" value={statName} onChange={(e) => setStatName(e.target.value)} name="selStat" id="selStat">
                {statNames.map(sName => {
                    return (
                        <option key={sName} value={sName}>{sName}</option>
                    )
                })}
            </select>
            <LeaderboardTable entries={leaderboardData.entries} perPage={perPage} queryChanger={props.queryChanger} />
        </div>
    )
}

export default Leaderboard