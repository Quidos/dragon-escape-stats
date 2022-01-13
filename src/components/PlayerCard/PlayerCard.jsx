import { useState } from "react"
import { Link } from "react-router-dom"
import { playerStatNames } from "../../context";


const PlayerCard = (props) => {
    const {player, generatedStats, stats} = props

    const findStat = (statName, stats) => {
        for(let stat of stats) {
            if (stat.leaderboard.stat.statName === statName) {
                return stat
            }
        }
    }
    return (
        <div className="player-stats">
            {player.name}
            <table>
                <tbody>
                    {
                    playerStatNames.map(statName => {
                        const stat = findStat(statName, stats)
                        return (
                            <tr key={statName}>
                                <td>{statName}</td>
                                <td>{stat.score}</td>
                                <td>{stat.position}</td>
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