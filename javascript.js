function getComputerChoice() {
    let randomBelowThree = Math.floor(Math.random() * 3);
    let computerChoice;
    console.log(randomBelowThree);
    console.log(computerChoice);
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

getComputerChoice();
