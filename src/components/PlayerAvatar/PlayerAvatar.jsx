import { useEffect, useState } from "react"
import { imageApiUrl } from "../../context";

import "./player-avatar.css"
import blank from "./avatar-default.png"


const PlayerAvatar = (props) => {
    const [imageUrl, setImageUrl] = useState(blank);
    const uuid = props.uuid
    
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