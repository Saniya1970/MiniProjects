import React, { useState } from 'react'

export default function Practice() {

    const [msg, setMsg] = useState("");
    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    const genCompChoice = () => {
        const options = ["stone", "paper", "scissor"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    }

    const drawGame = () => {
        setMsg("The game was draw");
    }

    const showWinner = (userWin) => {
        if (userWin) {
            setUserScore(userScore + 1);
            setMsg("YOU WIN!");
        }
        else {
            setCompScore(compScore + 1);
            setMsg("YOU LOSS!");
        }
    }

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
            showWinner(userWin);
        }

    }

    return (
        <div>
            <button onClick={() => playGame("stone")} id='stone'>Stone</button>

            <button onClick={() => playGame("paper")} id='paper'>Paper</button>

            <button onClick={() => playGame("scissor")} id='scissor'>Scissor</button>

            <div>
                <p>{msg}</p>
            </div>
            <div>
                <p>YOU:{userScore}</p>
                <p>COMP:{compScore}</p>
            </div>

        </div>
    )
}
