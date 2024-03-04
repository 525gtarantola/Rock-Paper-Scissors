let playerName;
let playerScore = 0;
let computerScore = 0;
let round = 1;
let gameEnded = false; // Flag to indicate if the game has ended

// Function to start the game
function startGame() {
  playerName = document.getElementById('player-name').value;
  if (!playerName) {
    alert('Please enter your name to start the game.');
    return;
  }
  document.getElementById('player-info').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  document.getElementById('score').style.display = 'block'; // Show the score
  updateRoundCounter();
}

// Function to update the round counter
function updateRoundCounter() {
  document.getElementById('round-counter').textContent = `Round ${round}`;
}

// Function to play a round of the game
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

// Function to determine the result of the round
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

// Function to display the result of the round
function displayResult(playerChoice, computerChoice, result) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p>${playerName} chose ${playerChoice}</p>
    <p>Computer chose ${computerChoice}</p>
    <p>${getResultMessage(result)}</p>
  `;
}

// Function to get the result message
function getResultMessage(result) {
  if (result === 'win') {
    return 'You win!';
  } else if (result === 'lose') {
    return 'You lose!';
  } else {
    return 'It\'s a tie!';
  }
}

// Function to update the score
function updateScore(result) {
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

// Function to end the game
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
  gameEnded = false; 
  document.getElementById('player-info').style.display = 'block';
  document.getElementById('game').style.display = 'none';
  document.getElementById('game-over').style.display = 'none';
  document.getElementById('player-score').textContent = '0';
  document.getElementById('computer-score').textContent = '0';
  document.getElementById('player-name').value = ''; // Resets player name input
  document.getElementById('results').innerHTML = ''; // Clears previous results
  document.getElementById('score').style.display = 'none'; // Hides the score

  // Enable buttons for choosing 'rock', 'paper', or 'scissors'
  const choices = document.querySelectorAll('.choice-button');
  choices.forEach(choice => {
    choice.disabled = false;
  });
}