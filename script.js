function getComputerChoice() {
    let answer = Math.floor(Math.random() * 3);
    if (answer === 0) {
        return 'rock';
    } else if (answer === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    return prompt("Welcome to rock, paper & scissors game, please enter your answer");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        return "It's a tie";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "Human wins!!";
    } else {
        return "Human loses!!";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        const result = playRound(humanSelection, computerSelection);
        console.log(result);
        
        if (result === "Human wins!!") {
            humanScore++;
        } else if (result === "Human loses!!") {
            computerScore++;
        }
        
        console.log("Human " + humanScore + ", Computer " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Human wins the whole round");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the whole round");
    } else {
        console.log("It's a tie for the whole round");
    }
}

playGame();