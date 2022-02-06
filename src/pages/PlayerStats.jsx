import { useParams } from "react-router-dom"
import PlayerAccordion from "../components/PlayerStats/PlayerAccordion"
import PlayerOverview from "../components/PlayerStats/PlayerOverview"


const PlayerStats = (props) => {
    const { playerName } = useParams()

    return (
        <div className="pt-16 pl-52 flex">
            <PlayerOverview playerName={playerName} />
            <PlayerAccordion playerName={playerName} />
        </div>
    )
}

export default PlayerStats