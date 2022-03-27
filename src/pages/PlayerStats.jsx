import { useParams, useLocation } from "react-router-dom"
import PlayerAccordion from "../components/PlayerStats/PlayerAccordion"
import PlayerOverview from "../components/PlayerStats/PlayerOverview"
import Sidebar from "../components/Main/Sidebar"
import BedrockPlayerAccordion from "../components/PlayerStats/BedrockPlayerAccordion"

const PlayerStats = (props) => {
    const version = useLocation().pathname.split("/")[1];
    const { playerName } = useParams()

    return (
        <>
            <Sidebar />
            <div className="pt-16 pl-52">
                <div className="flex p-3">
                    {version == "java" && <PlayerOverview playerName={playerName} version={version} />}
                    {version == "java" ? 
                        <PlayerAccordion playerName={playerName} version={version} /> :
                        <BedrockPlayerAccordion playerName={playerName} />}
                </div>
            </div>
        </>
    )
}

export default PlayerStats