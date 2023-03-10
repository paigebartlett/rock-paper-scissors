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
    if (selection != "rock" && selection != "paper" && selection != "scissors") {
        selection = (prompt("That's not a valid answer! Choose rock, paper, or scissors")).toLowerCase();
    }
    return selection;
}

function capitalize(inputString) {
    firstLetter = inputString.slice(0,1);
                firstLetter = firstLetter.toUpperCase();
                restOfString = inputString.slice(1)
                restOfString = restOfString.toLowerCase();

                return firstLetter + restOfString;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`;
        playerScore++:
    }
    else if (playerSelection === computerSelection) {
        return `It's a tie! You both choose ${playerSelection}.`;
    }
    else {
        return `You lose :( ${capitalize(computerSelection)} beats ${playerSelection}.`;
        computerScore++:
    }
}

console.log(playRound(getPlayerSelection(),getComputerChoice()));;

let playerScore; 
let computerScore; 

function game() {
    playerScore = 0;
    computerScore = 0; 
    for (let i = 0; i < 5; i++) {
        playRound;
    }
}