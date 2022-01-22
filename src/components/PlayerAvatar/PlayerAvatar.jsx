import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { imageApiUrl } from "../../context";

import "./player-avatar.css"
import blank from "./avatar-default.png"


const PlayerAvatar = ({uuid}) => {
    const [imageUrl, setImageUrl] = useState(blank);

    useEffect(() => {
        fetch(`${imageApiUrl}/avatars/${uuid}`)
        .then((res) => res.blob())
        .then((imageBlob) => {
            setImageUrl(URL.createObjectURL(imageBlob))
            })
        .catch(err => console.log(err))
    }, [])
    return (
        <img className="player-avatar-img" src={imageUrl} alt="" />
    )
}

export default PlayerAvatar