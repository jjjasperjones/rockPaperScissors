//Model 2

//Generate possible choices

const choiceArray = ['rock', 'paper', 'scissors'];

// Declare scores
let yourScore = 0;
let pcScore = 0;

//Function rockPaperScissors
//bassed on checking choice, computer console logs verdict.

function rockPaperScissors(){
    
    //Generate computers choice by random from array of [rock, paper, scissors] = pcChoice;

    let pcChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    
    //Request or prompt for choice and save in a variable = yourChoice;

    let yourChoice = prompt('Rock, Paper, Scissors. Whats your choice?').toLowerCase();

    //Loop untill input is valid

    while (yourChoice != 'rock' 
        && yourChoice != 'paper' 
        && yourChoice != 'scissors' ){
            alert ('Please Input a correct choice');
            yourChoice = prompt('rock, paper, scissors. Whats your choice?').toLowerCase();

};


    if (yourChoice === pcChoice){
        yourScore += 0;
        let itsDraw = 'it\'s a tie';
        console.log(itsDraw);
        let scoreboard = `Your Score = ${yourScore} : Pc Score = ${pcScore}` 
            return scoreboard;
    }
    

    //if your choice is wins

    else if (yourChoice === 'rock' && pcChoice === 'scissors' ||
            yourChoice === 'paper' && pcChoice === 'rock' ||
            yourChoice === 'scissors' && pcChoice === 'paper')
            {   
                yourScore++;
                let youWin = `You Won! ${yourChoice} beats ${pcChoice}`;
                console.log(youWin);
                let scoreboard = `Your Score = ${yourScore} : Pc Score = ${pcScore}` 
                    return scoreboard;
            }

    ////if your choice is loses

    else if (yourChoice === 'rock' && pcChoice === 'paper' ||
                yourChoice === 'paper' && pcChoice === 'scissors' ||
                yourChoice === 'scissors' && pcChoice === 'rock'){

                    pcScore++;
                    youLose = `You Lose! ${pcChoice} beats ${yourChoice}`;
                    console.log(youLose); 
                    let scoreboard = `Your Score = ${yourScore} : Pc Score = ${pcScore}` 
                        return scoreboard;
                } 
            
 

    }

    function gameOver() {
        if (yourScore > pcScore) {
            console.log("Game Over! You Win! :)");
        } else if (pcScore > yourScore) {
            console.log("Game Over! You Lost! :(");
        }
    }
    
    function startRockPaperScissors() {
        console.log(rockPaperScissors());
        if(yourScore < 5 && pcScore < 5){
            startRockPaperScissors();
        }
        else{
            gameOver();
        }
    }
    
    
    startRockPaperScissors();

//call Function rockPaperScissors();

// add function to add scores
