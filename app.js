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

rock.addEventListener('click', function() {
    console.log('rock');
});

paper.addEventListener('click', function() {
    console.log('paper');
});

scissors.addEventListener('click', function() {
    console.log('scissors');
});

//Footer current Date
const today = new Date();
const year = today.getUTCFullYear();
document.getElementById('current-date').innerHTML = year;

