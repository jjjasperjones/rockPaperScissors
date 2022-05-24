//Assisgning icons to id to add event listners
const choiceRock = document.querySelector('#rock');
const choicePaper = document.querySelector('#paper');
const choiceScissors = document.querySelector('#scissors');

//Delcaring other buttons
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
        if (yourScore === 5 || pcScore === 5) {
            if (yourScore > pcScore) {
            alert("You Win! Let's Party! :)");
            } else if (pcScore > yourScore) {
            alert("You Lost! Party Is Over! :(");
            } else if (pcScore === yourScore) {
            alert("Game Was A Tie. Try Again");
            }
            
            restartGame();
            return;
        }
    };

//Restart game functioon
function restartGame(){
    window.location.reload(true);
}

//Update scores function
function updateScore(){
    myPoint.innerHTML = yourScore;
    pcPoint.innerHTML = pcScore;
}

function scoreMessages(scoreMessage){

    scoreBoardMsg.textContent = scoreMessage;    
}

//Play rock paper scissors game
function rockPaperScissors(yourChoice, pcChoice){
    yourChoice = this.dataset.id;
    pcChoice = pcChoices();

    console.log(yourChoice);
    console.log(pcChoice);

//    console.log(yourScore);
//    console.log(pcScore);


    if (yourScore < 5 && pcScore < 5 ) {
    if (yourChoice === pcChoice){
        yourScore += 0;
        scoreMessage = 'It\'s a tie';
        scoreMessages(scoreMessage);       
        //console.log(scoreMessage);
        //let itsDraw = 'it\'s a tie';
        //console.log(itsDraw);
        //let scoreboard = `Your Score = ${yourScore} : Pc Score = ${pcScore}`;
        //console.log(scoreboard);
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
                //console.log(youWin);
                //let scoreboard = `Your Score = ${yourScore} : Pc Score = ${pcScore}`;
                //console.log(scoreboard);
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
                    //youLose = `You Lose! ${pcChoice} beats ${yourChoice}`;
                    //console.log(youLose); 
                    //let scoreboard = `Your Score = ${yourScore} : Pc Score = ${pcScore}`; 
                    //console.log(scoreboard);
                    updateScore();
                    endGame();
                } 
    }

}


choiceRock.addEventListener('click', rockPaperScissors);
choicePaper.addEventListener('click', rockPaperScissors);
choiceScissors.addEventListener('click', rockPaperScissors);
restart.addEventListener('click', restartGame);