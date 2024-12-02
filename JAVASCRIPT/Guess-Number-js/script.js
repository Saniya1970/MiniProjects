//IIFE instantly invoked function for hiding block scope variable
; (function () {
    const userInput = document.querySelector('.user-input');
    const form = document.querySelector('form');
    const result = document.querySelector('.result');
    const allgueses = document.querySelector('.all-guesses');
    const submitBtn = document.querySelector('.submit');
    const startGameBtn = document.querySelector('.start-game');

    const allguesArray = []
    let randomNumber = Math.round(Math.random() * 100)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const userInputValue = parseInt(userInput.value)
        if (userInputValue > randomNumber) {
            result.innerText = 'Too High !';
        }
        else if (userInputValue < randomNumber) {
            result.innerText = 'Too Low';
        }
        else {
            result.innerText = 'Congrats you win 😊';
            startGameBtn.disabled = false
            submitBtn.disabled = true
        }

        form.reset();

        allguesArray.push(userInputValue);
        allgueses.innerText = 'Your Guesses:' + allguesArray.join(',');
    })

    startGameBtn.addEventListener('click', () => {
        startGameBtn.disabled = true
        submitBtn.disabled = false
        allgueses.innerText = ''
        result.innerText = ''
        randomNumber = Math.round(Math.random() * 100)
    })
})()