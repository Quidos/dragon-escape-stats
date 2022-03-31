import { globalKey, gamesPlayedKey, ExpEarnedKey } from "../../util"
import { useState, useEffect } from "react"

import Loading from "../Main/Loading"
import { fetchPlayerInfo, fetchPlayerWebsite, fetchRender } from "../../lib/api/ApiUtils"

import blank from "../../sources/default.png"

import numeral from "numeral"


const PlayerOverview = ({ playerName }) => {
    const [accountData, setAccountData] = useState(null)
    const [websiteData, setWebsiteData] = useState(null);
    const [imageUrl, setImageUrl] = useState(blank);

    const [showNameHistory, setShowNameHistory] = useState(false);

    useEffect(() => {
        fetchPlayerInfo(playerName)
        .then((data) => {
            setAccountData(data)
            if(data.uuid == null) return
            fetchRender(data.uuid)
            .then((img) => setImageUrl(img))
        })

        fetchPlayerWebsite(playerName)
        .then((data) => setWebsiteData(data))

    }, [])

    return (
        <div className="flex flex-col lg:min-w-[15rem] items-center border-2 m-1 h-min bg-white">
            <img className="lg:w-24 lg:m-4" src={imageUrl} alt="" />
            <div className="flex flex-col items-center">
            {
                websiteData == null ?
                    <>
                        <div className="font-semibold">{playerName}</div>
                        <Loading />
                    </>
                    :
                    <>
                        <div className="font-semibold">
                            <div className={`
                                inline-block
                                
                                ${websiteData.primaryRank == "Ultra" ? "text-blue-500" : ""}
                                ${websiteData.primaryRank == "Hero" ? "text-fuchsia-700" : ""}
                                ${websiteData.primaryRank == "Legend" ? "text-green-600" : ""}
                                ${websiteData.primaryRank == "Titan" ? "text-red-600" : ""}
                                ${websiteData.primaryRank == "Eternal" ? "text-cyan-700" : ""}
                                ${websiteData.primaryRank == "Immortal" ? "text-yellow-500" : ""}
                                ${websiteData.primaryRank == "YouTube" ? "text-red-600" : ""}
                                ${websiteData.primaryRank == "YT" ? "text-purple-700" : ""}
                                ${websiteData.primaryRank == "Stream" ? "text-purple-600" : ""}
                            `}>
                                {websiteData.primaryRank == "Player" ? <> </> : 
                                websiteData.primaryRank}
                            </div> {websiteData.playerName}
                        </div>
                        <div className="m-2">
                            <div>
                                Friends: <div className="inline-block text-gray-700">
                                    {websiteData.gameStats[globalKey].otherStats.Friends}
                                </div>
                            </div>
                            <div>
                                Games Played: <div className="inline-block text-gray-700" >
                                    {numeral(websiteData.gameStats[globalKey].stats[gamesPlayedKey]).format('0,0')}
                                </div>
                            </div>
                            <div>
                                Exp: <div className="inline-block text-gray-700" >
                                    {numeral(websiteData.gameStats[globalKey].stats[ExpEarnedKey]).format('0,0')}
                                </div>
                            </div>
                        </div>

                    </>

            }
            </div>
            <div className="">
                {
                    accountData == null ?
                        <div>Loading....</div>
                        :
                        <div>
                            <div
                                className="cursor-pointer font-bold"
                                onClick={() => setShowNameHistory(!showNameHistory)}
                            >
                                Name history <i className="fas fa-caret-down"></i>
                            </div>
                            {
                                showNameHistory ?
                                    <div className="absolute border-2 p-2">
                                    {
                                        accountData.code != 404 ? 
                                        accountData.username_history.map((obj, i) => (
                                            <div key={Math.random()}>
                                                {obj.username}
                                                </div>
                                        )) 
                                        : 
                                        <></>
                                    }
                                    </div>
                                :
                                <></>
                            }

                        </div>

                }
            </div>
        </div>
    )
}

export default PlayerOverview