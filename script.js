let playerChoice = prompt("So what shall it be? Rock, Paper or Scissor?");
console.log("PC", playerChoice);
let getComputerRandom = Math.floor(Math.random() * 3 + 1);
console.log("GR", getComputerRandom);
//let CompChoice = Computer
//console.log('CC', CompChoice);
let compChoice;
function computerChoice() {
  if (getComputerRandom === 1) compChoice = "Rock";
  else if (getComputerRandom === 2) compChoice = "Paper";
  else if (getComputerRandom === 3) compChoice = "Scissor";
 
};
//let computerChoice = Computer

//let compChoice = computerChoice();
 //console.log('CC', computerChoice());
 computerChoice();
console.log('ccc',compChoice);
