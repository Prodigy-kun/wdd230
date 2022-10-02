'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
let highScore = 0
document.querySelector('.check').addEventListener('click',
    function () {
        let guessed = Number(document.querySelector('.guess').value);
        // console.log(secretNumber)
        document.querySelector('.guess').focus()
        if (score > 1) {
            if (guessed) {
                if (guessed === secretNumber) {
                    document.querySelector('.message').textContent = 'Good Job, you guessed it!';
                    document.querySelector('.number').textContent = secretNumber;
                    document.querySelector('body').style.backgroundColor = '#60b347'

                    document.querySelector('.number').style.width = '30rem'
                    // highScore = score
                    // document.querySelector('.highscore').textContent = highScore
                    if (score > highScore) {
                        highScore = score
                        document.querySelector('.highscore').textContent = highScore
                        // score = 20

                    } else {
                        highScore = highScore
                        document.querySelector('.highscore').textContent = highScore
                    }
                } else if (guessed > secretNumber) {
                    document.querySelector('.message').textContent = 'Too high';
                    score--;
                    document.querySelector('.score').textContent = score;
                } else if (guessed < secretNumber) {
                    document.querySelector('.message').textContent = 'Too low';
                    score--;
                    document.querySelector('.score').textContent = score;
                }
            } else {
                document.querySelector('.message').textContent = 'Input a number';
            }
        } else {
            document.querySelector('.message').textContent = 'You lost';
            document.querySelector('.score').textContent = 0;
        }
    })
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.score').textContent = 20
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value = ''
    document.querySelector('.guess').focus()

})