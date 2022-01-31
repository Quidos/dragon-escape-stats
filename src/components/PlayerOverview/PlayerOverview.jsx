import { Link } from "react-router-dom"
import { imageApiUrl, mojangApiUrl } from "../../context"
import { useState, useEffect } from "react"

import blank from "./default.png"

import "./player-overview.css"


const PlayerOverview = (props) => {
    const playerName = props.playerName
    const [playerData, setPlayerData] = useState("")

    const [loading, setLoading] = useState(false);

    const [imageUrl, setImageUrl] = useState(blank);

    const getAvatar = (uuid) => {
        fetch(`${imageApiUrl}/renders/body/${uuid}`)
        .then((res) => res.blob())
        .then((imageBlob) => {
            setImageUrl(URL.createObjectURL(imageBlob))
            })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(`${mojangApiUrl}/users/profiles/minecraft/${playerName}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            getAvatar(data.id)
            })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="player-overview">
            <img className="player-image" src={imageUrl} alt="" />
            <div className="player-name">{playerName}</div>
        </div>
    )
}

export default PlayerOverview