

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt("Whats your choice?", "scissors");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors" || 
      humanChoice === "scissors" && computerChoice === "paper" || 
      humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("Win!");
    return true;
  } else if (humanChoice === "rock" && computerChoice === "rock" || 
      humanChoice === "scissors" && computerChoice === "scissors" || 
      humanChoice === "paper" && computerChoice === "paper") {
    console.log("Tie! Replaying round...");
    return false;
  } else {
    computerScore++;
    console.log("Loss!");
    return true;
  }
}

function playGame(rounds) {
  
  for (let i = 0; i < rounds; i++) {
    while (true) {
      console.log(`Commencing round ${i}`);
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      if (playRound(humanChoice, computerChoice) == true) {
        break;
      }
    }
    
  }
  console.log(`Final score: Human - ${humanScore}, Computer - ${computerScore}`);
  return;
}

playGame(5);