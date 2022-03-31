import { Link } from "react-router-dom"

const Sidebar = (props) => {
    return (
        <div className="z-50 fixed mt-16 h-auto bg-gray-500 w-full lg:h-full lg:w-52">
            <div className="z-50 flex flex-row justify-around lg:flex-col lg:justify-items-start">
                <Link to="../leaderboards" 
                    className="no-underline text-gray-200 flex justify-center items-center h-8 w-full
                                        hover:bg-gray-700 hover:text-white hover:transition-all
                                        lg:py-[10px] lg:pl-[20px] lg:justify-start lg:h-auto">
                    <i className="fas fa-chart-bar fa-sm"></i>
                    <div className="hidden lg:inline-block pl-[10px]">Leaderboards</div>
                </Link>
                <Link to="../player" className="no-underline text-gray-200 flex justify-center items-center h-8 w-full
                                        hover:bg-gray-700 hover:text-white hover:transition-all
                                        lg:py-[10px] lg:pl-[20px] lg:justify-start lg:h-auto">
                    <i className="fas fa-user fa-sm"></i>
                    <div className="hidden lg:inline-block pl-[15px]">Player Stats</div>
                </Link>
                <Link to="/about" className="no-underline text-gray-200 flex justify-center items-center h-8 w-full
                                        hover:bg-gray-700 hover:text-white hover:transition-all
                                        lg:py-[10px] lg:pl-[20px] lg:justify-start lg:h-auto">
                    <i className="fas fa-question-circle fa-sm"></i>
                    <div className="hidden lg:inline-block pl-[12px]">About</div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
