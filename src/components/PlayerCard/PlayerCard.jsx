import PlayerOverview from "../PlayerOverview/PlayerOverview"
import "./player-card.css"


const PlayerCard = (props) => {
    const playerName = props.playerName

    return (
        <div className="player-card">
            <PlayerOverview playerName={playerName} />
        </div>
    )
}

export default PlayerCard