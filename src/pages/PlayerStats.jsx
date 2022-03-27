import { useParams } from "react-router-dom"
import PlayerAccordion from "../components/PlayerStats/PlayerAccordion"
import PlayerOverview from "../components/PlayerStats/PlayerOverview"
import Sidebar from "../components/Main/Sidebar"

const PlayerStats = (props) => {
    const { playerName } = useParams()

    return (
        <>
            <Sidebar />
            <div className="pt-16 pl-52">
                <div className="flex p-3">
                    <PlayerOverview playerName={playerName} />
                    <PlayerAccordion playerName={playerName} />
                </div>
            </div>
        </>
    )
}

export default PlayerStats