import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { playerBoardNames } from "../../context";
import { imageApiUrl } from "../../context";

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
                    playerBoardNames.map(statName => {
                        const stat = findStat(statName, stats)
                        return (
                            <tr key={statName}>
                                <td>{statName}</td>
                                <td>{stat.score != -1 ? stat.score : "?"}</td>
                                <td>{stat.position != -1 ? stat.position : "?"}</td>
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