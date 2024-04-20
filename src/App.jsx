import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [playGame, setPlayGame] = useState(false);

  const startGame = () => {
    setPlayGame(true);
  };

  return (
    <>
      <h1 style={{ marginBlock: "10px 20px" }}>
        Tic Tac Toe in <span>React</span>
      </h1>

      {playGame ? <Board /> : <button onClick={startGame}>Play Game</button>}
    </>
  );
}

export default App;
