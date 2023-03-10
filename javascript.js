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

function playRound() {
    computerChoice = getComputerChoice();
    playerSelection = (prompt("Choose rock, paper, or scissors")).toLowerCase();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        playerSelection = (prompt("That's not a valid answer! Choose rock, paper, or scissors")).toLowerCase();
    }

}