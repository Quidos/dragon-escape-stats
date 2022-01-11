import { useState } from "react"
import { Link } from "react-router-dom"


const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div>Dragon Escape Stats</div>
            <Link to="/">Home</Link>
            <Link to="/player">Player Stats</Link>
        </nav>
    )
}

export default Navbar