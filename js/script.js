//Assisgning icons to id to add eventlistners
const choiceRock = document.querySelector('#rock');
const choicePaper = document.querySelector('#paper');
const choiceScissors = document.querySelector('#scissors');

//Delcaring other buttons and assigning tags to selectors
const restart = document.querySelector('.restart-game');
const scoreBoardMsg = document.querySelector('#score-board-msg');
const myPoint = document.querySelector('#my-point');
const pcPoint = document.querySelector('#pc-point');

// Declare scores
let yourScore = 0; 
let pcScore = 0;

//Generate computers choice by random from array of [rock, paper, scissors] = pcChoice;
function pcChoices(){
    const choiceArray = ['rock', 'paper', 'scissors'];
    pcChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return pcChoice;
    };

//End game function
function endGame(){
        //Check fo current score first
        if (yourScore === 5 || pcScore === 5) {
            //If you are crowned winner
            if (yourScore > pcScore) {
            alert("You Win! Let's Party! :)");
            //If computer is crowned winner
            } else if (pcScore > yourScore) {
            alert("You Lost! Party Is Over! :(");
            } 
            restartGame();
            return;
        }
    };

//Restart game functioon
function restartGame(){
    window.location.reload(true);
}

//Assign scores to html elements or node
function updateScore(){
    myPoint.innerHTML = yourScore;
    pcPoint.innerHTML = pcScore;
}

function scoreMessages(scoreMessage){
    //Assign scores message to html elements or node
    scoreBoardMsg.textContent = scoreMessage;    
}

//Play rock paper scissors game
function rockPaperScissors(yourChoice, pcChoice){
    yourChoice = this.dataset.id;
    pcChoice = pcChoices();

    if (yourScore < 5 && pcScore < 5 ) {
        if (yourChoice === pcChoice){
            yourScore += 0;
            scoreMessage = 'It\'s a tie';
            scoreMessages(scoreMessage);
            updateScore();    
            endGame();      
        }
    

    //if your choice wins
    else if (yourChoice === 'rock' && pcChoice === 'scissors' ||
             yourChoice === 'paper' && pcChoice === 'rock' ||
             yourChoice === 'scissors' && pcChoice === 'paper') {   
                pcScore.textContent = `${yourScore} += 0`;
                yourScore++;
                scoreMessage = `You Won! ${yourChoice} beats ${pcChoice}`;
                scoreMessages(scoreMessage);
                updateScore();
                endGame();
            }

    ////if your choice loses
    else if (yourChoice === 'rock' && pcChoice === 'paper' ||
             yourChoice === 'paper' && pcChoice === 'scissors' ||
             yourChoice === 'scissors' && pcChoice === 'rock') {
                pcScore++;
                scoreMessage = `You Lose! ${pcChoice} beats ${yourChoice}`;
                scoreMessages(scoreMessage);
                updateScore();
                endGame();
            } 
    }

}


choiceRock.addEventListener('click', rockPaperScissors);
choicePaper.addEventListener('click', rockPaperScissors);
choiceScissors.addEventListener('click', rockPaperScissors);
restart.addEventListener('click', restartGame);