export type ISquare = 'X' | 'O' | null;
export interface History {
  squares: ISquare[];
}
export interface GameState {
  history: History[];
  stepNumber: number;
  xIsNext: boolean;
};