export type ISquare = 'X' | 'O' | null;
export interface History {
  squares: ISquare[];
}
interface ClickSquareTypes{
  type: "CLICK_SQUARE";
  index: number;
}
interface JumpToPastTypes{
  type: "JUMP_TO_PAST";
  step: number;
}
export type ActionTypes = ClickSquareTypes | JumpToPastTypes;