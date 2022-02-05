import { useState, useEffect } from "react"
import { getStatNames } from "../../util";
import { url, boards } from "../../util";


const PlayerStatTable = ({ playerName, leaderboardName, lname }) => {
    const statNames = getStatNames(leaderboardName)
    const [boardName, setBoardName] = useState(boards[4]);
    const [playerData, setPlayerData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getStats = () => {
        setLoading(true)
        fetch(`${url}/v1/java/player/${playerName}/stats/game/${leaderboardName}/${boardName}`)
        .then((res) => res.json())
        .then((data) => {
            data == null ? setPlayerData("") : setPlayerData(data)
            setLoading(false)
            })
        .catch(err => console.log(err))
    }

    const findStat = (statName, stats) => {
        for(let stat of stats) {
            if (stat.leaderboard.stat.statName === statName) {
                return stat
            }
        }
    }

    if(lname != leaderboardName) return (<></>)

    return (
        <div>h</div>
    )
}

export default PlayerStatTable