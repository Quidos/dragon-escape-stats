import { Link } from "react-router-dom"


const Header = (props) => {
    return (
        <div className="fixed w-full bg-blue-400 shadow-md z-50 flex items-center">
            <div className="h-16 flex items-center">
                <i className="fas fa-cube ml-4 mr-4 text-white"></i>
                <div className="logo noselect text-white font-bold">MP stats</div>
            </div>
            <div>
                <Link to="/java" >JAVA </Link>
                <Link to="/bedrock" >BEDROCK</Link>
            </div>
        </div>
    )
}

export default Header