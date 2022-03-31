import Sidebar from "../components/Main/Sidebar"

const About = () => {
    return (
        <>
            <Sidebar />
            <div className="pt-2 lg:pt-16 lg:pl-52">
                <div className="m-2 p-6 border bg-white">
                    <p>Play on Mineplex <a className="text-sky-700 hover:text-sky-900" href="https://www.mineplex.com/" target="_blank" rel="noopener noreferrer">here</a></p>
                    <p>Check out the project <a className="text-sky-700 hover:text-sky-900" href="https://github.com/Quidos/dragon-escape-stats" target="_blank" rel="noopener noreferrer">here</a></p>
                    <p>Web app made by <a className="text-sky-700 hover:text-sky-900" href="https://github.com/Quidos" target="_blank" rel="noopener noreferrer">Quidos</a></p>
                    <p>API by <a className="text-sky-700 hover:text-sky-900" href="https://github.com/Timmi6790" target="_blank" rel="noopener noreferrer">Timmi6790</a></p>
                    <p>Player avatars provided by <a className="text-sky-700 hover:text-sky-900" href="https://crafatar.com" target="_blank" rel="noopener noreferrer">Crafatar</a></p>
                    <p>Join the <a className="text-sky-700 hover:text-sky-900" href="https://discord.gg/mKPJjea" target="_blank" rel="noopener noreferrer">discord</a></p>
                </div>
            </div>
        </>
    )
}

export default About