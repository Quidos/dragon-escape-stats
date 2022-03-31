import { useParams, useLocation } from "react-router-dom"
import PlayerAccordion from "../components/PlayerStats/PlayerAccordion"
import PlayerOverview from "../components/PlayerStats/PlayerOverview"
import Sidebar from "../components/Main/Sidebar"
import BedrockPlayer from "../components/PlayerStats/BedrockPlayer"

const PlayerStats = (props) => {
    const version = useLocation().pathname.split("/")[1];
    const { playerName } = useParams()

    return (
        <>
            <Sidebar />
            <div className="pt-24 lg:pt-16 lg:pl-52">
                <div className="flex flex-col p-3 lg:flex-row">
                    {version == "java" && <PlayerOverview playerName={playerName} version={version} />}
                    {version == "java" && <PlayerAccordion playerName={playerName} version={version} />}
                </div>
                <div className="p-3">
                    {version == "bedrock" && <BedrockPlayer playerName={playerName} />}
                </div>
            </div>
        </>
    )
}

export default PlayerStats