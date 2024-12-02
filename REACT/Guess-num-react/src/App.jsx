import React, { useState } from 'react'

export default function App() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [gameOver, setGameOver] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = (e) => {
    e.preventDefault();
    const num = parseInt(guess);

    if (isNaN(num)) {
      setMessage('Please enter valid number');
      return;
    }

    if (num > randomNumber) {
      setMessage('Too High!');
    }
    else if (num < randomNumber) {
      setMessage('Too Low!');
    }
    else {
      setMessage('Congrats you win 🎉');
      setGameOver(true);
    }

    setGuesses([...guesses, num]);
    setGuess('');
  };

  const resetGame = () => {
    setRandomNumber(generateRandomNumber());
    setGuesses([]);
    setMessage('');
    setGuess('');
    setGameOver(false);
  };

  return (
    <div className='main'>
      <h4>Guess the Number</h4>
      <form onSubmit={handleGuess}>
        <input type="number"
          placeholder='Enter number'
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          disabled={gameOver}
        />
        <div className="btns">
          <button className='btn1' type='submit' disabled={gameOver}>SUBMIT</button>
          {gameOver && <button onClick={resetGame} className='btn1'>Reset-Game</button>}
        </div>
        <p>{message}</p>
        <p>Your Guesses: {guesses.join(',')}</p>

      </form>


    </div>
  )
}

