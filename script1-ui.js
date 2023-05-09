let playerChoice;
let compChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let tie = 0;
let round = 0;
let winner;

function computerChoice() {
  let getComputerRandom = Math.floor(Math.random() * 3 + 1);
  if (getComputerRandom === 1) compChoice = "rock";
  else if (getComputerRandom === 2) compChoice = "paper";
  else if (getComputerRandom === 3) compChoice = "scissors";
}

function playGame() {
  playerChoice = prompt(
    "So what shall it be? Rock, Paper or Scissors?"
  ).toLowerCase();
  //if (playerChoice !== 'rock'), || (playerChoice !== 'paper') || (playerChoice !== 'scissors'); prompt("Kindly make a selection of the choices given...")
  computerChoice();
  console.log("PC", playerChoice, "ccc", compChoice);
  if (playerChoice === compChoice)
    (result = "This round is a tie.  Give it another shot."),
      (tie = tie + 1),
      (round = round + 1);
  else if (
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "scissors" && compChoice === "paper") ||
    (playerChoice === "paper" && compChoice === "rock")
  )
    (result = "You have triumphed in this round. Go again!"),
      (playerScore = playerScore + 1),
      (round = round + 1);
  else
    (result =
      "The coming AI apocalypse is showing its benevolence.  Go again!"),
      (computerScore = computerScore + 1),
      (round = round + 1);
  console.log(
    "r-",
    result,
    "ps",
    playerScore,
    "cs",
    computerScore,
    "t",
    tie,
    "r",
    round
  );
  playAgain();
}

function declareWinner() {
  if (playerScore > computerScore)
    winner = "Congratulations!  You have represented humanity well.";
  else
    winner =
      "This is unfortunate, AI is one step closer to becoming the overlords of humanity.";
  console.log("w", winner);
}
function playAgain() {
  if (playerScore < 5 && computerScore < 5) playGame();
  else declareWinner();
}
playGame();
