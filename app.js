//Easter Egg for programmers
console.log("Welcome in my little game, enjoy it!");

//Game Variables
let userScore = 0;
let computerScore = 0;
const userScore_Span = document.getElementById("user-score");
const computerScore_Span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".results > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const messageAboutResult = document.getElementById("action-message");

//Computer random choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win() {
  userScore++;
  userScore_Span.innerHTML = userScore;
  computerScore_Span.innerHTML = computerScore;
  result.innerHTML = "USER win!";
}

function lose() {
  computerScore++;
  computerScore_Span.innerHTML = computerScore;
  userScore_Span.innerHTML = userScore;
  result.innerHTML = "USER lose!";
}

function remis() {
  userScore_Span.innerHTML = userScore;
  computerScore_Span.innerHTML = computerScore;
  result.innerHTML = "Remis!";
}

//Game logic
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win();
      break;
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      lose();
      break;
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      remis();
      break;
  }
  messageAboutResult.innerHTML = "Comp: " + computerChoice + " | " + "User: " + userChoice;
}

//Start game function when you click your choice
rock.addEventListener("click", function () {
  game("rock");
});

paper.addEventListener("click", function () {
  game("paper");
});

scissors.addEventListener("click", function () {
  game("scissors");
});

//Footer current Date
const today = new Date();
const year = today.getUTCFullYear();
document.getElementById("current-date").innerHTML = year;
