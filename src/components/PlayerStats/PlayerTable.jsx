import numeral from "numeral"

const PlayerTable = ({ playerData }) => {

    return (
        <table className="w-full">
        <thead>
            <tr>
                <th className="border border-solid border-gray-200">Stat</th>
                <th className="border border-solid border-gray-200">Score</th>
                <th className="border border-solid border-gray-200">Rank</th>
            </tr>
        </thead>
        <tbody>
            {
                playerData == null ?
                    <tr
                        className="border border-solid border-gray-200 even:bg-gray-200"
                        key={"Wins"}>
                        <td className="border border-solid border-gray-300 py-1 pr-8 pl-5">
                            Wins
                        </td>
                        <td className="border border-solid border-gray-300 py-1 pr-8 pl-5">
                            0
                        </td>
                        <td className="border border-solid border-gray-300 py-1 pr-8 pl-5">
                            0
                        </td>
                    </tr> 
            :
                playerData.stats
                .sort((a, b) => b.leaderboard.stat.sortingPriority - a.leaderboard.stat.sortingPriority)
                .map((obj) => {
                    const cleanName = obj.leaderboard.stat.cleanName
                    const score = obj.score
                    const position = obj.position
                    if(score == -1 && position == -1) return
                    return (
                        <tr 
                            className="border border-solid border-gray-200 even:bg-gray-200"
                            key={Math.random()}>
                            <td
                                className="border border-solid border-gray-300 py-1 pr-4 px-2 lg:pr-8 lg:pl-5"
                            >
                                {cleanName}
                            </td>
                            <td
                                className="border border-solid border-gray-300 py-1 px-2 lg:pr-16 lg:pl-5"
                            >
                                {score !== -1 ? numeral(score).format('0,0') : "?"}
                            </td>
                            <td
                                className="border border-solid border-gray-300 py-1 px-2 lg:pr-16 lg:pl-5"
                            >
                                {position !== -1 ? numeral(position).format('0,0') : "?"}
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )
}

export default PlayerTable