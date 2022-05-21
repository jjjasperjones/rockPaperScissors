/*/ Function to be executed 
 //Model 2

//Generate possible choices

const choiceArray = ['rock', 'paper', 'scissors'];

// Declare scores
let yourScore = 0;
let pcScore = 0;


    //Generate computers choice by random from array of [rock, paper, scissors] = pcChoice;
    function pcChoices(){
    pcChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];};
    pcChoices();
    console.log(pcChoice); */

    function choiceSelect(e){
        yourChoice = e.target.id;
    }
    document.addEventListener('click', choiceSelect);
    //Your Choice cannot log here.
    console.log(yourChoice);

    

    
    /*/Generate your choice and save in a variable = yourChoice;
    function yourChoices(){
    document.addEventListener('click', (e) => {
    // Retrieve id from clicked element 
    return e.target.id;
    
    console.log(yourChoice);
    });
    
    }
    yourChoices();
    console.log(yourChoice);*/



/*/Function rockPaperScissors
function rockPaperScissors(){

    //Loop untill input is valid
    if (yourChoice != 'rock' 
        && yourChoice != 'paper' 
        && yourChoice != 'scissors' ){
            console.log('invalid');
            return;
        };


    if (yourChoice === pcChoice){
        yourScore += 0;
        let itsDraw = 'it\'s a tie';
        console.log(itsDraw);
        let scoreboard = `Your Score = ${yourScore} : Pc Score = ${pcScore}` 
            return scoreboard;
    }
    

    //if your choice wins
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

    ////if your choice loses
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
    */