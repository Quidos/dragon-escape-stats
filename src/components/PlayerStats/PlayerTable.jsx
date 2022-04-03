import numeral from "numeral"
import { getCleanLeaderboardName } from "../../util"

const secondsToString = (interval) => {
    const levels = {
        scale: [24, 60, 60, 1],
        units: [' d ', 'h ', 'm ', 's ']
      };
    const cbFun = (d, c) => {
        let bb = d[1] % c[0],
        aa = (d[1] - bb) / c[0];
        aa = aa > 0 ? aa + c[1] : '';
        return [d[0] + aa, bb];
    };
  
    let rslt = levels.scale.map((d, i, a) => a.slice(i).reduce((d, c) => d * c))
      .map((d, i) => ([d, levels.units[i]]))
      .reduce(cbFun, ['', interval]);
    return rslt[0].split(" ")[0];
  };

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
                    let score = obj.score
                    const position = obj.position
                    if(score == -1 && position == -1) return
                    if(["Ingame Time", "Hub Time"].includes(cleanName)) score = `${secondsToString(score)}`
                    else score = numeral(score).format('0,0')
                    return (
                        <tr 
                            className="border border-solid border-gray-200 even:bg-gray-200"
                            key={Math.random()}>
                            <td
                                className="border border-solid border-gray-300 py-1 pr-4 px-2 lg:pr-8 lg:pl-5"
                            >
                                {getCleanLeaderboardName(cleanName)}
                            </td>
                            <td
                                className="border border-solid border-gray-300 py-1 px-2 lg:pr-16 lg:pl-5"
                            >
                                {score !== -1 ? score : "?"}
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