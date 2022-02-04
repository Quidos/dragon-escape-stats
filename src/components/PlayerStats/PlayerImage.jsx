import { useEffect, useState } from "react"
import { imageApiUrl } from "../../util";

import blank from "../../sources/default.png"


const PlayerImage = (props) => {
    const [imageUrl, setImageUrl] = useState(blank);
    const uuid = props.uuid
    
    useEffect(() => {
        if(uuid == null) return
        fetch(`${imageApiUrl}/renders/body/${uuid}`)
        .then((res) => res.blob())
        .then((imageBlob) => {
            setImageUrl(URL.createObjectURL(imageBlob))
            })
        .catch(err => console.log(err))
    }, [uuid])

    return (
        <img className="player-img" src={imageUrl} alt="" />
    )
}

export default PlayerImage