let humanScore = 0;
let computerScore = 0;
let gameOver = false;
let maxScore = 5;

const choiceButtons = document.querySelectorAll('.choice-btn');
const humanScoreElement = document.getElementById('humanScore');
const computerScoreElement = document.getElementById('computerScore');
const roundResultElement = document.getElementById('roundResult');
const finalResultElement = document.getElementById('finalResult');
const resetButton = document.getElementById('resetBtn');
const historyList = document.getElementById('historyList');

function roundNumberPrompt() {
  maxScore = prompt("How many rounds would you like to play?", "5");
  return;
}
roundNumberPrompt();

choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!gameOver) {
      const humanChoice = button.dataset.choice;
      playRound(humanChoice);
    }
  });
});

    
resetButton.addEventListener('click', resetGame);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function playRound(humanChoice) {
  if (gameOver) return;
  const computerChoice = getComputerChoice();

  let result;
  

  if (humanChoice === "rock" && computerChoice === "scissors" || 
      humanChoice === "scissors" && computerChoice === "paper" || 
      humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    roundResultElement.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    // return true;
    result = 'win';
  } else if (humanChoice === "rock" && computerChoice === "rock" || 
      humanChoice === "scissors" && computerChoice === "scissors" || 
      humanChoice === "paper" && computerChoice === "paper") {
    roundResultElement.textContent = "Tie! Replaying the round...";
    // return false;
    result = 'tie';
  } else {
    computerScore++;
    roundResultElement.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    result = 'lose';
  }

  addToHistory(humanChoice, computerChoice, result);

  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
  if (humanScore + computerScore >= maxScore) {
    gameOver = true;
    if (humanScore > computerScore) {
      finalResultElement.textContent = "Congratulations! You won the game!";
    } else {
      finalResultElement.textContent = "Game over! Computer won the game.";
    }
  }
}

function addToHistory(humanChoice, computerChoice, result) {
  const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
  };
  
  const resultText = {
    win: "You won",
    lose: "You lost",
    tie: "Tie"
  };
  
  const listItem = document.createElement('li');
  listItem.className = 'history-item';
  listItem.textContent = `${emojis[humanChoice]} vs ${emojis[computerChoice]} - ${resultText[result]}`;
  historyList.prepend(listItem);
}


function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
  roundResultElement.textContent = '';
  finalResultElement.textContent = '';
  historyList.innerHTML = '';
}