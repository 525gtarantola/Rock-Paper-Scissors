let playerName;
let playerScore = 0;
let computerScore = 0;
let round = 1;

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
  const messages = ['Congratulations!', 'Better luck next time.', 'You did great!', 'Try again soon.'];
  const message = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('message').textContent = message;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  document.getElementById('player-info').style.display = 'block';
  document.getElementById('game').style.display = 'none';
  document.getElementById('game-over').style.display = 'none';
  document.getElementById('player-score').textContent = '0';
  document.getElementById('computer-score').textContent = '0';
}