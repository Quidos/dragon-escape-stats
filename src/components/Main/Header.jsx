import { Link } from "react-router-dom"
import clsx from "clsx"
import { useLocation } from "react-router-dom";


const Header = (props) => {
    const version = useLocation().pathname.split("/")[1];
    return (
        <div className="fixed w-full bg-blue-400 shadow-md z-50 flex items-center justify-between">
            <div className="h-16 flex items-center">
                <i className="fas fa-cube ml-4 mr-4 text-white"></i>
                <div className="logo noselect text-white font-bold">MP stats</div>
            </div>
            <div className="flex justify-center items-center">
                <Link 
                    to="/java" 
                    className={clsx(
                        "text-white h-16 flex items-center p-2 rounded",
                        version == "java" || version == "about" ? "bg-sky-900" : "bg-blue-400"
                    )}  
                    >JAVA</Link>
                <Link to="/bedrock" 
                className={clsx(
                    "text-white h-16 flex items-center p-2 rounded",
                    version == "bedrock" ? "bg-sky-900" : "bg-blue-400"
                )}>BEDROCK</Link>
            </div>
        </div>
    )
}

export default Header