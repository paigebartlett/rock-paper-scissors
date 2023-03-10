function getComputerChoice() {
    let randomBelowThree = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomBelowThree === 0) {
        computerChoice = "rock";
    }
    else if (randomBelowThree === 1) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getPlayerSelection() {
    let selection = (prompt("Choose rock, paper, or scissors")).toLowerCase();
    while (selection != "rock" && selection != "paper" && selection != "scissors") {
        selection = (prompt("That's not a valid answer! Choose rock, paper, or scissors")).toLowerCase();
    }
        return selection;
}

function capitalize(inputString) {
    firstLetter = inputString.slice(0,1);
                firstLetter = firstLetter.toUpperCase();
                restOfString = inputString.slice(1);
                restOfString = restOfString.toLowerCase();

                return firstLetter + restOfString;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win! ${capitalize(playerSelection)} beats ${computerSelection}.`);
        return "player";
    }
    else if (playerSelection === computerSelection) {
        console.log(`It's a tie! You both choose ${playerSelection}.`);
    }
    else {
        console.log(`You lose :( ${capitalize(computerSelection)} beats ${playerSelection}.`);
        return "computer";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0; 
    for (let i = 0; i < 5; i++) {
        let roundResult = (playRound(getPlayerSelection(),getComputerChoice()));
        if(roundResult === "player") {
            playerScore++;
        }
        else if (roundResult === "computer") {
            computerScore++;
        }
    }
    let winner; 
    if (playerScore > computerScore) {
        winner = "player.";
    }
    else if (playerScore < computerScore){
        winner = "computer."
    }
    else {
        winner = "no one. It's a tie!"
    }
    return `Final score: Player: ${playerScore} & Computer: ${computerScore} The winner is ${winner}`;
}

console.log(game());