import { useState, useEffect } from "react"
import { url, boards, statNamesArr, categories, createOption, createOptions, stats} from "../../util"

import LeaderboardTable from "./LeaderboardTable"
import Loading from "../Main/Loading"
import Select from "react-select"


const LeaderboardDisplayer = (props) => {
    const leaderboardName = props.leaderboardName
    const statNames =  stats[leaderboardName]

    const [statName, setStatName] = useState(stats[leaderboardName][0])
    const [boardName, setBoardName] = useState(boards[4]);
    const [leaderboardData, setLeaderboardData] = useState(null)

    const [perPage, setPerPage] = useState(25)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setStatName(stats[leaderboardName][0])
    }, [leaderboardName])

    useEffect(() => {
        setLoading(true)
        fetch(`${url}/v1/java/leaderboard/${leaderboardName}/${statName}/${boardName}/save`)
        .then((res) => res.json())
        .then((data) => {
          setLeaderboardData(data)
          setLoading(false)
          })
        .catch(err => console.log(err))
    }, [statName, boardName])

    const handleStatNameChange = (opt) => {
        setStatName(opt.value)
    }

    const handleBoardNameChange = (opt) => {
        setBoardName(opt.value)
    }

    return (
        <div className="flex flex-col items-center pr-52">
            <div className="flex flex-col items-center bg-white p-10 py-4 m-4 border rounded" >
                <div className="font-bold text-blue-400">{leaderboardName}</div>
                <div className="choose-stats">
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
                </div>
                {
                    loading ? 
                        <Loading /> :
                        leaderboardData.status == 404 ?
                            <div>No results</div> :
                            <LeaderboardTable entries={leaderboardData.entries} perPage={perPage} />
                }
            </div>

        </div>
    )
}

export default LeaderboardDisplayer