import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameState } from '../interface'
import { calculateWinner } from '../utils'
import type { RootState } from './store'

// 初期状態を定義
const initialState: GameState = {
    history: [
        { squares: Array(9).fill(null)}
    ],
    stepNumber: 0,
    xIsNext: true
}

export const gameSlice = createSlice({
  name: 'game',
  // `createSlice`は、`initialState`引数からstate型を推測
  initialState,
  reducers: {
    // PayloadAction型を使用して、 `action.payload`の内容を宣言
    clickSquare: (state, action: PayloadAction<number>) => {
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[action.payload]) {
            return state;
        }
        squares[action.payload] = state.xIsNext ? "X" : "O";
        return {
            history: history.concat([
            {
                squares: squares
            }
            ]),
            stepNumber: history.length,
            xIsNext: !state.xIsNext
        };
    },
    jumpToPast: (state, action: PayloadAction<number>) => {
        return {
            ...state,
            stepNumber: action.payload,
            xIsNext: (action.payload % 2 === 0),
        };
    }
  }
})

// selectors などの他のコードは、インポートされた `RootState`型を使用
export const selectGame = (state: RootState) => state.game

// Reducer をエクスポート
export default gameSlice.reducer

// actions creator をエクスポート
export const { clickSquare, jumpToPast } = gameSlice.actions