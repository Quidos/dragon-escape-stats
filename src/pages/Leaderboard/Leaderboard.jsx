import { useState, useEffect } from "react"
import { url, boardNamesArr, statNamesArr, categories, createOptions, stats} from "../../context"

import LeaderboardTable from "../../components/LeaderboardTable/LeaderboardTable"
import Loading from "../../components/Loading/Loading"
import Select from "react-select"

import "./leaderboard.css"


const Leaderboard = (props) => {
    const [leaderboardData, setLeaderboardData] = useState(null)
    const [gameName, setGameName] = useState({value: "DragonEscape", label: "DragonEscape"});
    const [statNames, setStatNames] = useState({value: "Wins", label: "Wins"});
    const [statName, setStatName] = useState({value: "Wins", label: "Wins"})
    const [boardName, setBoardName] = useState(boardNamesArr[4])

    const [perPage, setPerPage] = useState(25)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`${url}/v1/java/leaderboard/${gameName.value}/${statName.value}/${boardName.value}/save`)
        .then((res) => res.json())
        .then((data) => {
          setLeaderboardData(data)
          setLoading(false)
          })
        .catch(err => console.log(err))
    }, [statName, boardName])

    useEffect(() => {
        setStatNames(createOptions(stats[gameName.value]))
    }, [gameName])

    return (
        <div className="leaderboard-container">
            <div className="search-controls">
                <div className="choose-game">
                    {categories.map(category => {
                        return (
                            <Select 
                            className="select"
                            key={category.categoryName}
                            defaultValue={category.categoryName}
                            options={ createOptions(category.games)}
                            onChange={setGameName}
                            menuPortalTarget={document.body} 
                            styles={{ menuPortal: base => ({ ...base, zIndex: 1 }) }}
                        />
                        )

                    })}
                </div>
                <div className="choose-stats">
                    <Select 
                        className="select"
                        defaultValue={statName} 
                        value={statName}
                        options={statNames}
                        isSearchable={false}
                        onChange={setStatName}
                    />
                    <Select 
                        className="select"
                        defaultValue={boardName} 
                        value={boardName}
                        onChange={setBoardName} 
                        options={boardNamesArr}
                        isSearchable={false}
                        menuPortalTarget={document.body} 
                        styles={{ menuPortal: base => ({ ...base, zIndex: 0 }) }}
                    />
                </div>
            </div>
            {
                loading ? 
                <Loading /> :
                <LeaderboardTable entries={leaderboardData.entries} perPage={perPage} queryChanger={props.queryChanger} />
            }
        </div>
    )
}

export default Leaderboard