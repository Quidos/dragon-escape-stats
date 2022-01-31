import {useState, useEffect} from "react"
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import PlayerStats from "./pages/PlayerStats/PlayerStats";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import { measurementID } from "./context"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4"

import "./index.css"
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  useEffect(() => {
    // Measure site traffic
    ReactGA.initialize(measurementID)
    ReactGA.send("pageview")
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/leaderboards/Global" />} />
          <Route path="/leaderboards" element={<Navigate to="/leaderboards/Global" />} />
          <Route path="/leaderboards/:leaderboardName" element={<Leaderboard />} />
          <Route path="/player" element={<PlayerStats />} />
          <Route path="/player/:playerName" element={<PlayerStats />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;