import React, { useState } from 'react';
import Stone from './img/rock.png';
import Paper from './img/paper.png';
import Scissor from './img/scissors.png';


export default function App() {

  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [msg, setMsg] = useState('');
  const [color, setColor] = useState('');

  const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };

  const drawGame = () => {
    setMsg('The Game was Draw');
    setColor('blue');
  }

  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      setUserScore(userScore + 1);
      setMsg(`You win your ${userChoice} beats computer's ${compChoice} `);
      setColor('green');
    }
    else {
      setCompScore(compScore + 1);
      setMsg(`You loss ! computer's ${compChoice} beats your ${userChoice} `);
      setColor('red');
      console.log(compChoice);
    }
  };

  const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
      drawGame();
    }
    else {
      let userWin = true;
      if (userChoice === "stone") {
        userWin = compChoice === "paper" ? false : true;
      }
      else if (userChoice === "paper") {
        userWin = compChoice === "scissor" ? false : true;
      }
      else {
        userWin = compChoice === "stone" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }

  };


  return (
    <div className='main'>
      <h1>Stone Paper Scissor</h1>
      <div className='box'>
        <div className='box1' onClick={() => playGame("stone")} ><img src={Stone} label='stone' /></div>
        <div className='box1' onClick={() => playGame("paper")}><img src={Paper} label='paper' /></div>
        <div className='box1' onClick={() => playGame("scissor")}><img src={Scissor} label='scissor' /></div>

      </div>

      <div className="msg-container">
        <div className="score">
          <p>Youre score: {userScore}</p>
          <p>Comp score: {compScore}</p>
        </div>
        <div className='msg'
          style={{ color: color }}>
          {msg}
        </div>

      </div>

    </div>
  )
};
