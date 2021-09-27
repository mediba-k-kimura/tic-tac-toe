// Storeの初期状態（必要なStateを全て記述）
const initialState = {
    history: [
        { squares: Array(9).fill(null)}
    ],
    stepNumber: 0,
    xIsNext: true
};

export default initialState;