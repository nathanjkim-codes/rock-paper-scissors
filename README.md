# Rock-Paper-Scissors Game

## How I Made This

This is a simple Rock-Paper-Scissors game I built using JavaScript.  
The game plays 5 rounds. Each round, both the player and the computer pick either rock, paper, or scissors.

### Functions I Created

- **getComputerChoice()**  
  This function makes the computer pick rock, paper, or scissors randomly.  
  It picks a random number (0, 1, or 2) and returns the matching choice as a string.

- **getHumanChoice()**  
  This function asks the player to type rock, paper, or scissors.  
  It makes sure the input is lowercase and removes spaces around it so different capitalizations still work.

- **playRound(humanChoice, computerChoice)**  
  This function plays one round.  
  It compares the player’s choice and the computer’s choice to decide who wins.  
  If both choices are the same, it’s a tie.  
  If the player wins, their score goes up by 1. Otherwise, the computer’s score goes up.  
  It also prints out who won that round.

- **playGame()**  
  This function runs the whole game.  
  It plays 5 rounds by calling `playRound` 5 times and keeps track of the scores.  
  At the end, it announces the overall winner or if the game is tied.

---

## What I Learned

At first, I thought the game would need complicated math to figu
