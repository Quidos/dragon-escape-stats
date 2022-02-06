import { useEffect, useState } from "react"
import { imageApiUrl } from "../../util";

import blank from "../../sources/avatar-default.png"


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
        <img className="w-4 inline-block" src={imageUrl} alt="" />
    )
}

export default PlayerAvatar