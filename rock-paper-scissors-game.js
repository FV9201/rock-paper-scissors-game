function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
}

function convertChoice(Choice) {
  let i = 0;
  let encontre = false;
  while (i < choices.length && !encontre) {
    if (Choice == choices[i]) {
      Choice = i;
      encontre = true;
    } else {
      i++;
    }
  }

  return Choice;
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  playerChoice = convertChoice(playerChoice);
  computerChoice = convertChoice(computerChoice);
  if (playerChoice == computerChoice) {
    return "Tie!";
  } else if (
    playerChoice - computerChoice == 1 ||
    playerChoice - computerChoice == -(choices.length - 1)
  ) {
    return `You Win! ${choices[playerChoice]} beats ${choices[computerChoice]}`;
  } else {
    return `You Lose! ${choices[computerChoice]} beats ${choices[playerChoice]}`;
  }
}

let choices = ["rock", "paper", "scissors"];

console.log(playRound("rock", getComputerChoice()));
