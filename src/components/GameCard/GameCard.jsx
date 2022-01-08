import "./game-card.css"
import { useFetch } from "../../context";

const GameCard = (props) => {
    return (
        <div className="game-card">
            <h4>{props.gameName}</h4>
        </div>
    )
}

export default GameCard