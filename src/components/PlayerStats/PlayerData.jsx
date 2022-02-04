import { useState, useEffect } from "react"
import { getCategoryNames, getStatNames } from "../../util";

const PlayerData = (props) => {
    console.log(getStatNames("Global"));
    const categories = getCategoryNames()

    const [leaderboard, setLeaderboard] = useState(categories[0]);

    return (
        <div className="player-data">
            {categories.map(category => {
                return (
                    <button
                        key={category}
                        onClick={(e) => setLeaderboard(e.target.innerHTML)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default PlayerData