import { useState } from "react"
import { Link } from "react-router-dom"

import "./sidebar.css"


const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <Link to="/"><i className="fas fa-home fa-sm"></i>Home</Link>
            <Link to="/player"><i className="fas fa-chart-bar fa-sm"></i>Player Stats</Link>
            <Link to="/about"><i class="fas fa-question-circle fa-sm"></i>About</Link>
        </div>
    )
}

export default Sidebar