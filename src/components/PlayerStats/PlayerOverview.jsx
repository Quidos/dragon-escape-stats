import { Link } from "react-router-dom"
import { url, imageApiUrl, ashconApiUrl, globalKey, gamesPlayedKey, ExpEarnedKey } from "../../util"
import { useState, useEffect } from "react"

import PlayerImage from "./PlayerImage"

import blank from "../../sources/default.png"
import Loading from "../Main/Loading"


const PlayerOverview = (props) => {
    const playerName = props.playerName
    const [accountData, setAccountData] = useState(null)
    const [websiteData, setWebsiteData] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${ashconApiUrl}/mojang/v2/user/${playerName}`)
        .then((res) => res.json())
        .then((data) => {
            setAccountData(data)
            setLoading(false)
            })
        .catch(err => setLoading(false))
    }, [playerName])

    useEffect(() => {
        setLoading(true)
        fetch(`${url}/v1/java/website/${playerName}`)
        .then((res) => res.json())
        .then((data) => {
            setWebsiteData(data)
            setLoading(false)
            })
        .catch(err => console.log(err))
        }, [playerName])

    if(loading || !accountData || !websiteData) return (
        <div className="player-overview">
            <img className="player-img" src={blank} alt="" />
            <div className="player-name">{playerName}</div>
            <Loading />
        </div>
    )

    return (
        <div className="player-overview">
            <PlayerImage uuid={accountData.uuid} />
            <div className="player-name">{playerName}</div>
            <div>rank: {websiteData.primaryRank}</div>
            <div>friends: {websiteData.gameStats[globalKey].otherStats.Friends}</div>
            <div>games: {websiteData.gameStats[globalKey].stats[gamesPlayedKey]}</div>
            <div>exp: {websiteData.gameStats[globalKey].stats[ExpEarnedKey]}</div>
            <div>names: {accountData.code != 404 ? accountData.username_history.map(obj => (<div key={Math.random()}>{obj.username}</div>)) : (<div>g</div>)}</div>
        </div>
    )
}

export default PlayerOverview