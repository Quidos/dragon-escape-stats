import { useState } from "react"
import { Link } from "react-router-dom"

import "./sidebar.css"


const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/player">Player Stats</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Sidebar