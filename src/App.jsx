import {useState, useEffect} from "react"
import Leaderboard from "./pages/Leaderboard";
import PlayerStats from "./pages/PlayerStats"
import Navbar from "./components/Navbar/Navbar";
import { url, id } from "./context"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "./index.css"
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [query, setQuery] = useState("");
  const changeQuery = (playerName) => {
    setQuery(playerName);
  }
  
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Leaderboard queryChanger={changeQuery}/>} />
          <Route path="/player" element={<PlayerStats query={query}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
