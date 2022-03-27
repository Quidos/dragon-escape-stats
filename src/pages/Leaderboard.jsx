import {categories, createOption, createOptions, stats} from "../util"
import Select from "react-select"

import { useLocation, useNavigate, useParams } from "react-router-dom"
import LeaderboardDisplayer from "../components/Leaderboard/LeaderboardDisplayer"
import Sidebar from "../components/Main/Sidebar"


const Leaderboard = (props) => {
    console.log(useLocation());
    const {leaderboardName} = useParams()
    const navigate = useNavigate()

    const handleLeaderboardChange = (opt) => {
        navigate(`../leaderboards/${opt.value}`)
    }

    return (
        <>
            <Sidebar />
            <div className="pt-16 pl-52">
                <div className="flex flex-col items-center p-2">
                    <div className="flex flex-wrap border bg-white p-2">
                        {categories.map(category => {
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
                    <LeaderboardDisplayer leaderboardName={leaderboardName} />
                </div>
            </div>
        </>
    )
}

export default Leaderboard