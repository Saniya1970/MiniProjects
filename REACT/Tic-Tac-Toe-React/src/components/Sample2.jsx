// import React from 'react';

// function Square({ value, onClick }) {
//     return (
//         <button className="square" onClick={onClick}>
//             {value}
//         </button>
//     );
// }

// export default Square;

// import React, { useState } from 'react';
// import Square from './Square';

// function Board() {
//     const [squares, setSquares] = useState(Array(9).fill(null));
//     const [isXNext, setIsXNext] = useState(true);

//     const handleClick = (index) => {
//         const newSquares = squares.slice();
//         if (calculateWinner(newSquares) || newSquares[index]) {
//             return;
//         }
//         newSquares[index] = isXNext ? 'X' : 'O';
//         setSquares(newSquares);
//         setIsXNext(!isXNext);
//     };

//     const renderSquare = (index) => {
//         return <Square value={squares[index]} onClick={() => handleClick(index)} />;
//     };

//     const winner = calculateWinner(squares);
//     let status;
//     if (winner) {
//         status = 'Winner: ' + winner;
//     } else {
//         status = 'Next player: ' + (isXNext ? 'X' : 'O');
//     }

//     return (
//         <div>
//             <div className="status">{status}</div>
//             <div className="board-row">
//                 {renderSquare(0)}
//                 {renderSquare(1)}
//                 {renderSquare(2)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(3)}
//                 {renderSquare(4)}
//                 {renderSquare(5)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(6)}
//                 {renderSquare(7)}
//                 {renderSquare(8)}
//             </div>
//         </div>
//     );
// }

// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//     return null;
// }

// export default Board;

// import React from 'react';
// import Board from './Board';

// function Game() {
//     return (
//         <div className="game">
//             <div className="game-board">
//                 <Board />
//             </div>
//             <div className="game-info">
//                 <div>{/* status */}</div>
//                 <ol>{/* TODO */}</ol>
//             </div>
//         </div>
//     );
// }

// export default Game;


// body {
//     font: 14px "Century Gothic", Futura, sans - serif;
//     margin: 20px;
// }

// ol, ul {
//     padding - left: 30px;
// }
  
//   .board - row:after {
//     clear: both;
//     content: "";
//     display: table;
// }
  
//   .status {
//     margin - bottom: 10px;
// }
  
//   .square {
//     background: #fff;
//     border: 1px solid #999;
//     float: left;
//     font - size: 24px;
//     font - weight: bold;
//     line - height: 34px;
//     height: 34px;
//     margin - right: -1px;
//     margin - top: -1px;
//     padding: 0;
//     text - align: center;
//     width: 34px;
// }
  
//   .square:focus {
//     outline: none;
// }
  
//   .kbd - navigation.square:focus {
//     background: #ddd;
// }
  
//   .game {
//     display: flex;
//     flex - direction: row;
// }
  
//   .game - info {
//     margin - left: 20px;
// }

