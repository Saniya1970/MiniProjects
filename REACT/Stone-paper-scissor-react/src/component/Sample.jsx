import React, { useState } from "react";

const RockPaperScissors = () => {
    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);
    const [msg, setMsg] = useState("");
    const [msgColor, setMsgColor] = useState("");

    const genCompChoice = () => {
        const options = ["rock", "paper", "scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    };

    const drawGame = () => {
        setMsg("The Game was a draw");
        setMsgColor("#081b31");
    };

    const showWinner = (userWin, userChoice, compChoice) => {
        if (userWin) {
            setUserScore(userScore + 1);
            setMsg(`You win! Your ${userChoice} beats ${compChoice}`);
            setMsgColor("green");
        } else {
            setCompScore(compScore + 1);
            setMsg(`You lose! ${compChoice} beats your ${userChoice}`);
            setMsgColor("red");
        }
    };

    const playGame = (userChoice) => {
        const compChoice = genCompChoice();

        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compChoice === "scissors" ? false : true;
            } else {
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
    };

    return (
        <div>
            <h2>Rock Paper Scissors</h2>
            <div>
                <p>User Score: {userScore}</p>
                <p>Computer Score: {compScore}</p>
            </div>
            <div id="msg" style={{ backgroundColor: msgColor }}>
                {msg}
            </div>
            <div>
                <button onClick={() => playGame("rock")} id="rock">
                    Rock
                </button>
                <button onClick={() => playGame("paper")} id="paper">
                    Paper
                </button>
                <button onClick={() => playGame("scissors")} id="scissors">
                    Scissors
                </button>
            </div>
        </div>
    );
};

export default RockPaperScissors;
