import * as Actions from './actions'
import initialState from './initialState'
import { calculateWinner } from '../utils';
import { AnyAction } from 'redux'

export const gameReducer = (state = initialState, action: AnyAction) => {
    switch (action.type){
        case Actions.CLICK_SQUARE:
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

        case Actions.JUMP_TO_PAST:
            return {
                ...state,
                stepNumber: action.payload,
                xIsNext: (action.payload % 2 === 0),
            };

        default:
            return state;
    }
}