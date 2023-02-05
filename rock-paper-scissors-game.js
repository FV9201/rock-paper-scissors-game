function game() {
  function getComputerChoice() {
    return Math.floor(Math.random() * 3);
  }

  function playRound() {
    function convertChoice(choice) {
      let i = 0;
      let encontre = false;
      while (i < choices.length && !encontre) {
        if (choice == choices[i]) {
          choice = i;
          encontre = true;
        } else {
          i++;
        }
      }

      return choice;
    }

    playerChoice = playerChoice.toLowerCase();
    playerChoice = convertChoice(playerChoice);
    if (playerChoice == computerChoice) {
      return null;
    } else if (
      playerChoice - computerChoice == 1 ||
      playerChoice - computerChoice == -(choices.length - 1)
    ) {
      return 1;
    } else {
      return 0;
    }
  }

  function updateScore() {
    if (roundWinner === 1) {
      playerScore++;
    } else if (roundWinner === 0) {
      computerScore++;
    } else {
      playerScore++;
      computerScore++;
    }
  }

  function showRoundWinner() {
    let message = [
      `You Lose! ${choices[computerChoice]} beats ${choices[playerChoice]}`,
      `You Win! ${choices[playerChoice]} beats ${choices[computerChoice]}`,
    ];

    if (roundWinner !== null) {
      console.log(message[roundWinner]);
    } else {
      console.log("Tie!");
    }
  }

  function showGameWinner() {
    function returnGameWinner() {
      return playerScore > computerScore
        ? 1
        : computerScore > playerScore
        ? 0
        : null;
    }

    let gameWinner = returnGameWinner();
    let message = [
      `You Lose the game... better luck next time!`,
      `You Win the game, congratulations!`,
    ];

    if (gameWinner !== null) {
      console.log(message[gameWinner]);
    } else {
      console.log("Nobody won the game, it's a tie!");
    }
  }

  let choices = ["rock", "paper", "scissors"];
  let playerScore = 0;
  let computerScore = 0;
  let roundWinner;
  let playerChoice;
  let computerChoice;

  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Enter your choice: Rock | Paper | Scissors");
    computerChoice = getComputerChoice();
    roundWinner = playRound();
    updateScore();
    showRoundWinner();
  }
  showGameWinner();
}

game();
