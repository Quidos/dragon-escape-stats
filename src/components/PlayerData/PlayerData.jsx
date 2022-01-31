import { useState, useEffect } from "react"

import "./player-Data.css"


const PlayerData = (props) => {
    const [playerData, setPlayerData] = useState("")
    const [boardName, setBoardName] = useState(boards[4])

    const [loading, setLoading] = useState(false)

    const getStats = () => {
        setLoading(true)
        fetch(`${url}/v1/java/player/${playerName}/stats/game/DragonEscape/${boardName}`)
        .then((res) => res.json())
        .then((data) => {
            data == null ? setPlayerData("") : setPlayerData(data)
            setLoading(false)
            })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getStats()
    }, [boardName, playerName])

    const findStat = (statName, stats) => {
        for(let stat of stats) {
            if (stat.leaderboard.stat.statName === statName) {
                return stat
            }
        }
    }

    return (
        <table className="player-card-table-main">
        <thead>
            <tr>
                <th>Stat</th>
                <th>Score</th>
                <th>Rank</th>
            </tr>
        </thead>
        <tbody>
            {
            statNamesArr.map(board => {
                const stat = findStat(board.value, stats)
                return (
                    <tr key={board.value}>
                        <td>{board.label}</td>
                        <td>{stat.score !== -1 ? numeral(stat.score).format('0,0') : "?"}</td>
                        <td>{stat.position !== -1 ? numeral(stat.position).format('0,0') : "?"}</td>
                    </tr>
                )
            })
        }
        </tbody>
    </table>
    )
}

export default PlayerData