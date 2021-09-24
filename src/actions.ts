
//action typeを定義

export const CLICK_SQUARE = "CLICK_SQUARE" as const;
export const JUMP_TO_PAST = "JUMP_TO_PAST" as const;

// action creators

export const clickSquare = (index: number) => {
    return {type: CLICK_SQUARE, index}
}

export const jumpToPast = (step: number) => {
    return {type: JUMP_TO_PAST, step}
}
