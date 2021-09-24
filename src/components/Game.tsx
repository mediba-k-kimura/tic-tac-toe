import React from "react";
import Board from './Board'
import { calculateWinner } from "../reducers";
import { PropsFromRedux } from "../containers"

type GameProps = PropsFromRedux;

const Game = (props: GameProps) => {
    const history = props.history;
    const current = history[props.stepNumber];
    const winner = calculateWinner(current.squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${props.xIsNext ? "X" : "O"}`;

    const moves = history.map((step: any, move: number) => {
      const desc = move ? `Go to move #` + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => props.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

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