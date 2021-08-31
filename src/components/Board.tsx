import React from 'react';
import { ISquare } from '../interface';
import Square from './Square'
interface BoardProps {
    squares: ISquare[];
    onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const COLUMN_LENGTH = 3
  const SQUARE_LENGTH = 3

  return (
    <>
      {[...Array(COLUMN_LENGTH)].map((square, i) => {
        return(
          <div className="board-row" key={i}>
            {[...Array(SQUARE_LENGTH)].map((square, j) => {
              const index = 3 * i + j;
              return (
                <Square
                  value={squares[index]}
                  onClick={() => onClick(index)}
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