let playerName;
let playerScore = 0;
let computerScore = 0;
let round = 1;
let gameEnded = false; // Flag to indicate if the game has ended

function startGame() {
  playerName = document.getElementById('player-name').value;
  document.getElementById('player-info').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  updateRoundCounter();
}

function updateRoundCounter() {
  document.getElementById('round-counter').textContent = `Round ${round}`;
}

function playRound(playerChoice) {
  if (gameEnded) return; // If the game has ended, do nothing

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = getResult(playerChoice, computerChoice);
  displayResult(playerChoice, computerChoice, result);
  updateScore(result);
  round++;

  if (round > 5) {
    endGame();
    gameEnded = true; // Set the gameEnded flag to true
  } else {
    updateRoundCounter();
  }
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function displayResult(playerChoice, computerChoice, result) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p>${playerName} chose ${playerChoice}</p>
    <p>Computer chose ${computerChoice}</p>
    <p>${getResultMessage(result)}</p>
  `;
}

function getResultMessage(result) {
  if (result === 'win') {
    return 'You win!';
  } else if (result === 'lose') {
    return 'You lose!';
  } else {
    return 'It\'s a tie!';
  }
}

function updateScore(result) {
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function endGame() {
  document.getElementById('game-over').style.display = 'block';
  const winner = playerScore > computerScore ? playerName : 'Computer';
  document.getElementById('winner').textContent = `${winner} wins!`;
  let message;
  if (playerScore > computerScore) {
    const winMessages = ['Congratulations!', 'You did great!'];
    message = winMessages[Math.floor(Math.random() * winMessages.length)];
  } else if (playerScore < computerScore) {
    message = 'Better luck next time!';
  } else {
    message = 'Try again soon!';
  }
  document.getElementById('message').textContent = message;

  // Disable buttons for choosing 'rock', 'paper', or 'scissors'
  const choices = document.querySelectorAll('.choice');
  choices.forEach(choice => {
    choice.disabled = true;
  });
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  gameEnded = false; // Reset the gameEnded flag
  document.getElementById('player-info').style.display = 'block';
  document.getElementById('game').style.display = 'none';
  document.getElementById('game-over').style.display = 'none';
  document.getElementById('player-score').textContent = '0';
  document.getElementById('computer-score').textContent = '0';

  // Enable buttons for choosing 'rock', 'paper', or 'scissors'
  const choices = document.querySelectorAll('.choice');
  choices.forEach(choice => {
    choice.disabled = false;
  });
}