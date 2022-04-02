import { useState, useEffect } from "react"
import { url, boards, statNamesArr, categories, createOption, createOptions, stats, getCleanLeaderboardName} from "../../util"

import LeaderboardTable from "./LeaderboardTable"
import Loading from "../Main/Loading"
import Select from "react-select"
import { fetchStats } from "../../lib/api/ApiUtils"

const parseStats = (stats) => {
    return stats
        .map((obj) => {
            if(obj.board.boardName !== "All") return
            return {
                prioriry: obj.stat.sortingPriority,
                statName: obj.stat.statName
            }
        })
        .filter((obj) => obj !== undefined)
        .sort((obj1, obj2) => obj2.prioriry - obj1.prioriry)
        .map((obj) => {
            return obj.statName
        })
}


const LeaderboardDisplayer = (props) => {
    const version = props.version
    const leaderboardName = props.leaderboardName
    const [statNames, setStatNames] =  useState(null)

    const [statName, setStatName] = useState(null)
    const [boardName, setBoardName] = useState(boards[4]);
    const [leaderboardData, setLeaderboardData] = useState(null)

    const [perPage, setPerPage] = useState(25)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            let stats1 = []
            if(version == "java"){
                const statsArr = await fetchStats(leaderboardName)
                stats1 = parseStats(statsArr)
                setStatNames(stats1)
            }
            setStatName(version == "bedrock" ? "wins" : stats1[0])
        })()
    }, [leaderboardName])

    useEffect(() => {
        if(!statName) return
        if(version == "java" && !stats[leaderboardName].includes(statName)) return
        setLoading(true)
        fetch(`${url}/v1/${version}/leaderboard/${leaderboardName}/${statName}/${boardName}/save`)
        .then((res) => res.json())
        .then((data) => {
          setLeaderboardData(data)
          setLoading(false)
          })
        .catch(err => console.log(err))
    }, [statName, boardName, leaderboardName])

    const handleStatNameChange = (opt) => {
        setStatName(opt.value)
    }

    const handleBoardNameChange = (opt) => {
        setBoardName(opt.value)
    }
    if((version == "java" && !statNames) || !statName) return <Loading />

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center bg-white lg:p-10 lg:py-4 m-4 border rounded" >
                <div className="font-bold text-blue-400">{getCleanLeaderboardName(leaderboardName)}</div>
                {version == "java" && <div className="lg:flex">
                    <Select 
                        className="select"
                        defaultValue={createOption(statName)} 
                        value={createOption(statName)}
                        options={createOptions(statNames)}
                        isSearchable={false}
                        onChange={handleStatNameChange}
                        menuPortalTarget={document.body} 
                        styles={{ menuPortal: base => ({ ...base, zIndex: 0 }) }}
                    />
                    <Select 
                        className="select"
                        defaultValue={createOption(boardName)}
                        value={createOption(boardName)}
                        onChange={handleBoardNameChange} 
                        options={createOptions(boards)}
                        isSearchable={false}
                        menuPortalTarget={document.body} 
                        styles={{ menuPortal: base => ({ ...base, zIndex: 0 }) }}
                    />
                </div>}
                {
                    loading ? 
                        <Loading /> :
                        leaderboardData.status == 404 ?
                            <div>No results</div> :
                            <LeaderboardTable entries={leaderboardData.entries} perPage={perPage} version={version} />
                }
            </div>

        </div>
    )
}

export default LeaderboardDisplayer