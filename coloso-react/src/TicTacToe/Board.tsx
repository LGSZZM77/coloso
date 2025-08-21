import { useState } from "react";
import Square from "./Square";
import type { SquareValue } from "./Square";

const calculateWinner = (board: SquareValue[]) => {
  // 승리 조건
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const winnerline of winnerLines) {
    const [a, b, c] = winnerline;
    if (board[a] === board[b] && board[a] === board[c] && board[a] !== "-") {
      return board[a];
    }
  }
  return "-";
};

const Board = () => {
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill("-"));
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState<SquareValue>("-");
  const squareClick = (index: number) => {
    if (winner !== "-" || board[index] !== "-") return;

    const newBoard = [...board];
    newBoard[index] = xTurn ? "X" : "O";
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner !== "-") {
      setWinner(gameWinner);
    }
    setBoard(newBoard);
    setXTurn(!xTurn);
  };
  return (
    <div>
      {winner === "-" ? <h2>Next Player : {xTurn ? "X" : "O"}</h2> : <h2>Winner : {winner}</h2>}
      <div role="group">
        {[0, 1, 2].map((value, index) => {
          return <Square key={index} value={board[value]} onClick={() => squareClick(value)} />;
        })}
      </div>
      <div role="group">
        {[3, 4, 5].map((value, index) => {
          return <Square key={index} value={board[value]} onClick={() => squareClick(value)} />;
        })}
      </div>
      <div role="group">
        {[6, 7, 8].map((value, index) => {
          return <Square key={index} value={board[value]} onClick={() => squareClick(value)} />;
        })}
      </div>
    </div>
  );
};

export default Board;
