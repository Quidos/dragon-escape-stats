import {categories, createOption, createOptions, stats} from "../util"
import Select from "react-select"

import { useLocation, useNavigate, useParams } from "react-router-dom"
import LeaderboardDisplayer from "../components/Leaderboard/LeaderboardDisplayer"
import Sidebar from "../components/Main/Sidebar"
import { useEffect, useState } from "react"
import { fetchBedrockGames } from "../lib/api/ApiUtils"


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
            <div className="pt-16 pl-52">
                <div className="flex flex-col items-center p-4 pr-52">
                    <div className="flex flex-wrap border bg-white p-2">
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
                                            width: "190px"
                                        }) }}
                            />
                            )
                        })}
                    </div>
                    <LeaderboardDisplayer leaderboardName={leaderboardName} version={version} />
                </div>
            </div>
        </>
    )
}

export default Leaderboard