import PlayerData from "./PlayerData"
import PlayerOverview from "./PlayerOverview"


const PlayerCard = (props) => {
    const playerName = props.playerName

    return (
        <div className="player-card">
            <PlayerOverview playerName={playerName} />
            <PlayerData playerName={playerName} />
        </div>
    )
}

export default PlayerCard