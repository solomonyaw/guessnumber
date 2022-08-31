'use strict';

// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
//display message function
    function displayMessage(message)
    {
        document.querySelector('.message').textContent = message;
    }


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    
  //When there is no input
  if (!guess) {
      displayMessage('No number! ⛔');
  }
   
  //When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number! 🥳');
    document.querySelector('.output').textContent = 'You won! 🥳';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore)
      {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
     }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too Low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

/*   //When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } */
 });

//Reset Game
document.querySelector('.again').addEventListener('click', function () {
 displayMessage('Start guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  score = 10;
  document.querySelector('.score').textContent = 10;
  document.querySelector('.output').textContent = 'Guess My Number!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
   secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '10rem';
});
