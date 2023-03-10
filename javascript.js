function getComputerChoice(randomNumber(3)) {
    let randomBelowThree = Math.floor(Math.random * 3);
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