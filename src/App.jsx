import {useState, useEffect} from "react"
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import PlayerStats from "./pages/PlayerStats/PlayerStats";
import About from "./pages/About/About";
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
          <Route path="/player" element={<PlayerStats query={query} queryChanger={changeQuery} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
