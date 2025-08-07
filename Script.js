/*
Step 1: FUNCTION getComputerChoice
  GENERATE random number between 0 and 2
  IF number is 0 THEN
    RETURN "rock"
  ELSE IF number is 1 THEN
    RETURN "paper"
  ELSE
    RETURN "scissors"
END FUNCTION
*/

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

/*
Step 2: FUNCTION getHumanChoice
  PROMPT user to enter "rock", "paper", or "scissors"
  STORE user's input as choice
  CONVERT choice to lowercase
  RETURN choice
END FUNCTION
*/

function getHumanChoice() {
  let choice = prompt("rock, paper, or scissors?");
  return choice.trim().toLowerCase();
}

console.log("Computer chose:", getComputerChoice());
console.log("Human chose:", getHumanChoice());

/*
Step 4: Declare the players score variables
*/

let humanScore = 0;
let computerScore = 0;

/*
Step 5: Compare human and computer choice  
If same → tie  
If human wins → human score +1  
Else → computer score +1
*/

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
