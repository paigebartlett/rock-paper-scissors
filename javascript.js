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
    console.log(computerChoice);
    return computerChoice;
}

function getPlayerSelection() {
    let selection = (prompt("Choose rock, paper, or scissors")).toLowerCase();
    if (selection != "rock" && selection != "paper" && selection != "scissors") {
        selection = (prompt("That's not a valid answer! Choose rock, paper, or scissors")).toLowerCase();
    }
}

function playRound() {
    computerChoice = getComputerChoice();
}