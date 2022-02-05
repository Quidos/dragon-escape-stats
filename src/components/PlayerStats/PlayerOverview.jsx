import { globalKey, gamesPlayedKey, ExpEarnedKey } from "../../util"
import { useState, useEffect } from "react"

import Loading from "../Main/Loading"
import { fetchPlayerInfo, fetchPlayerWebsite, fetchRender } from "../../ApiUtils"

import blank from "../../sources/default.png"


const PlayerOverview = (props) => {
    const playerName = props.playerName
    const [accountData, setAccountData] = useState(null)
    const [websiteData, setWebsiteData] = useState(null);
    const [imageUrl, setImageUrl] = useState(blank);

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
        <div className="player-overview">
            <img className="player-img" src={imageUrl} alt="" />
            <div className="player-name">{playerName}</div>
            <div className="website-data">
            {
                websiteData == null ?
                    <Loading />
                    :
                    <>
                        <div>rank: {websiteData.primaryRank}</div>
                        <div>friends: {websiteData.gameStats[globalKey].otherStats.Friends}</div>
                        <div>games: {websiteData.gameStats[globalKey].stats[gamesPlayedKey]}</div>
                        <div>exp: {websiteData.gameStats[globalKey].stats[ExpEarnedKey]}</div>
                    </>

            }
            </div>
            <div className="name-history">
                {
                    accountData == null ?
                        <div>Loading....</div>
                        :
                    <div>names: {accountData.code != 404 ? accountData.username_history.map(obj => (<div key={Math.random()}>{obj.username}</div>)) : (<div>g</div>)}</div>

                }
            </div>
        </div>
    )
}

export default PlayerOverview