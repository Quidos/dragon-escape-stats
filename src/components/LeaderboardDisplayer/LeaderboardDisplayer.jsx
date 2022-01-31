import { useState, useEffect } from "react"
import { url, boards, statNamesArr, categories, createOption, createOptions, stats} from "../../context"

import LeaderboardTable from "../../components/LeaderboardTable/LeaderboardTable"
import Loading from "../../components/Loading/Loading"
import Select from "react-select"

import "./leaderboard-displayer.css"


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
        <div className="leaderboard-displayer-container">
            <h4>{leaderboardName}</h4>
            <div className="choose-stats">
                <Select 
                    className="select"
                    defaultValue={statName} 
                    value={statName}
                    options={createOptions(statNames)}
                    isSearchable={false}
                    onChange={handleStatNameChange}
                />
                <Select 
                    className="select"
                    defaultValue={boardName} 
                    value={boardName}
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
                <LeaderboardTable entries={leaderboardData.entries} perPage={perPage} />
            }
        </div>
    )
}

export default LeaderboardDisplayer