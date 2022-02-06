import numeral from "numeral"

const PlayerTable = ({ playerData }) => {
    console.log(playerData)


    return (
        <table className="player-data-table">
        <thead>
            <tr>
                <th>Stat</th>
                <th>Score</th>
                <th>Rank</th>
            </tr>
        </thead>
        <tbody>
            {
                playerData == null ?
                    <tr key={"Wins"}>
                        <td>{"Wins"}</td>
                        <td>{"0"}</td>
                        <td>{"0"}</td>
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
                        <tr key={cleanName}>
                            <td>{cleanName}</td>
                            <td>{score !== -1 ? numeral(score).format('0,0') : "?"}</td>
                            <td>{position !== -1 ? numeral(position).format('0,0') : "?"}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )
}

export default PlayerTable