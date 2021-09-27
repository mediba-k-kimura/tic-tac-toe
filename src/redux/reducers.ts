import * as Actions from './actions'
import initialState from './initialState'
import { calculateWinner } from '../utils';

export const gameReducer = (state = initialState, action) => {
    switch (action.type){
        case Actions.CLICK_SQUARE:
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares) || squares[action.index]) {
                return state;
            }
            squares[action.index] = state.xIsNext ? "X" : "O";
            return {
                history: history.concat([
                {
                    squares: squares
                }
                ]),
                stepNumber: history.length,
                xIsNext: !state.xIsNext
            };
    }
}