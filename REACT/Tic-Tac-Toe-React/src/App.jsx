import React, { useState } from 'react'

export default function App() {

  const [turnO, setTurnO] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const winnerPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


  const handleClick = (index) => {
    if (board[index] !== '' || gameOver) return;
    const newBoard = [...board];
    newBoard[index] = turnO ? 'O' : 'X';
    setBoard(newBoard);
    setTurnO(!turnO);
    checkWinner(newBoard);
  }
  const checkWinner = (board) => {
    for (let pattern of winnerPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[c] === board[a]) {
        setWinner(board[a]);
        setGameOver(true);
        return;
      }
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setGameOver(false);
    setWinner(null);
    setTurnO(true);
  }

  return (
    <div className="main">
      <div className="game-box">
        <h2>Tic tac toe</h2>
        <div className="board">
          {board.map((value, index) => (
            <div key={index} className="box" onClick={() => handleClick(index)}>
              {value}</div>
          ))}
        </div>
        <button className='btn' onClick={resetGame}>Reset</button>
      </div>

      <div className="message-box">
        <div className="message-container">
          <p>The winner is: {winner}</p>
        </div>
      </div>
    </div>
  )
}
