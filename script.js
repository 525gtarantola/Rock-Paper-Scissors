let userWins = 0;
let computerWins = 0;
let rounds = 0;
let userName = '';

function playRound(userChoice) {
    const computerChoice = generateComputerChoice();
    displayChoices(userChoice, computerChoice);
    const result = determineWinner(userChoice, computerChoice);
    updateScore(result);
    rounds++;
    if (rounds === 5) {
        endGame();
    }
}

function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function displayChoices(userChoice, computerChoice) {
    document.getElementById('user-choice').innerText = userChoice;
    document.getElementById('computer-choice').innerText = computerChoice;
    document.getElementById('user-label').innerText = userName;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function updateScore(result) {
    if (result === 'user') {
        userWins++;
    } else if (result === 'computer') {
        computerWins++;
    }
    document.getElementById('user-wins').innerText = userWins;
    document.getElementById('computer-wins').innerText = computerWins;
}

function endGame() {
    let message;
    if (userWins > computerWins) {
        message = 'Congratulations! You win!';
    } else if (userWins < computerWins) {
        message = 'Computer wins! Better luck next time.';
    } else {
        message = 'It\'s a tie!';
    }
    document.getElementById('result').innerText = message;
    document.getElementById('rounds').innerHTML = '';
}

function resetGame() {
    userWins = 0;
    computerWins = 0;
    rounds = 0;
    userName = document.getElementById('username').value;
    document.getElementById('user-name').innerText = userName;
    document.getElementById('user-wins').innerText = '0';
    document.getElementById('computer-wins').innerText = '0';
    document.getElementById('result').innerText = '';
    document.getElementById('rounds').innerHTML = `
        <button class="btn btn-primary" onclick="playRound('rock')">Rock</button>
        <button class="btn btn-primary" onclick="playRound('paper')">Paper</button>
        <button class="btn btn-primary" onclick="playRound('scissors')">Scissors</button>
    `;
}