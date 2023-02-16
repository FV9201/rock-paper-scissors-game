function startRPSGame() {
  const rockButton = document.querySelector(".rps-game__choices__rock");
  const paperButton = document.querySelector(".rps-game__choices__paper");
  const scissorsButton = document.querySelector(".rps-game__choices__scissors");
  const winnerOutput = document.querySelector(".rps-game__output__winner");
  const playerScoreOutput = document.querySelector(
    ".rps-game__output__player-score"
  );
  const computerScoreOutput = document.querySelector(
    ".rps-game__output__computer-score"
  );

  rockButton.addEventListener("click", () => {
    playGame(0);
  });

  paperButton.addEventListener("click", () => {
    playGame(1);
  });

  scissorsButton.addEventListener("click", () => {
    playGame(2);
  });

  function playGame(playerChoice) {
    function getComputerChoice() {
      return Math.floor(Math.random() * 3);
    }

    function playRound() {
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
      }
    }

    function showGameInformation() {
      function showRoundWinner() {
        const message = [
          `You Lose! ${choices[computerChoice]} beats ${choices[playerChoice]}`,
          `You Win! ${choices[playerChoice]} beats ${choices[computerChoice]}`,
        ];

        if (roundWinner !== null) {
          return message[roundWinner];
        } else {
          return "Tie!";
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
        const message = [
          `You Lose the game... better luck next time!`,
          `You Win the game, congratulations!`,
        ];

        if (gameWinner !== null) {
          return message[gameWinner];
        } else {
          return "Nobody won the game, it's a tie!";
        }
      }

      function showScore() {
        playerScoreOutput.innerHTML = `Player score: ${playerScore}`;
        computerScoreOutput.innerHTML = `Computer score: ${computerScore}`;
      }

      if (playerScore !== 5 && computerScore !== 5) {
        winnerOutput.innerHTML = showRoundWinner();
        showScore();
      } else {
        winnerOutput.innerHTML = showGameWinner();
        showScore();
        const resetButton = document.createElement("button");
        const container = document.querySelector(".rps-game");

        resetButton.classList.add("rps-game__reset-button");
        resetButton.innerHTML = "Reset";

        container.appendChild(resetButton);

        resetButton.addEventListener("click", () => {
          container.removeChild(resetButton);
          playerScore = 0;
          computerScore = 0;
          winnerOutput.innerHTML = "";
          showScore();
        });
      }
    }

    const choices = ["rock", "paper", "scissors"];
    let roundWinner;
    let computerChoice;

    if (playerScore !== 5 && computerScore !== 5) {
      computerChoice = getComputerChoice();
      roundWinner = playRound();
      updateScore();
      showGameInformation();
    }
  }

  let playerScore = 0;
  let computerScore = 0;
}

startRPSGame();
