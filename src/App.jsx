import {useState, useEffect} from "react"
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Navbar from "./components/Navbar/Navbar";
import { url, id } from "./context"

function App() {
  return (
    <>
      <Navbar />
      <Leaderboard />
    </>
  );
}

export default App;
