import { useEffect, useState } from "react"
import { boardNamesArr } from "../../context";
import { imageApiUrl } from "../../context";

import numeral from "numeral";

import blank from "./default.png"
import "./player-card.css"


const PlayerCard = (props) => {
    const [imageUrl, setImageUrl] = useState(blank);
    const {player, generatedStats, stats} = props

    useEffect(() => {
        fetch(`${imageApiUrl}/renders/body/${player.uuid}`)
        .then((res) => res.blob())
        .then((imageBlob) => {
            setImageUrl(URL.createObjectURL(imageBlob))
            })
        .catch(err => console.log(err))
    }, [])

    const findStat = (statName, stats) => {
        for(let stat of stats) {
            if (stat.leaderboard.stat.statName === statName) {
                return stat
            }
        }
    }
    return (
        <div className="player-card">
            <div className="player-avatar">
                <img className="player-image" src={imageUrl} alt="" />
                <div className="player-name">{player.name}</div>
            </div>
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
                    boardNamesArr.map(board => {
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

        </div>
    )
}

export default PlayerCard