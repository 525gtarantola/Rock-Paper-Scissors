let playerName;
let playerScore = 0;
let computerScore = 0;
let round = 1;
<<<<<<< HEAD
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
=======

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
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = getResult(playerChoice, computerChoice);
  displayResult(playerChoice, computerChoice, result);
  updateScore(result);
  round++;

  if (round > 5) {
    endGame();
  } else {
    updateRoundCounter();
  }
}

>>>>>>> 118663ee379d0773cf68a1d0fa4f81859b8ac7be
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

<<<<<<< HEAD
// Function to display the result of the round
=======
>>>>>>> 118663ee379d0773cf68a1d0fa4f81859b8ac7be
function displayResult(playerChoice, computerChoice, result) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p>${playerName} chose ${playerChoice}</p>
    <p>Computer chose ${computerChoice}</p>
    <p>${getResultMessage(result)}</p>
  `;
}

<<<<<<< HEAD
// Function to get the result message
=======
>>>>>>> 118663ee379d0773cf68a1d0fa4f81859b8ac7be
function getResultMessage(result) {
  if (result === 'win') {
    return 'You win!';
  } else if (result === 'lose') {
    return 'You lose!';
  } else {
    return 'It\'s a tie!';
  }
}

<<<<<<< HEAD
// Function to update the score
=======
>>>>>>> 118663ee379d0773cf68a1d0fa4f81859b8ac7be
function updateScore(result) {
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

<<<<<<< HEAD
// Function to end the game
=======
>>>>>>> 118663ee379d0773cf68a1d0fa4f81859b8ac7be
function endGame() {
  document.getElementById('game-over').style.display = 'block';
  const winner = playerScore > computerScore ? playerName : 'Computer';
  document.getElementById('winner').textContent = `${winner} wins!`;
<<<<<<< HEAD
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
=======
  const messages = ['Congratulations!', 'Better luck next time.', 'You did great!', 'Try again soon.'];
  const message = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('message').textContent = message;
>>>>>>> 118663ee379d0773cf68a1d0fa4f81859b8ac7be
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
<<<<<<< HEAD
  gameEnded = false; 
=======
>>>>>>> 118663ee379d0773cf68a1d0fa4f81859b8ac7be
  document.getElementById('player-info').style.display = 'block';
  document.getElementById('game').style.display = 'none';
  document.getElementById('game-over').style.display = 'none';
  document.getElementById('player-score').textContent = '0';
  document.getElementById('computer-score').textContent = '0';
<<<<<<< HEAD
  document.getElementById('player-name').value = ''; // Resets player name input
  document.getElementById('results').innerHTML = ''; // Clears previous results
  document.getElementById('score').style.display = 'none'; // Hides the score

  // Enable buttons for choosing 'rock', 'paper', or 'scissors'
  const choices = document.querySelectorAll('.choice-button');
  choices.forEach(choice => {
    choice.disabled = false;
  });
=======
>>>>>>> 118663ee379d0773cf68a1d0fa4f81859b8ac7be
}