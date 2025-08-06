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

function getHumanChoice() {
  let choice = prompt("rock, paper, or scissors?");
  return choice.trim().toLowerCase();
}

console.log("Computer chose:", getComputerChoice());
console.log("Human chose:", getHumanChoice());
