import {useState, useEffect} from "react"
import Leaderboard from "./pages/Leaderboard";
import PlayerStats from "./pages/PlayerStats"
import Navbar from "./components/Navbar/Navbar";
import { url, id } from "./context"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="/player" element={<PlayerStats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
