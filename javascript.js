function getComputerChoice(randomNumber(3)) {
    let randomBelowThree = Math.floor(Math.random * 3);
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
