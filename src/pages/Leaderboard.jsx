import {categories, createOption, createOptions, stats} from "../util"
import Select from "react-select"

import { useLocation, useNavigate, useParams } from "react-router-dom"
import LeaderboardDisplayer from "../components/Leaderboard/LeaderboardDisplayer"
import Sidebar from "../components/Main/Sidebar"
import { useEffect, useState } from "react"
import { fetchBedrockGames } from "../lib/api/ApiUtils"
import clsx from "clsx"

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

// useEffect(() => {
//     (async () => {
//         const statsArr = await fetchStats(leaderboardName)
//         const stats = parseStats(statsArr)
//         setStatNames(stats)
//         setStatName(version == "bedrock" ? "wins" : stats[0])
//     })()
// }, [leaderboardName])

const Leaderboard = (props) => {
    const version = useLocation().pathname.split("/")[1];
    const {leaderboardName} = useParams()
    const navigate = useNavigate()
    const [bedrockGames, setBedrockGames] = useState([
        {
            categoryName: "All Games",
            games: []
        }
    ])
    const categoryData = version == "java" ? categories : bedrockGames

    useEffect(() => {
        (async () => {
            const data = await fetchBedrockGames();
            setBedrockGames([
                {
                    categoryName: "All Games",
                    games: data.map((el) => el.gameName)
                }
            ])
        })()
    }, [])

    const handleLeaderboardChange = (opt) => {
        navigate(`../leaderboards/${opt.value}`)
    }

    return (
        <>
            <Sidebar />
            <div className="pt-24 lg:pt-16 lg:pl-52">
                <div className="flex flex-col items-center p-4">
                    <div className={clsx("flex flex-wrap justify-center border bg-white lg:justify-start lg:p-2", version == "bedrock" && "lg:mr-52")}>
                        {categoryData.map(category => {
                            return (
                                <Select 
                                    className="select"
                                    key={category.categoryName}
                                    defaultValue={createOption(category.categoryName)}
                                    value={createOption(category.categoryName)}
                                    options={ createOptions(category.games)}
                                    onChange={handleLeaderboardChange}
                                    menuPortalTarget={document.body} 
                                    styles={{ 
                                        menuPortal: base => ({ ...base, zIndex: 1 }),
                                        container: provided => ({
                                            ...provided,
                                            width: "160px"
                                        }) }}
                            />
                            )
                        })}
                    </div>
                    <div className="lg:pr-52">
                        <LeaderboardDisplayer leaderboardName={leaderboardName} version={version} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leaderboard