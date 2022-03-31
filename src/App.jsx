import {useState, useEffect} from "react"
import Leaderboard from "./pages/Leaderboard";
import PlayerStats from "./pages/PlayerStats";
import About from "./pages/About";
import Header from "./components/Main/Header";
import { measurementID } from "./util"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from "react-ga4"

import "./index.css"
import Sidebar from "./components/Main/Sidebar";
import PlayerSearch from "./pages/PlayerSearch";

function usePageViews() {
  let location = useLocation()
  useEffect(() => {
    if(!window.GA) {
      ReactGA.initialize(measurementID)
      window.GA = true
    }
    ReactGA.set({ page: location.pathname} )
    ReactGA.send("pageview")
  }, [location])
}

function App() {

  usePageViews()

  return (
    <>
      <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/java" />} />
            <Route path="/leaderboards" element={<Navigate to="/java" />} />
            <Route path="/player" element={<Navigate to="/java/player" />} />
            <Route path="java">
              <Route path="" element={<Navigate to="leaderboards/Global" />} />
              <Route path="leaderboards" element={<Navigate to="Global" />} />
              <Route path="leaderboards/:leaderboardName" element={<Leaderboard />} />
              <Route path="player" element={<PlayerSearch />} />
              <Route path="player/:playerName" element={<PlayerStats />} />
            </Route>
            <Route path="bedrock">
              <Route path="" element={<Navigate to="leaderboards/SurvivalGames" />} />
              <Route path="leaderboards" element={<Navigate to="SurvivalGames" />} />
              <Route path="leaderboards/:leaderboardName" element={<Leaderboard />} />
              <Route path="player" element={<PlayerSearch />} />
              <Route path="player/:playerName" element={<PlayerStats />} />
            </Route>
            <Route path="about" element={<About />} />
          </Routes>
          </>
  );
}

export default App;