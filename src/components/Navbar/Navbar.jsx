import { useState } from "react"
import { Link } from "react-router-dom"

import "./navbar.css"


const Navbar = (props) => {
    return (
        <div className="navbar">
            <i className="icon fas fa-dragon"></i>
            <div className="logo">Dragon Escape Stats</div>
        </div>
    )
}

export default Navbar