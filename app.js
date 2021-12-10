//Easter Egg for programmers
console.log('Welcome in my little game, enjoy it!');

//Game Variables
const userScore = 0;
const computerScore = 0;
const userScore_Span = document.getElementById('user-score');
const computerScore_Span = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.results')
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//Computer random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function game(userChoice) {
    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        console.log('remis')
    } else if (userChoice != computerChoice) {
        console.log('some result')
    }
};

//Start game function when you click your choice
rock.addEventListener('click', function() {
    game('rock');
});

paper.addEventListener('click', function() {
    game('paper');
});

scissors.addEventListener('click', function() {
    game('scissors');
});

//Footer current Date
const today = new Date();
const year = today.getUTCFullYear();
document.getElementById('current-date').innerHTML = year;

