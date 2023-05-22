let playerChoice = '';
let compChoice = '';
let result = '';
let playerScore = 0;
let computerScore = 0;
let tie = 0;
let round = 0;
let winner = '';
let remove = false;
let win;

function computerChoice() {
  let getComputerRandom = Math.floor(Math.random() * 3 + 1);
  if (getComputerRandom === 1) compChoice = "rock";
  else if (getComputerRandom === 2) compChoice = "paper";
  else if (getComputerRandom === 3) compChoice = "scissors";
}

function playGame() {
  computerChoice();
  ("PC", playerChoice, "cc", compChoice);
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
  display();
  playAgain();
}

function display() {
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
  //console.log('remove', remove);
};

function declareWinner() {
  if (playerScore > computerScore)
    winner = "Congratulations!  You have represented humanity well.";
  else
    winner =
      "This is unfortunate, AI is one step closer to becoming the overlords of humanity.";
  h1 = document.createElement('h1');
  h1.innerText = winner;
  document.body.appendChild(h1);
  win = h1;
  ('win', win);
  ("w", winner);
  remove = true;
  ('remove', remove);
  if (remove) {
    removeClickListeners();
  }
}
function playAgain() {
  if (playerScore >= 5 || computerScore >= 5) {
    declareWinner();
  }
};

function reset() {
  playerScore = 0;
  computerScore = 0;
  tie = 0;
  round = 0;
  remove = false
  result = '';
  if (win) {
    win.remove();
  }
  btns.forEach((btn) => {
    btn.addEventListener('click', clickHandler);
  });
  display();
  //console.log('clicked', result);
};

const clear = document.querySelector("#reset");
clear.addEventListener('click', reset);

function clickHandler(event) {
  playerChoice = event.target.id;
  playGame(playerChoice);
  //console.log('btn clicked', playerChoice);
}

const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
  btn.addEventListener('click', clickHandler);
});

function removeClickListeners() {
  btns.forEach(btn => {
    btn.removeEventListener('click', clickHandler)
    //console.log('RCE?');
  });
}
