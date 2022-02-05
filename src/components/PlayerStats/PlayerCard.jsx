import PlayerAccordion from "./PlayerAccordion"
import PlayerOverview from "./PlayerOverview"


const PlayerCard = (props) => {
    const playerName = props.playerName

    return (
        <div className="player-card">
            <PlayerOverview playerName={playerName} />
            <PlayerAccordion playerName={playerName} />
        </div>
    )
}

export default PlayerCard