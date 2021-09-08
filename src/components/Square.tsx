import React from 'react';
import { ISquare } from '../interface';
interface SquareProps {
  value: ISquare;
  handleClickSquares: () => void;
}

const Square: React.FC<SquareProps> = ({ value, handleClickSquares }) => {
  return (
    <button className="square" onClick={handleClickSquares}>
      {value}
    </button>
  );
}
export default Square;