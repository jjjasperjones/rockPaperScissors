/*//Model 2

//Generate possible choices

const choiceArray = ['rock', 'paper', 'scissors'];


//Generate computers choice by random from array of [rock, paper, scissors] = pcChoice;

const pcChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
console.log(pcChoice);


//Request or prompt for choice and save in a variable = yourChoice;

let yourChoice = prompt('Rock, Paper, Scissors. Whats your choice?').toLowerCase();
console.log(yourChoice);


while (yourChoice != 'rock' && yourChoice != 'paper' && yourChoice != 'scissors' ){
    alert ('Please Input a correct choice');
    yourChoice = prompt('rock, paper, scissors. Whats your choice?').toLowerCase();

};


//Function rockPaperScissors
//bassed on checking choice, computer console logs verdict.

function rockPaperScissors(rock, paper, scissors){

    if (yourChoice === pcChoice){
        console.log('it\'s a tie');
    }

    //if your choice is wins

    else if (yourChoice === 'rock' && pcChoice === 'scissors' 
            || yourChoice === 'paper' && pcChoice === 'rock' 
            || yourChoice === 'scissors' && pcChoice === 'paper')
            {
                console.log(`You Won! ${yourChoice} beats ${pcChoice}`);
            }

    ////if your choice is loses

    else if (yourChoice === 'rock' && pcChoice === 'paper' 
                || yourChoice === 'paper' && pcChoice === 'scissors' 
                || yourChoice === 'scissors' && pcChoice === 'rock')
                {
                    console.log(`You Lose! ${pcChoice} beats ${yourChoice}`); 
                } 

    else {
        console.log('Input a choice');
    }   

    }

//call Function rockPaperScissors();

rockPaperScissors();

// add function to add scores */


//Model 2

//Generate possible choices

const choiceArray = ['rock', 'paper', 'scissors'];


//Generate computers choice by random from array of [rock, paper, scissors] = pcChoice;

const pcChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
console.log(pcChoice);


//Request or prompt for choice and save in a variable = yourChoice;

let yourChoice = prompt('Rock, Paper, Scissors. Whats your choice?').toLowerCase();
console.log(yourChoice);


while (yourChoice != 'rock' && yourChoice != 'paper' && yourChoice != 'scissors' ){
    alert ('Please Input a correct choice');
    yourChoice = prompt('rock, paper, scissors. Whats your choice?').toLowerCase();

};

let yourScore = 0;
let pcScore = 0;
//Function rockPaperScissors
//bassed on checking choice, computer console logs verdict.

function rockPaperScissors(rock, paper, scissors){
    let newYourScore;
    let newPcScore

    if (yourChoice === pcChoice){
        let itsDraw = 'it\'s a tie';
        console.log(itsDraw);
        if (itsDraw = true) {newYourScore = yourScore + 0;
        let currentScore = `Your Score = ${newYourScore} : Pc Score = ${pcScore}`;
        console.log(currentScore);
        return;}
    }
    

    //if your choice is wins

    else if (yourChoice === 'rock' && pcChoice === 'scissors' 
            || yourChoice === 'paper' && pcChoice === 'rock' 
            || yourChoice === 'scissors' && pcChoice === 'paper')
            {
                let youWin = `You Won! ${yourChoice} beats ${pcChoice}`;
                console.log(youWin);
                if (youWin = true) {newYourScore = yourScore + 1;
                    let currentScore = `Your Score = ${newYourScore} : Pc Score = ${pcScore}`;
                    console.log(currentScore);
                    return;}
            }

    ////if your choice is loses

    else if (yourChoice === 'rock' && pcChoice === 'paper' 
                || yourChoice === 'paper' && pcChoice === 'scissors' 
                || yourChoice === 'scissors' && pcChoice === 'rock')
                {
                    youLose = `You Lose! ${pcChoice} beats ${yourChoice}`;
                    console.log(youLose); 
                    if (youLose = true) {newPcScore = yourScore + 1;
                        let currentScore = `Your Score = ${newYourScore} : Pc Score = ${newPcScore}`;
                        console.log(currentScore);
                        return;}
                } 
            
 

    }

//call Function rockPaperScissors();

rockPaperScissors();

// add function to add scores
