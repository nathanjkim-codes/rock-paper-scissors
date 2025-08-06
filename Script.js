/*
1.FUNCTION getComputerChoice
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
  let randomnum = Math.floor(Math.random() * 3);
  if (randomnum === 0) {
    return "rock";
  } else if (randomnum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

/*
2.FUNCTION getHumanChoice
  PROMPT user to enter "rock", "paper", or "scissors"
  STORE user's input as choice
  REMOVE whitespace from the beginning and end of choice
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
