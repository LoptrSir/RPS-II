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
  //console.log('pc1', playerChoice);

  computerChoice();
  console.log("PC", playerChoice, "cc", compChoice);
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
      // change console logs to DOM methods

      //let results = document.querySelectorAll('.results');
      let res = document.querySelector('#res');
      res.textContent = result;
      let ps = document.querySelector('#ps');
      ps.textContent = playerScore;
      let cs = document.querySelector('#cs');
      cs.textContent = computerScore;
      let t = document.querySelector('#t');
      t.textContent = tie;
      let rds = document.querySelector('#rds');
      rds.textContent = round;
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
  //console.log('result', results);
  playAgain();
}

function declareWinner() {
  // once winner is declared display declaration and cancel eventListener
  if (playerScore > computerScore)
    winner = "Congratulations!  You have represented humanity well.";
  else
    winner =
      "This is unfortunate, AI is one step closer to becoming the overlords of humanity.";
  console.log("w", winner);
}
function playAgain() {
  if (playerScore >= 5 || computerScore >= 5) {
    declareWinner();
  }
  console.log("PA", playerScore, computerScore);
};


const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
  btn.addEventListener('click', () => (playerChoice = btn.id, playGame(playerChoice)));

  console.log('pc2', playerChoice)
});

// Stop eventlistener/display winner once winner is declared, 