import { combineReducers } from "redux";
import { CLICK_SQUARE, JUMP_TO_PAST } from "./actions";
import { ISquare, ActionTypes } from "./interface";

// 勝者を算出する
export function calculateWinner(squares: Array<ISquare>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // 勝ちパターン満たしているプレイヤーを返す
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

// Redux の state の初期値
const initialState = {
    history:[
        {
            squares: Array(9).fill(null)
        }
    ],
    stepNumber: 0,
    xIsNext: true
}

// reducer
function game(state = initialState, action: ActionTypes){
    switch(action.type){
        case CLICK_SQUARE:
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares) || squares[action.index]) {
                return state;
            }
            squares[action.index] = state.xIsNext ? "X" : "O";
            return{
                history: history.concat([
                    {
                      squares: squares
                    }
                  ]),
                  stepNumber: history.length,
                  xIsNext: !state.xIsNext
            };
          case JUMP_TO_PAST:
            return{
              ...state,
              stepNumber: action.step,
              xIsNext: action.step % 2 === 0
            };

            default:
                return state;
    }
}

export const app = combineReducers({ game });