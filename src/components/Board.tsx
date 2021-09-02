import React from 'react';
import { ISquare } from '../interface';
import Square from './Square';
interface BoardProps {
    squares: ISquare[];
    handleClickSquares: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, handleClickSquares }) => {
  const COLUMN_LENGTH = 3
  const SQUARE_LENGTH = 3

  return (
    <>
      {[...Array(COLUMN_LENGTH)].map((_, i) => {
        return(
          <div className="board-row" key={i}>
            {[...Array(SQUARE_LENGTH)].map((_, j) => {
              const index = 3 * i + j;
              return (
                <Square
                  value={squares[index]}
                  handleClickSquares={() => handleClickSquares(index)}
                  key={j}
                ></Square>
              );
            })}
          </div>
        )
      })}
    </>
  );
}
export default Board;