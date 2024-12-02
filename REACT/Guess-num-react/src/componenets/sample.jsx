import React, { useState } from 'react'

export default function sample() {
    const [guess, setGuess] = useState('');
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [guesses, setGuesses] = useState([])
    const [message, setMessage] = useState('');
    const [gameOver, setGameOver] = useState(false);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1
    }

    const handleGuess = (e) => {
        e.preventDefault();
        const num = parseInt(guess);

        if (isNaN(num)) {
            setMessage("Not a valid number")
            return
        }
        if (num > randomNumber) {
            setMessage('Too high')
        }
        else if (num < randomNumber) {
            setMessage('Too Low')
        } else {
            setMessage('You win')
            setGameOver(true)
        }
        setGuesses([...guesses, num])
        setGuess('')
    }

    const resetGame = () => {
        setGuess('')
        setGuesses([])
        setRandomNumber(generateRandomNumber())
        setMessage('')
        setGameOver(false)
    }

    return (
        <div className='main'>
            <h2>Guess Random Number</h2>
            <form onSubmit={handleGuess}>
                <label>Enter Any Number :</label>
                <input
                    type="number"
                    placeholder='Enter the number'
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    disabled={gameOver}
                />
                <div className="btns">
                    <button type='submit' disabled={gameOver} className='btn1'>Submit</button>
                    {gameOver && <button onClick={resetGame} className='btn1'>Reset</button>}
                </div>
                <p>{message}</p>
                <p>Your guesses:{guesses.join(',')}</p>
            </form>
        </div>
    )
}
