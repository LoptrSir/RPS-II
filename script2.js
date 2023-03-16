let playerChoice = prompt("So what shall it be? Rock, Paper or Scissors?");
let compChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let round = 0;

console.log("PC", playerChoice);

// Can I combine random and assign it to RPS in one function without it being messy/convoluted?
let getComputerRandom = Math.floor(Math.random() * 3 + 1);
console.log("GR", getComputerRandom);
//let CompChoice = Computer
//console.log('CC', CompChoice);

function computerChoice() {
  if (getComputerRandom === 1) compChoice = "rock";
  else if (getComputerRandom === 2) compChoice = "paper";
  else if (getComputerRandom === 3) compChoice = "scissors";
}
//let computerChoice = Computer

//let compChoice = computerChoice();
//console.log('CC', computerChoice());

// Need to get computerChoice to automatically call, Why cant I fold it into compChoice?
computerChoice();
console.log("ccc", compChoice);

function playGame(){
    if (playerChoice === compChoice) result = 'This round is a tie.  Give it another shot.', round = round +1;
   
    else if (((playerChoice === 'rock') && (compChoice === 'scissors')) || ((playerChoice === 'scissors') && (compChoice === 'paper')) || ((playerChoice === 'paper') && (compChoice === 'rock'))) result = 'You have triumphed in this round. Go again!', playerScore = playerScore +1, round = round +1;
    else result = 'The coming AI apocalypse is showing its benevolence.  Go again!', computerScore = computerScore +1, round = round +1;
}
playGame();
console.log('pc-', playerChoice);
console.log('r-', result, 'ps', playerScore,'cs', computerScore, 'r', round);
