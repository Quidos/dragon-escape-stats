import { useState, useEffect, useReducer } from "react"
import { fetchBedrockPlayerData } from "../../lib/api/ApiUtils";
import Loading from "../Main/Loading";

import PlayerTable from "./PlayerTable";

const BedrockPlayer = ({ playerName }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        (async () => {
            const data = await fetchBedrockPlayerData(playerName);
            setData(data.stats)
        })()
    }, [])

    return (
        <div className="w-full bg-white">
            <div className="p-4 border">
            <div className="font-bold text-blue-400">{playerName}'s stats</div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="border border-solid border-gray-200">Game</th>
                        <th className="border border-solid border-gray-200">Wins</th>
                        <th className="border border-solid border-gray-200">Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((data) => {
                        const gameName = data.leaderboard.game.gameName
                        return (
                            <tr 
                                className="border border-solid border-gray-200 even:bg-gray-200"
                                key={gameName}
                            >
                                <td className="border border-solid border-gray-300 py-1 pr-5 lg:pr-16 pl-5">
                                    {gameName}
                                </td>
                                <td className="border border-solid border-gray-300 py-1 pr-5 pl-5">
                                    {data.score}
                                </td>
                                <td className="border border-solid border-gray-300 py-1 pr-5 pl-5">
                                    {data.position}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>

    )
}

export default BedrockPlayer