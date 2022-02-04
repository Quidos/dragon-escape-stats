import { Link } from "react-router-dom"

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <Link to="/"><i className="fas fa-chart-bar fa-sm"></i><div className="home-text">Leaderboards</div></Link>
            <Link to="/player"><i className="fas fa-user fa-sm"></i><div className="player-stats-text">Player Stats</div></Link>
            <Link to="/about"><i className="fas fa-question-circle fa-sm"></i><div className="about-text">About</div></Link>
        </div>
    )
}

export default Sidebar