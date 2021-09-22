import { connect, ConnectedProps } from "react-redux";
import { Action, Dispatch } from "redux";
import { clickSquare, jumpToPast } from "./actions";
import Game from "./components/Game";
import { StateType } from "./interface";

// Redux の state を props として適当な形に整形する
const mapStateToProps = (state: {game: StateType}, ownProps: {}) => {
    return state.game;
};

// Redux の dispatcher を props として適当な形に整形する
const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: {}) => {
    return{
        handleClick: (index: number) => {
            dispatch(clickSquare(index));
        },
        jumpTo: (step: number) => {
            dispatch(jumpToPast(step));
        }
    };
};

// connect()() は、Redux の state と React component を接続する関数
// export const GameContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Game);

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export const GameContainer = connector(Game);