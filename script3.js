let playerChoice;
let compChoice;
let result;
let playerScore = 4;
let computerScore = 4;
let round = 0;
let winner;
// Can I combine random with RPS?
let getComputerRandom = Math.floor(Math.random() * 3 + 1);
console.log("GR", getComputerRandom);


function computerChoice() {
  if (getComputerRandom === 1) compChoice = "rock";
  else if (getComputerRandom === 2) compChoice = "paper";
  else if (getComputerRandom === 3) compChoice = "scissors";
}

// Need to get computerChoice to automatically call, Why cant I fold it into compChoice?
computerChoice();
console.log("ccc", compChoice);

function playGame() {
    playerChoice = prompt("So what shall it be? Rock, Paper or Scissors?")
  if (playerChoice === compChoice)
    result = "This round is a tie.  Give it another shot.",
      (round = round + 1);
     else if (
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "scissors" && compChoice === "paper") || (playerChoice === "paper" && compChoice === "rock"))
    (result = "You have triumphed in this round. Go again!"),
      (playerScore = playerScore + 1),
      (round = round + 1);
     else (result =
      "The coming AI apocalypse is showing its benevolence.  Go again!"),
      (computerScore = computerScore + 1),
      (round = round + 1);
      declareWinner();
}
console.log("PC", playerChoice);
function declareWinner() {
  if (playerScore > computerScore)
    winner = "Congratulations!  You have represented humanity well.";
  else
    winner =
      "This is unfortunate, AI is one step closer to becoming the overlords of humanity.";
  console.log("w", winner);
}
//playGame();
function playAgain() {
  if (playerScore < 5 && computerScore < 5) playGame();
  else declareWinner();
}
playAgain();
console.log('pc-', playerChoice);
console.log("PG", playerScore, computerScore);
console.log("r-", result, "ps", playerScore, "cs", computerScore, "r", round);