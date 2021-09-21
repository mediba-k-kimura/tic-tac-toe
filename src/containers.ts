import { connect } from "react-redux";
import { clickSquare, jumpToPast } from "./actions";
import Game from "./components/Game";

// Redux の state を props として適当な形に整形する
const mapStateToProps = (state: any, ownProps: any) => {
    return state.game;
};

// Redux の dispatcher を props として適当な形に整形する
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
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
export const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);