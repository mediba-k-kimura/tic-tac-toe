import React, { useState, useEffect } from "react";
import { ISquare, History } from '../interface'
import Board from './Board'

function useStatus(xIsNext: boolean, winner: ISquare) {
  const [status, setStatus] = useState<string>("Next player: " + (xIsNext ? "X" : "O"));
  useEffect(() => {
    if(winner){
      setStatus("Winner: " + winner);
    }else{
      setStatus("Next player: " + (xIsNext ? "X" : "O"));
    }
  }, [xIsNext, winner]);
  return status;
}

const Game: React.FC = () => {


  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(_history.concat([{ squares: squares }]));
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const status = useStatus(xIsNext, winner);

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          handleClickSquares={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
export default Game;