import { useState, useEffect, useReducer } from "react"
import { fetchBedrockPlayerData } from "../../lib/api/ApiUtils";
import Loading from "../Main/Loading";

import PlayerTable from "./PlayerTable";

const BedrockPlayerAccordion = ({ playerName }) => {
    const [data, setData] = useState(null)
    const [leaderboardName, setLeaderboardName] = useState(null)
    useEffect(() => {
        (async () => {
            const data = await fetchBedrockPlayerData(playerName);
            setData(data.stats)
            setLeaderboardName(data.leaderboard.game.gameName)
        })()
    }, [])

    return (
        <div className="w-full bg-white">
            <div className="border">
                {
                data && data.map((data) => {
                    const game = data.leaderboard.game
                    return (
                    <div key={game.gameName}>
                        <div
                            className="cursor-pointer m-2 p-2 rounded border-2 border-slate-400 text-gray-800"
                            
                        >
                            {game.cleanName}
                        </div>
                        {
                            game.gameName == leaderboardName &&
                                <div className="m-2">
                                    <PlayerTable playerData={data} />
                                </div>
                        }
                    </div>
                )})
                }
            </div>
        </div>

    )
}

export default BedrockPlayerAccordion