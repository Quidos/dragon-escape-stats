import {useState, useEffect} from "react"
import GameContainer from "./components/GameContainer/GameContainer";
import { url, id } from "./context"

function App() {
  return (
    <main>
      <GameContainer />
    </main>
  );
}

export default App;
