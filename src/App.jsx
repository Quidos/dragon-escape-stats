import {useState, useEffect} from "react"
import Leaderboard from "./pages/Leaderboard";
import PlayerStats from "./pages/PlayerStats";
import About from "./pages/About";
import Header from "./components/Main/Header";
import { measurementID } from "./util"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4"

import "./index.css"
import Sidebar from "./components/Main/Sidebar";
import PlayerSearch from "./pages/PlayerSearch";

function App() {

  useEffect(() => {
    // Measure site traffic
    ReactGA.initialize(measurementID)
    ReactGA.send("pageview")
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/leaderboards/Global" />} />
          <Route path="/leaderboards" element={<Navigate to="/leaderboards/Global" />} />
          <Route path="/leaderboards/:leaderboardName" element={<Leaderboard />} />
          <Route path="/player" element={<PlayerSearch />} />
          <Route path="/player/:playerName" element={<PlayerStats />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;