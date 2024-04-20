import React, { useState } from "react";
import "./style.css";
import Square from "./Square";


const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [moveCount, setMoveCount] = useState(0)

  const clickHandler = (index) => {
    if (state[index] !== null) {
      return
    }

    let copyState = [...state];
    copyState[index] = isXTurn ? "X": "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
    setMoveCount(prevCount => prevCount + 1 )

}  
  

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;

      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a]
      }

      if (moveCount === 9) {
        if (state[a] && state[a] !== state[b] && state[a] === state[c]) {
          return "No one"
        }
          
        else if (state[a] && state[a] === state[b] && state[a] !== state[c]) {
          return "No one"
        }
      }      

    }

    return false
  };

  const isWinner = checkWinner();

  const playGame = () => {
    setState(Array(9).fill(null))
    setMoveCount(0)
  }

  return (
    <>
      <div className="board-container">
        {isWinner ? (
          <>
            <h2> {isWinner} Won </h2>
            <button onClick={playGame} >Play Again</button>
          </>
        ) : (
            <>
              <h2>Player {isXTurn ? "X" : "O"} Move <br /> Count : {moveCount} </h2>
            <div className="row">
              <Square clickHandler={() => clickHandler(0)} value={state[0]} />
              <Square clickHandler={() => clickHandler(1)} value={state[1]} />
              <Square clickHandler={() => clickHandler(2)} value={state[2]} />
            </div>
            <div className="row">
              <Square clickHandler={() => clickHandler(3)} value={state[3]} />
              <Square clickHandler={() => clickHandler(4)} value={state[4]} />
              <Square clickHandler={() => clickHandler(5)} value={state[5]} />
            </div>
            <div className="row">
              <Square clickHandler={() => clickHandler(6)} value={state[6]} />
              <Square clickHandler={() => clickHandler(7)} value={state[7]} />
              <Square clickHandler={() => clickHandler(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Board;
