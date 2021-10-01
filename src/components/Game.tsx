import { clickSquare, jumpToPast } from '../redux/actions'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { calculateWinner } from '../utils'
import Board from './Board'

const Game: React.FC = () => {
  const selector = useAppSelector(state => state.game)
  const dispatch = useAppDispatch()


  const history = selector.history;
  const current = history[selector.stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => dispatch(jumpToPast(move))}>{desc}</button>
      </li>
    );
  });

  const status = winner ? `Winner: ${winner}` : `Next player: ${(selector.xIsNext ? "X" : "O")}`

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          handleClickSquares={(i: number) => dispatch(clickSquare(i))}
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