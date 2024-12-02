import React, { useState } from 'react';

const Sample = () => {
    const [board, setBoard] = useState(Array(9).fill('')); // Represents the game board
    const [turnO, setTurnO] = useState(true); // true = 'O', false = 'X'
    const [winner, setWinner] = useState(null); // Stores the winner
    const [gameOver, setGameOver] = useState(false); // Flag to check if game is over

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

    // Handle box click
    const handleClick = (index) => {
        if (board[index] !== '' || gameOver) return; // Prevent clicking on filled or disabled boxes
        const newBoard = [...board];
        newBoard[index] = turnO ? 'O' : 'X'; // Assign 'O' or 'X' based on turn
        setBoard(newBoard);
        setTurnO(!turnO); // Switch turns
        checkWinner(newBoard);
    };

    // Check if there's a winner
    const checkWinner = (board) => {
        for (let pattern of winnerPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                setGameOver(true);
                return;
            }
        }

        if (!board.includes('')) {
            setWinner('Tie'); // In case of a tie
            setGameOver(true);
        }
    };

    // Reset the game
    const resetGame = () => {
        setBoard(Array(9).fill(''));
        setTurnO(true);
        setWinner(null);
        setGameOver(false);
    };

    return (
        <div className="game-container">
            <div className="board">
                {board.map((value, index) => (
                    <div key={index} className="box" onClick={() => handleClick(index)}>
                        {value}
                    </div>
                ))}
            </div>

            {winner && (
                <div className="msg-container">
                    <p>{winner === 'Tie' ? 'It\'s a Tie!' : `Congratulations! Winner is ${winner}`}</p>
                </div>
            )}

            <button className="newbtn" onClick={resetGame}>
                New Game
            </button>
            <button className="resetbtn" onClick={resetGame}>
                Reset Game
            </button>
        </div>
    );
};

export default Sample;
