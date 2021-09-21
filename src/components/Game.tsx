import React from "react";
// import { ISquare, History } from '../interface'
import Board from './Board'
import { calculateWinner } from "../reducers";

const Game: React.FC = (props: any) => {
    const history = props.history;
    const current = history[props.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step: any, move: number) => {
      const desc = move ? `Go to move #` + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => props.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (props.xIsNext ? "X" : "O");
    }

  // const status = useStatus(xIsNext, winner);

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          handleClickSquares={i => props.handleClick(i)}
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