import { useState, useEffect } from "react"
import { getCategories } from "../../util";


const PlayerData = ({ leaderboard }) => {
    console.log(getCategories());
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
        <div>h</div>
    )
}

export default PlayerData
